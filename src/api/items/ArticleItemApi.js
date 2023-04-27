import {
    fetch
} from '@/utils/request';

/**
 * 查询列表
 * @returns {Promise<Response>}
 */
export function _queryArticleItems(
    data) {
    return fetch({
        url: `${import.meta.env.VITE_BASE_URL}/article/list`,
        method: 'get',
        params: data
    });
}

/**
 * 根据 id 查询
 * @returns {Promise<Response>}
 */
export function _queryArticleItem(articleId) {
    return fetch({
        url: `${import.meta.env.VITE_BASE_URL}/article/${articleId}/detail`,
        method: 'get',
    });
}

export default {};