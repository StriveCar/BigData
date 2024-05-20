import request from '@/utils/request'

export default {
    getAllEarn() {
        return request({
            url: '/onePointOne/currencyCount',
            method: 'get',
        })
    },
    getUseAiCount() {
        return request({
            url: '/onePointOne/aiCount',
            method: 'get',
        })
    },
    getLanguageCount() {
        return request({
            url: '/onePointOne/languageCount',
            method: 'get',
        })
    }, 
    getEmploymentCount() {
        return request({
            url: '/onePointOne/employmentCount',
            method: 'get',
        })
    },
}
