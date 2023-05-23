import {
    fetch
} from '@/utils/request';

/**
 * 地址编码、逆编码
 * @returns {Promise<Response>}
 */
export function _submitDataForGeoCode(data) {
    return fetch({
        url: `${import.meta.env.VITE_BASE_URL}/tool-box/geocode/submit`,
        method: 'post',
        data: data
    });
}



/**
 * ai绘画 text to image
 * @returns {Promise<Response>}
 */
export function _submitDataForTextToImage(data) {
    return fetch({
        url: `${import.meta.env.VITE_BASE_URL}/tool-box/ai-image/text-image/submit`,
        method: 'post',
        data: data
    });
}



/**
 * 短链
 * @returns {Promise<Response>}
 */
export function _shortenUrl(data) {
    return fetch({
        url: `${import.meta.env.VITE_BASE_URL}//tool-box/api/url-shorten`,
        method: 'post',
        data: data
    });
}



export default {};