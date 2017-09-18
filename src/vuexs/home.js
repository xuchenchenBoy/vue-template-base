const homeVuex = {
  state: {
    count: 1,
    status: 0
  },
  getters: { // 可以缓存计算的值，作为公用的值
    getCount: state => (state.count)
  },
  mutations: { // mutations,即由action触发改变state，需同步操作
    increment: state => state.count++,
    decrement: state => state.count--,
    loading: state => { state.status = 1 },
    success: state => { state.status = 2 },
    error: state => { state.status = 3 }
  },
  actions: { // actions,可以触发mutations
    requestStatus ({state, commit, rootState}, params) {
      commit('loading')

      fetch('https://www.baidu.com')
      .then((res) => {
        commit('success')
      })
      .catch(() => {
        commit('error')
      })
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
