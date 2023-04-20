/**
 * 模糊匹配，匹配字符串中 含有 pattern 的字符
 * @param {} str 
 * @param {*} pattern 
 * @returns 
 */
export function fuzzyMatch(str, pattern) {
    pattern = pattern.replace(/\*/g, '.*');
    const regex = new RegExp(pattern, 'i');
    return regex.test(str);
};

/**
 * 匹配 8 位数字
 */
export function isEightDigitNumber(str) {
    const pattern = /^\d{8}$/;
    return pattern.test(str);
}


export default {}