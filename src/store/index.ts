import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state: any = {
  test: 'just is test'
}

const actions: any = {}

const mutations: any = {
  setTest(state: any, data: string) {
    state.test = data
  }
}

const getters: any = {}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})