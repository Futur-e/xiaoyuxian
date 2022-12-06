import request from "@/utils/request";

export const getGoodes = () => {
    return request('home/goods', 'get')
}
