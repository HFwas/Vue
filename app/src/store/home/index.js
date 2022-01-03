//home模块的仓库
import {reqCategoryList} from "@/api";

const state = {
    // state中数据默认初始值别瞎写，服务器返回对象，服务器返回数组，【根据接口返回值初始化的】
    categoryList:[]
};
const mutations = {
    CATEGORYLIST(state, categoryList){
        state.categoryList = categoryList;
    }

};
const actions = {
    // 通过API里面的接口函数调用，向服务器发请求，获取服务器的数据
    async getCategoryList(commit){
        let categoryList = await reqCategoryList();
        if (categoryList.code === 200) {
            commit.commit('CATEGORYLIST', categoryList.data);
        }
    }
};
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters
}