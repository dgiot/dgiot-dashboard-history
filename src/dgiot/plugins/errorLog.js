import store from '@/store'
import { isArray, isString } from '@/utils/data/validate'
import { errorLog } from '@/config'

const needErrorLog = errorLog
const checkNeed = () => {
  const env = process.env.NODE_ENV
  if (isString(needErrorLog)) {
    return env === needErrorLog
  }
  if (isArray(needErrorLog)) {
    return needErrorLog.includes(env)
  }
  return false
}
if (checkNeed()) {
  Vue.config.errorHandler = (err, vm, info) => {
    // eslint-disable-next-line no-console
    const url = window.location.href
    err?.message !==
    "TypeError: Cannot read properties of undefined (reading 'MapTopic')"
      ? Vue.nextTick(() => {
          store
            .dispatch('errorLog/addErrorLog', {
              err,
              vm,
              info,
              url,
            })
            .then(() => {})
        })
      : console.warn('错误拦截:', err, vm, info)
  }
}
