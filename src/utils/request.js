import qs from 'qs'
import getWebOAuthUrl from '@/utils/wxAuth'
import { getAuthority } from '@/utils/auth'
import { baseUrl } from '@/utils/apiConfig'

function request ({method, url, body = {}}) {
  return async () => {
    method = method.toLowerCase()

    let options = {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'token': getAuthority()
      }
    }

    if (!(/http/.test(url))) {
      url = baseUrl + url
    }

    if (['get', 'jsonp'].indexOf(method) >= 0 && body) {
      url = url.replace(/\?$/, '')
      if (/\?/.test(url)) {
        url += '&'
      } else {
        url += '?'
      }
      url += qs.stringify(body)
    } else {
      options.body = body && JSON.stringify(body)
    }

    let res
    res = await fetch(url, options)
    res = await res.json()

    const shouldRedirect = res.status === 401 // 是否需要跳转
    if (shouldRedirect) {
      const link = window.location.href
      const {appId, domain, qunId, callbackUrl, oauthPlatform} = res.data || {}
      const oAuthParams = {
        appId,
        domain,
        qunId,
        callbackUrl,
        oauthPlatform,
        link
      }
      window.location.href = getWebOAuthUrl(oAuthParams)
    } else if (res.status !== 1 && res.status !== 401) {
      window.alertTip(res.msg)
    }
    return res
  }
}

function postFetch (url, body) {
  return request({ method: 'post', url, body })
}

function getFetch (url, body) {
  return request({ method: 'get', url, body })
}

export default request
export { postFetch, getFetch }
