// 微信公众平台交互

import {
    fetch
} from '@/utils/request';


/**
 * 校验验证码
 * @returns {Promise<Response>}
 */
export function _validateCode(param) {
    return fetch({
        // test
        url: 'https://tool.zeroingpython.top/website-api/website/submit/code/valid',
        // prod 环境
        // url: `${import.meta.env.VITE_BASE_URL}/submit/code/valid`,
        method: 'post',
        data: param
    });
}

/**
 * 校验验证码
 * @returns {Promise<Response>}
 */
export function _queryQcrCode() {
    return fetch({
        url: 'https://tool.zeroingpython.top/website-api/website//wx/qrCode/generate',

        // prod 环境
        // url: `${import.meta.env.VITE_BASE_URL}/wx/qrCode/generate`,
        method: 'get',
    });
}

export default {}