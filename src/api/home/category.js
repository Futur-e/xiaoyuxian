

//获取主页category的信息
import request from "@/utils/request";

export const getCategoryList =()=> request('/home/category/head','get')
