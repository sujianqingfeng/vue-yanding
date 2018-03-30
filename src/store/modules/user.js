import {apiConst, http} from '../../api'

const state = {
  info: {}
}

const getters = {
  info: state => state.info
}

const actions = {
  getUser: ({commit}, id) => {
    console.log(id)
    http.get(apiConst.getUserInfo(id))
       .then(info => commit('setUser', info))
  }
}

const mutations = {
  setUser: (state, info) => {
    state.info = info
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}