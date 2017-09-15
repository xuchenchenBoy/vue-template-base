const homeVuex = {
  state: {
    count: 1
  },
  getters: { // 可以缓存计算的值，作为公用的值
    getCount: state => (state.count)
  },
  mutations: { // mutations,即由action触发改变state，需同步操作
    increment: state => state.count++,
    decrement: state => state.count--
  },
  actions: { // actions,可以触发mutations
    calcuateAdd ({state, commit, rootState}, params) {
      commit('increment')
    },
    calcuateDEC ({state, commit, rootState}, params) {
      commit('decrement')
    }
  }
}

export default homeVuex
