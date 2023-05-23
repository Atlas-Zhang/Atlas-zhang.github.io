import {
    fetch
} from '@/utils/request';

/**
 * 查询列表
 * @returns {Promise<Response>}
 */
export function _queryToolBoxTags() {
    return fetch({
        url: `${import.meta.env.VITE_BASE_URL}/tool-box-tag/list`,
        method: 'get'
    });
}



export default {};