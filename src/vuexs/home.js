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
        promise: fetch('your api'),
        params
      }
      actionMiddleware(action, store) // 必须每次调用action时，都需要添加此中间件，有类似 middleWare 的处理方式吗？
    },
    calcuateAdd ({state, commit, rootState}, params) {
      commit('increment')
    },
    calcuateDEC ({state, commit, rootState}, params) {
      commit('decrement')
    }
  }
}

/**
 * 集中处理相应的mutations
 * @param  {Object} action 执行action传入的参数
 * @param  {Object} store  store对象
 */
const actionMiddleware = (action, store) => {
  const { types, promise } = action
  if (types) {
    const [loading, success, error] = types
    store.commit(loading)

    promise.then((res) => {
      store.commit(success, res)
    })
    .catch(() => {
      store.commit(error)
    })
  } else {
    store.commit(action.type)
  }
}

export default homeVuex
