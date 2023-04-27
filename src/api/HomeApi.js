import {
    fetch
} from '@/utils/request';



/**
 * 查询列表
 * @returns {Promise<Response>}
 */
export function _queryHomeItems() {
    return fetch({
        url: `${import.meta.env.VITE_BASE_URL}/home/data`,
        method: 'get'
    });
}

export default {};