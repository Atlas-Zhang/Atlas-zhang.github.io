import {
    fetch
} from '@/utils/request';

/**
 * 查询列表
 * @returns {Promise<Response>}
 */
export function _queryAiToolItems(
    data
) {
    return fetch({
        url: `${import.meta.env.VITE_BASE_URL}/ai-tool-item/list`,
        method: 'get',
        params: data
    });
}

/**
 * 根据 id 查询
 * @returns {Promise<Response>}
 */
export function _queryAiToolItem(AiToolItemId) {
    return fetch({
        url: `${import.meta.env.VITE_BASE_URL}/ai-tool-item/${AiToolItemId}/detail`,
        method: 'get',
    });
}


/**
 * 用户关注,
 * @returns {Promise<Response>}
 */
export function _likeAiToolItem(AiToolItemId) {
    return fetch({
        url: `${import.meta.env.VITE_BASE_URL}/ai-tool-item/${AiToolItemId}/like/user`,
        method: 'post',
    });
}


/**
 * 根据 id 查询
 * @returns {Promise<Response>}
 */
export function _cancelLikeAiToolItem(AiToolItemId) {
    return fetch({
        url: `${import.meta.env.VITE_BASE_URL}/ai-tool-item/${AiToolItemId}/cancel-like/user`,
        method: 'post',
    });
}



export default {};