/**
 * 集中处理相应的mutations
 * @param  {Object} action 执行action传入的参数
 * @param  {Object} store  store对象
 */
const actionMiddleware = async (action, store) => {
  const { types, promise } = action
  if (types) {
    const [loading, success, error] = types
    store.commit(loading)
    try {
      const res = await promise()
      store.commit(success, res)
    } catch (e) {
      console.log('e=', e)
      store.commit(error)
    }
  } else {
    store.commit(action.type)
  }
}

export default actionMiddleware
