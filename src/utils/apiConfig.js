const debug = process.env.NODE_ENV === 'development'
const baseUrl = debug ? '' : ''

export { baseUrl }
