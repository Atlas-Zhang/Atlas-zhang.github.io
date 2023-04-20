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
        url: 'http://139.224.37.187:80/website/submit/code/valid',
        method: 'post',
        data: param
    });
}


export default {}