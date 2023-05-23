import {
    fetch
} from '@/utils/request';

/**
 * 查询列表
 * @returns {Promise<Response>}
 */
export function _queryToolBoxItems(
    data) {
    return fetch({
        url: `${import.meta.env.VITE_BASE_URL}/tool-box-item/list`,
        method: 'get',
        params: data
    });
}

/**
 * 根据 id 查询
 * @returns {Promise<Response>}
 */
export function _queryToolBoxItem(articleId) {
    return fetch({
        url: `${import.meta.env.VITE_BASE_URL}/tool-box-item/${articleId}/detail`,
        method: 'get',
    });
}


/**
 * 用户关注,
 * @returns {Promise<Response>}
 */
export function _likeToolBox(AiToolItemId) {
    return fetch({
        url: `${import.meta.env.VITE_BASE_URL}/tool-box-item//${AiToolItemId}/like/user`,
        method: 'post',
    });
}


/**
 * 根据 id 查询
 * @returns {Promise<Response>}
 */
export function _cancelLikeToolBox(AiToolItemId) {
    return fetch({
        url: `${import.meta.env.VITE_BASE_URL}/tool-box-item/${AiToolItemId}/cancel-like/user`,
        method: 'post',
    });
}



export default {};