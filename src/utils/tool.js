


/**
 * 模糊匹配，匹配字符串中 含有 pattern 的字符
 * @param {} str 
 * @param {*} pattern 
 * @returns 
 */
export function fuzzyMatch(str, pattern){
    pattern = pattern.replace(/\*/g, '.*');
    const regex = new RegExp(pattern, 'i');
    return regex.test(str);
};


export default {}
