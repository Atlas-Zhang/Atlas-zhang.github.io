export function randomString(len) {
  const len1 = len || 32
  const chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz12345678'
  const maxPos = chars.length
  let pwd = ''
  for (let i = 0; i < len1; i++) {
    pwd += chars.charAt(Math.floor(Math.random() * maxPos))
  }
  return pwd
}

/**
 * 将对o1 数据 copy 到 o2上
 * @param {*} o1
 * @param {*} o2
 */
export function assignCopy(o1, o2) {
  Object.keys(o1).forEach((key) => {
    // o2属性
    if (key in o2) {
      o2[key] = o1[key]
    }
  })
  return o2
}

/**
 * 提取 HTML
 * @param {} htmlStr
 * @returns
 */
export function stripHTML(htmlStr) {
  if (htmlStr) {
    var reg = /<(?:.|\s)*?>/g
    return htmlStr.replace(reg, '')
  } else {
    return ''
  }
}




export function processContent(content) {
  if (content) {
    const imgStr = '<img style="width: "100%" src="%s"/>'
    var contentStr = ''
    if (content.includes('<img ')) {
      return content
    }
    const resultList = content.split(',')
    resultList.forEach(item => {
      if (item.includes('https://li-ning1990.oss-cn-shanghai.aliyuncs.com')) {
        contentStr += imgStr.replace('%s', item)
      }
    })
    return contentStr
  } else {
    return ''
  }
}


export default {}