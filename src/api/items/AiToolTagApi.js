import {
    fetch
} from '@/utils/request';

/**
 * 查询列表
 * @returns {Promise<Response>}
 */
export function _queryAiToolTags() {
    return fetch({
        url: `${import.meta.env.VITE_BASE_URL}/ai-tool-tag/list`,
        method: 'get'
    });
}



export default {};