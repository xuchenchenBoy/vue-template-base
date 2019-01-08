import actionMiddleware from '@/utils/actionMiddleware'
import * as services from '@/service/home'

const homeVuex = {
  state: {
    count: 1,
    status: 'nothing status'
  },
  getters: { // 可以缓存计算的值，作为公用的值
    getCount: state => (state.count)
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--,
    onLoading: state => { state.status = 'pending status' },
    onSuccess: state => { state.status = 'success status' },
    onError: state => { state.status = 'error status' }
  },
  actions: {
    requestStatus (store, params) {
      const action = {
        types: ['onLoading', 'onSuccess', 'onError'],
        promise: services.getStatus(params)
      }
      actionMiddleware(action, store)
    },
    calcuateAdd ({state, commit, rootState}, params) {
      commit('increment')
    },
    calcuateDEC ({state, commit, rootState}, params) {
      commit('decrement')
    }
  }
}

export default homeVuex
