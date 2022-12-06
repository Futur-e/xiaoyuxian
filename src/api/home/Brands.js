import request from "@/utils/request";


export const getBrands = (limit)=>request('/home/brand','get', {limit})
