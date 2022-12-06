// 分类模块
import {getCategoryList} from "@/api/home/category";
import {topCategory} from "@/api/constants";

export default {
    namespaced: true,
    state () {
        return {
            // 分类信息集合
            list: topCategory.map(item => ({ name: item }))
        }
    },
    mutations:{
        setCategory(state,list){
                state.list=list
        }
    },
    actions:{
        async getList({commit}) {
            let {result} = await getCategoryList()
                commit('setCategory',result)

        }

    }
}
