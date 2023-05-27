// 评论apI 接口

import {
    fetch
} from '@/utils/request';



/**
 * ai绘画 text to image
 * @returns {Promise<Response>}
 */
export function _submitCommentData(data) {
    return fetch({
        url: `${import.meta.env.VITE_BASE_URL}/comment/submit-data`,
        method: 'post',
        data: data
    });
}




/**
 * 获取评论总数
 * @returns {Promise<Response>}
 */
export function _queryCommentData(data) {
    return fetch({
        url: `${import.meta.env.VITE_BASE_URL}/comment/list`,
        method: 'get',
        params: data
    });
}