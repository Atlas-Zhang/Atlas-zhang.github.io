import {
    fetch
} from '@/utils/request';

/**
 * 查询列表
 * @returns {Promise<Response>}
 */
export function _queryArticleItemsForUser(
    data
) {
    return fetch({
        url: `${import.meta.env.VITE_BASE_URL}/article/list/forUser`,
        method: 'get',
        params: data
    });
}

/**
 * 根据 id 查询
 * @returns {Promise<Response>}
 */
export function _queryToolItemForUser(data) {
    return fetch({
        url: `${import.meta.env.VITE_BASE_URL}/ai-tools/list/forUser`,
        method: 'get',
        params: data
    });
}

export default {};