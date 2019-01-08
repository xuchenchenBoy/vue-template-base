
export function setAuthority (token) {
  window.localStorage.setItem('token', token)
}

export function getAuthority () {
  return window.localStorage.getItem('token') || ''
}

export function removeAuthority () {
  window.localStorage.removeItem('token')
}
