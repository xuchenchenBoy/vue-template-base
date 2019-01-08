
export default function getWebOAuthUrl ({
  appId,
  domain,
  qunId,
  oauthPlatform = 'cloud',
  callbackUrl,
  redirectUri = window.location.href,
  isWechat = true,
  isHybrid = false,
  hostHref = '',
  link = ''
}) {
  const state = ''
  const scope = 'snsapi_userinfo'

  const redirectServerUri = ''
  redirectUri = link.replace(/&/g, '--')
  redirectUri += `&domain=${domain}&qunId=${qunId}&oauthPlatform=${oauthPlatform}`
  return `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appId}` +
    `&redirect_uri=${encodeURIComponent(redirectServerUri + '?referer=' + redirectUri)}` +
    `&response_type=code&scope=${scope}&state=${encodeURIComponent(state)}#wechat_redirect`
}
