<template>
  <div class="comment-conf">
    <!-- Input form -->
    <div class="comment-form">
      <textarea
        v-model="dataForm.comment"
        class="comment-textarea"
        placeholder="写下你的评论..."
      />
      <div class="form-row">
        <div class="form-inputs">
          <input
            v-model="dataForm.name"
            class="form-input"
            placeholder="昵称 *"
          />
          <input
            v-model="dataForm.email"
            class="form-input"
            placeholder="邮箱（选填）"
          />
        </div>
        <button class="submit-btn" @click="submitComment">提交评论</button>
      </div>
    </div>

    <!-- Comment list -->
    <div v-if="dataForm.data.length > 0" class="comment-list">
      <p class="comment-count">{{ dataForm.pagination.totalNum }} 条评论</p>
      <CommentItem
        v-for="(item, index) in dataForm.data"
        :key="index"
        :name="item.name"
        :comment="item.comment"
        :createAt="item.createAt"
      />
      <div class="load-more-wrap" v-if="dataForm.data.length < dataForm.pagination.totalNum">
        <button class="load-more-btn" @click="queryMoreComment">加载更多</button>
      </div>
    </div>

    <p v-else class="no-comment">暂无评论，来发表第一条吧</p>
  </div>
</template>

<script setup>
import { ref, onMounted, defineProps, watch } from 'vue'
import { _submitCommentData, _queryCommentData } from '@/api/comment/CommentApi.js'
import { validateEmail } from '../../utils/tool.js'
import { ElMessage, ElMessageBox } from 'element-plus'
import CommentItem from './CommentItem.vue'

const Props = defineProps({
  totalNum: { type: Number, default: 0 },
  dataType: { type: String, default: 'TOOL_BOX' },
  relateId: { type: String, default: '' },
  typeName: { type: String, default: '' },
})

const dataForm = ref({
  name: '',
  comment: '',
  email: '',
  pagination: { pageSize: 10, current: 1, sort: 'createAt', direction: 'DESC', totalNum: 0 },
  data: [],
})

watch(() => Props.relateId, () => queryCommentData())

function validData() {
  if (dataForm.value.email && !validateEmail(dataForm.value.email)) {
    ElMessage({ type: 'warning', message: '邮箱格式有误' })
    return false
  }
  if (!dataForm.value.name) {
    ElMessage({ type: 'warning', message: '请填写昵称' })
    return false
  }
  if (!dataForm.value.comment) {
    ElMessage({ type: 'warning', message: '评论内容不能为空' })
    return false
  }
  return true
}

async function queryCommentData() {
  if (!Props.relateId) return
  const result = await _queryCommentData({
    relateId: Props.relateId,
    type: Props.dataType,
    page: dataForm.value.pagination.current,
    size: dataForm.value.pagination.pageSize,
    sort: dataForm.value.pagination.sort,
    direction: dataForm.value.pagination.direction,
  })
  if (result) {
    dataForm.value.data = result.content
    dataForm.value.pagination.totalNum = result.totalElements
  }
}

async function queryMoreComment() {
  if (dataForm.value.data.length >= dataForm.value.pagination.totalNum) return
  const result = await _queryCommentData({
    relateId: Props.relateId,
    type: Props.dataType,
    page: dataForm.value.pagination.current,
    size: dataForm.value.pagination.pageSize,
    sort: dataForm.value.pagination.sort,
    direction: dataForm.value.pagination.direction,
  })
  if (result) {
    dataForm.value.data = dataForm.value.data.concat(result.content)
  }
}

function resetData() {
  dataForm.value.name = ''
  dataForm.value.comment = ''
  dataForm.value.email = ''
}

async function submitComment() {
  if (!validData()) return
  ElMessageBox.confirm('确定提交这条评论？', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  }).then(async () => {
    const result = await _submitCommentData({
      relateId: Props.relateId,
      name: dataForm.value.name,
      email: dataForm.value.email,
      comment: dataForm.value.comment,
      typeName: Props.typeName,
      type: Props.dataType,
      link: window.location.href,
    })
    if (result) {
      ElMessage({ type: 'success', message: '提交成功，审核中' })
      resetData()
    }
  }).catch(() => {})
}

onMounted(() => queryCommentData())
</script>

<style scoped>
.comment-conf {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* ── Form ──────────────────────────────────────── */
.comment-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.comment-textarea {
  width: 100%;
  height: 100px;
  padding: 12px 14px;
  font-size: 0.9375rem;
  color: #09090b;
  background: #fafafa;
  border: 1px solid #e4e4e7;
  border-radius: 10px;
  resize: vertical;
  outline: none;
  transition: border-color 0.15s;
  font-family: inherit;
  line-height: 1.6;
}

.comment-textarea:focus {
  border-color: #2563eb;
  background: #fff;
}

.form-row {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.form-inputs {
  display: flex;
  gap: 8px;
  flex: 1;
  flex-wrap: wrap;
}

.form-input {
  flex: 1;
  min-width: 140px;
  padding: 8px 12px;
  font-size: 0.875rem;
  color: #09090b;
  background: #fafafa;
  border: 1px solid #e4e4e7;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.15s;
  font-family: inherit;
}

.form-input:focus {
  border-color: #2563eb;
  background: #fff;
}

.submit-btn {
  padding: 8px 20px;
  font-size: 0.875rem;
  font-weight: 500;
  color: #ffffff;
  background: #2563eb;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.15s;
}

.submit-btn:hover {
  background: #1d4ed8;
}

/* ── Comment list ──────────────────────────────── */
.comment-count {
  font-size: 0.875rem;
  color: #a1a1aa;
  margin-bottom: 16px;
}

.comment-list {
  display: flex;
  flex-direction: column;
}

.no-comment {
  font-size: 0.875rem;
  color: #a1a1aa;
  text-align: center;
  padding: 24px 0;
}

.load-more-wrap {
  display: flex;
  justify-content: center;
  margin-top: 16px;
}

.load-more-btn {
  padding: 7px 24px;
  font-size: 0.875rem;
  color: #52525b;
  background: #f4f4f5;
  border: 1px solid #e4e4e7;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.15s;
}

.load-more-btn:hover {
  background: #e4e4e7;
}
</style>
