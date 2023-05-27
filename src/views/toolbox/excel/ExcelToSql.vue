<script setup>
import { UploadFilled } from '@element-plus/icons-vue'
import { ref, getCurrentInstance } from 'vue'
import { read, utils, writeFile } from 'xlsx'
import { listToJson, converToColumnType } from '@/utils/dataFormatConvert'
import { useRouter, useRoute } from 'vue-router'
import ToolBoxDesc from '@/components/card/ToolBoxDesc.vue'
import CommentConf from '@/components/tools/CommentConf.vue'
const router = useRouter()

// 获取代理
const { proxy } = getCurrentInstance()
const globalData = ref({
  sheets: [],
  sqlOj: {
    tableName: '',
    data: '',
    dataIndex: 0
  }
})
const toolData = ref({
  title: 'EXCEL转SQL',
  desc: '上传xlsx、csv等文件，自动转换为格式化的SQL与JSON、XML等数据格式'
})

function listToColumnNames(dataList) {
  return dataList.map((item) => ({
    key: item,
    title: item,
    dataKey: item,
    align: 'center'
  }))
}

function uploadData(options) {
  const reader = new FileReader()
  reader.readAsArrayBuffer(options.file) // 读取上传的Excel文件
  reader.onload = () => {
    const data = new Uint8Array(reader.result) // 转换为Uint8Array格式
    const workbook = read(data, { type: 'array' }) // 使用XLSX库读取Excel文件
    workbook.SheetNames.forEach((itemName) => {
      // 获取数据
      var sheetData = []
      const sheet = workbook.Sheets[itemName]
      const json = utils.sheet_to_json(sheet, { header: 1 })
      if (json.length > 0) {
        sheetData.push(itemName)
        sheetData.push(json)
        sheetData.push(listToJson(json))
        sheetData.push(listToColumnNames(json[0]))
        globalData.value.sheets.push(sheetData)
      }
    })
    // 数据渲染完毕，调用
    tabChange(0)
  }
}

/**
 * 根据数据拼接 sql
 */
function concatSQL(tableName, tableColumns, data, colTypeJson) {
  var insertSqlPrefix = `INSERT INTO ${tableName} (`
  const createTableSQL = `CREATE TABLE ${tableName}(\n`
  var tempStr = createTableSQL
  tableColumns.forEach((item, index) => {
    tempStr = tempStr + `    ${item}	${colTypeJson[item]},\n`
    if (index < tableColumns.length - 1) {
      insertSqlPrefix = insertSqlPrefix + `${item}, `
    } else {
      insertSqlPrefix = insertSqlPrefix + `${item}) VALUES (`
    }
  })

  tempStr = tempStr + ');\n\n'
  // 拼接数据
  data.forEach((dataItem) => {
    var dataTempStr = insertSqlPrefix
    dataItem.forEach((subItem, index) => {
      // 根据 type 细化插入数据格式
      var dataValue
      if (colTypeJson[tableColumns[index]].includes('VARCHAR')) {
        dataValue = `'${subItem}'`
      } else {
        dataValue = `${subItem}`
      }
      if (index < tableColumns.length - 1) {
        dataTempStr = dataTempStr + `${dataValue}, `
      } else if (index === tableColumns.length - 1) {
        dataTempStr = dataTempStr + `${dataValue});\n`
      }
    })
    tempStr += dataTempStr
  })
  return tempStr
}

function tabChange(activeName) {
  globalData.value.sqlOj.dataIndex = activeName
  // 获取触发的 sheet
  const sheetValue = globalData.value.sheets[activeName]
  if (sheetValue && sheetValue[1].length > 1) {
    // 表名
    const tableName = sheetValue[0]
    // 获取数据
    const data = sheetValue[1].slice(1)
    const typeObj = converToColumnType(sheetValue[1][0], data[0])
    const tempResultStr = concatSQL(tableName, sheetValue[1][0], data, typeObj)
    globalData.value.sqlOj.tableName = tableName
    globalData.value.sqlOj.data = tempResultStr
  } else {
    globalData.value.sqlOj.tableName = 'None'
    globalData.value.sqlOj.data = '数据无法解析'
  }
}

function copyMessage() {
  try {
    navigator.clipboard.writeText(globalData.value.sqlOj.data)

    proxy.$message('SQL 已成功复制到粘贴板中')
  } catch (err) {
    proxy.$message('复制失败', 'error')
  }
}

function tableNameChange() {
  // 表名改变
  if (globalData.value.sheets.length > 0) {
    // 存在表数据改变
    const sheetValue = globalData.value.sheets[globalData.value.sqlOj.dataIndex]
    if (sheetValue && sheetValue[1].length > 1) {
      // 表名
      const tableName = globalData.value.sqlOj.tableName
      // 获取数据
      const data = sheetValue[1].slice(1)
      const typeObj = converToColumnType(sheetValue[1][0], data[0])
      const tempResultStr = concatSQL(tableName, sheetValue[1][0], data, typeObj)
      globalData.value.sqlOj.data = tempResultStr
    } else {
      globalData.value.sqlOj.tableName = 'None'
      globalData.value.sqlOj.data = '数据无法解析'
    }
  }
}
</script>
<template>
  <div class="p-2 lg:p-5 bg-gray-200 rounded-lg h-auto min-h-screen w-full lg:w-4/5 mt-2">
    <div class="border-l-[6px] border-blue-400  my-5">
      <span class="font-bold text-black pl-5 text-2xl">转换工具</span>
    </div>
    <ToolBoxDesc :title="toolData.title" :desc="toolData.desc"> </ToolBoxDesc>
    <div class="mb-8 ml-5"></div>
    <div class="excel-page h-auto flex-col flex justify-start mt-2 p-5">
      <div class="flex-grow-0 h-40">
        <el-upload
          class="upload-demo"
          drag
          action=""
          accept=".xls,.XLS,.xlsx,.XLSX"
          :http-request="uploadData"
        >
          <el-icon class="el-icon--upload"><upload-filled /></el-icon>
          <div class="el-upload__text">将文件拖拽至该位置 <em>点击上传</em></div>
          <template #tip>
            <div class="el-upload__tip text-sm">仅支持xls，xlsx、csv 等文件类型</div>
          </template>
        </el-upload>
      </div>
      <el-tabs
        type="border-card"
        class="flex-grow-0 mt-2"
        @tab-change="tabChange"
        v-if="globalData.sheets && globalData.sheets.length > 0"
      >
        <el-tab-pane :label="item[0]" v-for="(item, index) in globalData.sheets" :key="index">
          <div style="height: 40vh; width: 100%">
            <el-auto-resizer>
              <template #default="{ height, width }">
                <el-table-v2
                  ref="tableRef"
                  class="border-2 border-gray-300 rounded-xl"
                  :columns="item[3]"
                  :data="item[2]"
                  :width="width"
                  :height="height"
                />
              </template>
            </el-auto-resizer>
          </div>
        </el-tab-pane>
      </el-tabs>
      <div
        class="bg-gray-600 rounded w-full lg:w-17/18 mt-5 p-2 lg:p-0 other-height flex flex-col lg:flex-row max-h-full h-auto lg:h-96"
      >
        <div
          class="bg-blue-900 lg:m-3 rounded w-full lg:w-1/3 flex justify-start pl-3 py-3 lg:py-0 items-center"
        >
          <div
            class="font-mono w-full lg:w-11/12 flex flex-col justify-center items-start h-full text-xs"
          >
            <div class="flex justify-start w-full">
              <span class="text-white font-normal text-sm w-1/3 lg:w-2/5 inline-flex items-center"
                >更改表名</span
              >
              <el-input
                class="input-class w-3/5 lg:w-3/4"
                @input="tableNameChange"
                v-model="globalData.sqlOj.tableName"
                :disabled="globalData.sheets.length <= 0"
                placeholder="输入表名"
              />
            </div>
            <div class="h-50 mt-2 flex items-center">
              <span class="text-white font-normal text-sm h-full text-center mr-2">复制 SQL</span>
              <el-tooltip class="box-item" effect="dark" content="复制 SQL" placement="bottom">
                <el-icon class="text-xl" color="rgba(255,255,255,0.6)" @click="copyMessage"
                  ><CopyDocument
                /></el-icon>
              </el-tooltip>
            </div>
          </div>
        </div>
        <div class="h-80 lg:h-auto lg:bg-white mt-5 lg:m-3 w-full lg:w-2/3">
          <textarea
            wrap="off"
            class="bg-blue-900 text-white text-xs lg:text-lg font-mono rounded lg:flex-shrink h-full w-full p-3 overflow-x-scroll"
            :value="globalData.sqlOj.data"
          >
          </textarea>
        </div>
      </div>
    </div>

    <div class="flex flex-col w-full  p-2 lg:p-10 bg-white mt-10 gap-3 rounded-lg">
      <span class="border-l-4 pl-3 border-blue-600 text-black font-bold  lg:text-2xl mb-5">
        用户评论
      </span>
      <CommentConf
      :relate-id="'excel-process'"
      :type-name="'EXCEL转SQL'"
      :data-type="'AI_TOOL'">
      </CommentConf>
    </div>

  </div>
</template>

<style scoped lang="less">
.all-page {
  background-color: rgb(74, 85, 103);
}
.excel-page {
  background-color: white;
  border-radius: 5px;
  color: black;
  font-size: 20px;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    padding: 0.2rem;
  }
}

:deep(.el-upload-dragger) {
  padding: 0px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  .el-icon {
    color: white;
    margin-bottom: 0px;
  }

  .el-upload__text {
    color: white;
  }
}

:deep(.input-class) {
  --el-input-bg-color: rgba(77, 85, 98, 0.8);
  --el-input-text-color: black;
  border-radius: 2em;
  --el-input-border-color: rgb(37, 57, 133);
  input .el-input__inner {
    font-family: monospace;
  }
}

textarea::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  cursor: pointer;
}

textarea::-webkit-scrollbar-track {
  background-color: #f1f1f1;
  cursor: pointer;
}

textarea::-webkit-scrollbar-thumb {
  background-color: #888;
  cursor: pointer;
}
</style>
