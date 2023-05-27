import {
    ElLoading
} from 'element-plus'




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


export function isValidUrl(url) {
    let pattern = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;
    return pattern.test(url);
}



/**
 * 校验邮箱
 * @param {} email 
 * @returns 
 */
export function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}




export function loadingMsg() {
    return ElLoading.service({
        lock: true,
        text: '加载中',
        background: 'rgba(0, 0, 0, 0.3)'
    })
}


export default {}