import { postFetch } from '@/utils/request'

export const getStatus = (body = {}) => {
  return postFetch('api', body)
}
