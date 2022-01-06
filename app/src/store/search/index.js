import {reqGetSearchInfo} from "@/api";
//search模块的仓库
const state = {
    searchList:[]
};
const mutations = {
    GETSEARCHINFO(state, searchList) {
        state.searchList = searchList;
    }
};
const actions = {
    // 获取search模块数据
    async getSearchInfo({commit}, params={}) {
        // 当前这个reqGetSearchInfo这个函数在调用获取服务器数据的时候，至少传递一个参数（空对象）
        // params行参数：是当用户派发action的时候，第二个参数传递过来的，至少是一个空对象
        let response = await reqGetSearchInfo(params);
        if (response.code === 200) {
            commit.commit('GETSEARCHINFO', response.data);
        }
    }
};
//计算属性，在项目当中是为了简化数据而生
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters
}