// 数据格式初始化

/**
 * input => [[a,b],[c,d]]
 * output => [{a:c},{b:d}]
 * 将 list 数据转化为 json list ，第一行为表头，第2-n 行为数据;
 * @param {} listData 
 */
export function listToJson(listData){
    const returnList = []
    console.log('listData is ',listData)
    if(listData.length>1){
       
        const columnNames = listData[0]
        listData.slice(1).forEach(element => {
            const newObj = {}
            element.forEach((ele,index) => {
                newObj[columnNames[index]] = ele
            } )
            returnList.push(newObj)
        });
      
    }
    console.log('listData is ',returnList)
    return returnList;
}


/**
 * 浮点型判断
 * @param  n 
 * @returns 
 */
function isFloat(n) {
    return typeof n === 'number' && n % 1 !== 0;
}

export function converToColumnType(columnNames,data){
    console.log('columnNames is',columnNames)
    var typeObj = {}
    data.forEach((item,index)=> {
        const columnName = columnNames[index]
        typeObj[columnName] = 'VARCHAR(512)'
        if(typeof item === 'number'){
            if(isFloat(item)) {
                typeObj[columnName] = 'DECIMAL(10,2)'
            }else{
                typeObj[columnName] = 'INT(11)'
            }
        }
        if( typeof item === 'string') {
            typeObj[columnName] = 'VARCHAR(512)'
        }
    })
    console.log('typeObj is ',typeObj)
    return typeObj
}


export function copyData(content){
    console.log('content is ',content)
}


export default {}