import {
    fetch
} from '@/utils/request';

/**
 * 查询列表
 * @returns {Promise<Response>}
 */
export function _queryArticleTags() {
    return fetch({
        url: `${import.meta.env.VITE_BASE_URL}/article-tag/list`,
        method: 'get'
    });
}



export default {};