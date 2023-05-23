import {
    fetch
} from '@/utils/request';

/**
 * 查询列表
 * @returns {Promise<Response>}
 */
export function _queryPayPlans() {
    return fetch({
        url: `${import.meta.env.VITE_BASE_URL}/pay-plan/list`,
        method: 'get'
    });
}



export default {};