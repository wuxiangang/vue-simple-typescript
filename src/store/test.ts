import { Commit } from 'vuex'
interface State {
  menulist: []
}

const state: State = {
  menulist: []
}

const mutations: any = {
  saveMenuList(states: State, params: []) {
    states.menulist = params
  },
}

const actions: any = {
  saveMenuListFN(context: { commit: Commit }, params: []) {
    context.commit('saveMenuList', params)
  },
}

export default {
    // namespaced: true, 
    state,
    mutations,
    actions,
}