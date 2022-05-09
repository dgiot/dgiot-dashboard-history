/**
 * use
 */
import App from './App'
import i18n from './i18n'
import store from './store'
import router from './router'
import { isPwa, clearConsole } from './config'
import dgiotStore from '@dgiot/dgiot-mqtt-dashboard/src/store'
import '@/dgiot'
window.dgiotlogger =
  process.env.NODE_ENV !== 'development' && clearConsole
    ? new Lajax(`${location.origin}/iotapi/protocol`)
    : console
dgiotlogger.info('dgiot-dashboard环境变量：', dgiot)
dgiotlogger.info('dgiotlogger.queue：', dgiotlogger.queue)
if (isPwa) require('./registerServiceWorker')
process.env.NODE_ENV !== 'development'
  ? (Vue.config.productionTip = true)
  : (Vue.config.productionTip = false)
new Vue({
  el: '#dgiot',
  i18n,
  dgiotStore,
  store,
  router,
  render: (h) => h(App),
})
