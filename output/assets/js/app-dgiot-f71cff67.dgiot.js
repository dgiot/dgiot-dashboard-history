/*!
 *  build: 杭州数蛙科技有限公司 
 *  copyright: dgiot-dashboard 
 *  author: h7ml(h7ml@qq.com) 
 *  Time: 2021-12-31 23:47:21
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app-dgiot-f71cff67"],{"14ba":function(e,t){e.exports={secret:{baidu:{map:"fnc5Z92jC7CwfBGz8Dk66E9sXEIYZ6TG",statistics:""},tencent:{map:""}}}},"197e":function(e,t,s){var o=s("4981").proxy;e.exports={proxy:o,baseURL:o[0].path,contentType:"application/json",requestTimeout:3e4,successCode:[200,0,201,204,404,500,"200","0","201","204","404","500"],errorCode:[401,209,"209","401"],statusName:"code",messageName:"msg",CODE_MESSAGE:{200:"服务器成功返回请求数据",201:"新建或修改数据成功",202:"一个请求已经进入后台排队(异步任务)",204:"删除数据成功",400:"发出信息有误",401:"用户没有权限(令牌、用户名、密码错误)",403:"用户得到授权，但是访问是被禁止的",404:"访问资源不存在",406:"请求格式不可得",410:"请求资源被永久删除，且不会被看到",500:"服务器发生错误",502:"网关错误",503:"服务不可用，服务器暂时过载或维护",504:"网关超时"}}},"368a":function(e,t){e.exports={appId:"wj9jpe/dgiot",uid:"THE_USER_ID_IN_YOUR_APP",name:"lsxredrain",email:"lsxredrain@163.com",subscriptionType:"dgiot_dashboard"}},"36f9":function(e,t){var s={js:["//zjjcmspublic.oss-cn-hangzhou-zwynet-d01-a.internet.cloud.zj.gov.cn/jcms_files/jcms1/web1/site/script/zjzwfw-2019/zjzwfw_2019_wbdy_top.js","//detest.jxt.zj.gov.cn/web-third-js/static/js/header.js","//zjjcmspublic.oss-cn-hangzhou-zwynet-d01-a.internet.cloud.zj.gov.cn/jcms_files/jcms1/web1/site/script/1083/2009211541482763.js","//d.alicdn.com/alilog/mlog/aplus.js?id=202951085"]};e.exports=s},"448d":function(e,t){e.exports={layout:"comprehensive",themeName:"ocean",columnStyle:"horizontal",fixedHeader:!0,showProgressBar:!0,showTabs:!0,tabsBarStyle:"card",showTabsBarIcon:!0,showLanguage:!0,showRefresh:!0,showSearch:!1,showTheme:!0,showNotice:!0,showFullScreen:!0,showThemeSetting:!0,pictureSwitch:!0}},4981:function(e,t){e.exports={proxy:[{path:"iotapi",target:"https://dev.iotn2n.com"},{path:"dgiot_dashboard",target:"http://dev.iotn2n.com"},{path:"baidubce",target:"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock"}]}},"4a1a":function(e,t,s){"use strict";s.r(t),t["default"]={config:{source:{type:"radio",label:"数据来源",tip:"请选择数据来源",options:["手动输入","产品字典","产品物模型"],default:"手动输入",rules:{type:"string"}},field:{type:function(e){return"手动输入"==e.source?"input":"select"},label:"字段名",tip:"字段名不可重复",options:["both","horizontal","vertical"],rules:{type:"string"}},label:{type:"input",label:"标签"},layout:{type:"slider",label:"宽度",attrs:{min:1,max:24,formatTooltip:function(e){return"".concat(e," / 24")}}},default:{type:"input",label:"默认值"},required:{type:"yesno",label:"校检",title:"是否必填"},rules:{type:"data-editor",label:"校检规则",title:"新增校检规则",default:[],attrs:{types:["array","object"],rows:10},tip:'校检规则文档, 请<a target="_blank" href="https://www.yuque.com/chaojie-vjiel/vbwzgu/qzzkpd" class="el-link el-link--primary">点击查看</a>'},options:{type:"data-editor",label:"选项",attrs:{types:["string","array","function","promise","asyncfunction"],rows:10},vif:function(e){return e.isOptions},tip:'options支持`API接口`、`数组`、`函数`、`Promise`等, 具体看<a target="_blank" href="https://www.yuque.com/chaojie-vjiel/vbwzgu/rgenav" class="el-link el-link--primary">文档</a>'},prop:{type:"data-editor",label:"options 配置",vif:function(e){return e.isOptions},attrs:{types:["object"],rows:4}},optionsLinkageFields:{type:"dynamic",vif:function(e){return e.isOptions},label:"options 关联属性"},vif:{type:"data-editor",label:"联动显示/隐藏",attrs:{types:["function","boolean"]},tip:'支持`布尔值`和`函数`，具体请查看：<a target="_blank" href="https://www.yuque.com/chaojie-vjiel/vbwzgu/loffm6#wOVyc" class="el-link el-link--primary">文档</a>'},disabled:{type:"data-editor",label:"联动启用/禁用",attrs:{types:["function","boolean","string"]},tip:'支持`布尔值`和`函数`，具体请查看：<a target="_blank" href="https://www.yuque.com/chaojie-vjiel/vbwzgu/loffm6#zaIsz" class="el-link el-link--primary">文档</a>'},tip:{type:"input",label:"表单项提示"},isShowLabel:{label:"否显示标签",type:"radio-button",tip:"与全局isShowLabel作用相同",options:[{text:"显示",value:void 0},{text:"隐藏",value:!1}]},labelWidth:{label:"标签宽度",type:"input",tip:"需要以`px`作为单位, 例如`100px`, 默认为全局设置的labelWidth值"},break:{label:"强制折行",type:"radio-button",options:[{text:"正常",value:void 0},{text:"折行",value:!0}]},displayFormatter:{label:"显示处理函数",type:"data-editor",attrs:{types:["function"]}},valueFormatter:{label:"最终值处理函数",type:"data-editor",attrs:{types:["function"]}}},data:{}}},"5a26":function(e,t){e.exports={ogConfig:{"og:site_name":"dgiot-物联网平台","og:title":"物联网开发平台","og:description":"提供物联网垂直领域应用使能平台及解决方案","og:url":"https://prod.iotn2n.com","og:type":"article","article:publisher":"https://www.iotn2n.com","article:section":"dgiot","article:tag":"dgiot","og:image":"https://www.iotn2n.com/attachment/images/2021/08/09/image_1628483547_LQMfGmnU.jpg","og:image:secure_url":"https://www.iotn2n.com/attachment/images/2021/08/09/image_1628483547_LQMfGmnU.jpg","og:image:width":"1280","og:image:height":"640","twitter:card":"summary_large_image"}}},"633c":function(e,t,s){var o={css:["https://unpkg.com/iview/dist/styles/iview.css","https://unpkg.com/ant-design-vue/dist/antd.min.css","https://unpkg.com/vuetify/dist/vuetify.min.css","https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/platform/assets/css/styles/google.css","https://unpkg.com/mdi/css/materialdesignicons.min.css","https://unpkg.com/jsoneditor/dist/jsoneditor.min.css","https://unpkg.com/normalize.css/normalize.css","https://unpkg.com/nprogress/nprogress.css","https://unpkg.com/v-charts/lib/style.min.css","https://unpkg.com/codemirror/lib/codemirror.css","https://unpkg.com/codemirror/addon/lint/lint.css","https://unpkg.com/codemirror/theme/rubyblue.css","https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/platform/assets/css/loading.css",'https://cdn.jsdelivr.net/npm/v-charts/lib/style.min.css"',"https://unpkg.com/prismjs/themes/prism-tomorrow.css","https://unpkg.com/vue-prism-editor/dist/prismeditor.min.css","https://unpkg.com/vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.min.css"],js:["https://unpkg.com/vue/dist/vue.js","https://unpkg.com/vue-router/dist/vue-router.min.js","https://unpkg.com/vue-i18n@8.26.1/dist/vue-i18n.min.js","https://unpkg.com/cos-js-sdk-v5/dist/cos-js-sdk-v5.min.js","https://unpkg.com/nprogress/nprogress.js","https://unpkg.com/js-md5/build/md5.min.js","https://unpkg.com/ace-builds/src-min/ace.js","https://unpkg.com/ace-builds/src-min/ext-language_tools.js","https://unpkg.com/ace-builds/src-min/mode-json.js","https://unpkg.com/ace-builds/src-min/theme-monokai.js","https://unpkg.com/ace-builds/src-min/mode-erlang.js","https://unpkg.com/ace-builds/src-min/mode-sql.js","https://unpkg.com/ace-builds/src-min/theme-eclipse.js","https://unpkg.com/ace-builds/src-min/mode-json.js","https://unpkg.com/ace-builds/src-min/mode-text.js","https://unpkg.com/ace-builds/src-min/theme-gob.js","https://unpkg.com/ace-builds/src-min/theme-twilight.js","https://unpkg.com/ace-builds/src-min/mode-mysql.js","https://unpkg.com/ace-builds/src-min/mode-python.js","https://unpkg.com/vuedraggable/dist/vuedraggable.umd.min.js","https://unpkg.com/qs/dist/qs.js","https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/platform/assets/js/mqttws31.js","https://unpkg.com/konva/konva.min.js","https://unpkg.com/vue-konva/umd/vue-konva.min.js","https://unpkg.com/mockjs/dist/mock.js","https://unpkg.com/js-base64/base64.js","https://unpkg.com/vuex/dist/vuex.min.js","https://unpkg.com/sortablejs/Sortable.min.js","https://unpkg.com/mqtt/dist/mqtt.min.js","https://unpkg.com/jszip/dist/jszip.min.js","https://unpkg.com/jquery/dist/jquery.min.js","https://unpkg.com/echarts/dist/echarts.min.js","https://cdn.jsdelivr.net/npm/v-charts/lib/index.min.js","https://cdn.jsdelivr.net/npm/echarts-amap/dist/echarts-amap.min.js","https://cdn.jsdelivr.net/npm/echarts/dist/extension/bmap.min.js","https://unpkg.com/echarts/theme/macarons.js","https://unpkg.com/dayjs/dayjs.min.js","https://unpkg.com/lodash/lodash.min.js","https://unpkg.com/clipboard/dist/clipboard.min.js","https://unpkg.com/axios/dist/axios.min.js","https://unpkg.com/js-cookie","https://unpkg.com/vue-baidu-map/index.js","https://unpkg.com/moment/min/moment.min.js","https://unpkg.com/v-charts/lib/index.min.js","https://unpkg.com/xlsx/dist/xlsx.min.js","https://unpkg.com/screenfull/dist/screenfull.js","https://unpkg.com/jsplumb/dist/js/jsplumb.min.js","https://unpkg.com/jsencrypt/bin/jsencrypt.min.js","https://unpkg.com/vuedraggable/dist/vuedraggable.umd.min.js","https://unpkg.com/element-china-area-data/dist/app.js","https://unpkg.com/codemirror/lib/codemirror.js","https://unpkg.com/codemirror/mode/javascript/javascript.js","https://unpkg.com/codemirror/addon/lint/json-lint.js","https://unpkg.com/vue-codemirror/dist/vue-codemirror.js","https://unpkg.com/file-saver/dist/FileSaver.min.js","https://unpkg.com/vue-amap/dist/index.js","https://unpkg.com/jsoneditor/dist/jsoneditor.min.js","https://unpkg.com/vue-flv-player/dist/vue-flv-player.umd.min.js","https://unpkg.com/ezuikit-js","https://unpkg.com/f-render","https://unpkg.com/vue-ele-form","https://unpkg.com/fuzzy","https://unpkg.com/vue-prism-editor","https://unpkg.com/flv.js/dist/flv.min.js","https://unpkg.com/prismjs/components/prism-clike.min.js","https://unpkg.com/prismjs/components/prism-core.min.js","https://unpkg.com/vue2-perfect-scrollbar","https://unpkg.com/vue-multipane","https://unpkg.com/ant-design-vue/dist/antd.min.js","https://unpkg.com/iview/dist/iview.min.js","https://unpkg.com/vuetify/dist/vuetify.min.js","https://unpkg.com/ace-builds","https://unpkg.com/resize-observer-polyfill","https://unpkg.com/vditor","https://unpkg.com/fabric/dist/fabric.js","https://g.alicdn.com/de/prismplayer/2.8.2/aliplayer-min.js","https://unpkg.com/xterm","https://unpkg.com/xterm-addon-fit","https://unpkg.com/xterm-addon-attach","https://unpkg.com/vue-aliplayer-v2","https://unpkg.com/rutilsjs","https://unpkg.com/rdatejs","https://unpkg.com/bcryptjs"]};o.js[0]="https://unpkg.com/vue/dist/vue.min.js",e.exports={cdnUrl:o}},63539:function(e,t,s){var o={css:["normalize.css","nprogress.css","material_icons.css","iview.css","antd.min.css","google.css","materialdesignicons.min.css","style.min.css","codemirror.css","lint.css","amis/lib/themes/cxd.css","amis/lib/helper.css","amis/lib/themes/antd.css"],js:["vue.js","mqttws31.js","vue-router.min.js","vue-i18n.min.js","nprogress.js","vue-baidu-map.js","konva.min.js","vue-konva.min.js","qs.js","mock.js","base64.js","vuex.min.js","mqtt.min.js","jquery.min.js","index.min.js","bmap.min.js","dayjs.min.js","lodash.min.js","clipboard.min.js","axios.min.js","js-cookie.js","index.js","moment.min.js","screenfull.js","app.js","index.js","antd.min.js","iview.min.js","vuetify.min.js","resize-observer-polyfill.js","vue-aliplayer-v2.js","echarts.min.js","Sortable.min.js","vuedraggable.umd.min.js","vue-flv-player.umd.min.js","echarts-amap.min.js","md5.min.js","codemirror.js","vue-codemirror.js","vuedraggable.umd.min.js","vue-multipane.js","bcryptjs.js","macarons.js"]},i={css:["material_icons.css","iview.css","antd.min.css","google.css","materialdesignicons.min.css","style.min.css","codemirror.css","lint.css","amis/lib/themes/cxd.css","amis/lib/helper.css","amis/lib/themes/antd.css"],js:["jszip.min.js","jsplumb.min.js","javascript.js","json-lint.js","vditor.js","aliplayer-min.js","monaco/css.worker.js","monaco/editor.worker.js","monaco/html.worker.js","monaco/json.worker.js","monaco/ts.worker.js"]};o.js[0]="vue.min.js",e.exports={systemStatic:o,runTimeStatic:i}},"6db7":function(e){e.exports=JSON.parse('{"base":"vs-dark","inherit":true,"rules":[{"foreground":"75715e","token":"comment"},{"foreground":"e6db74","token":"string"},{"foreground":"ae81ff","token":"constant.numeric"},{"foreground":"ae81ff","token":"constant.language"},{"foreground":"ae81ff","token":"constant.character"},{"foreground":"ae81ff","token":"constant.other"},{"foreground":"f92672","token":"keyword"},{"foreground":"f92672","token":"storage"},{"foreground":"66d9ef","fontStyle":"italic","token":"storage.type"},{"foreground":"a6e22e","fontStyle":"underline","token":"entity.name.class"},{"foreground":"a6e22e","fontStyle":"italic underline","token":"entity.other.inherited-class"},{"foreground":"a6e22e","token":"entity.name.function"},{"foreground":"fd971f","fontStyle":"italic","token":"variable.parameter"},{"foreground":"f92672","token":"entity.name.tag"},{"foreground":"a6e22e","token":"entity.other.attribute-name"},{"foreground":"66d9ef","token":"support.function"},{"foreground":"66d9ef","token":"support.constant"},{"foreground":"66d9ef","fontStyle":"italic","token":"support.type"},{"foreground":"66d9ef","fontStyle":"italic","token":"support.class"},{"foreground":"f8f8f0","background":"f92672","token":"invalid"},{"foreground":"f8f8f0","background":"ae81ff","token":"invalid.deprecated"},{"foreground":"cfcfc2","token":"meta.structure.dictionary.json string.quoted.double.json"},{"foreground":"75715e","token":"meta.diff"},{"foreground":"75715e","token":"meta.diff.header"},{"foreground":"f92672","token":"markup.deleted"},{"foreground":"a6e22e","token":"markup.inserted"},{"foreground":"e6db74","token":"markup.changed"},{"foreground":"ae81ffa0","token":"constant.numeric.line-number.find-in-files - match"},{"foreground":"e6db74","token":"entity.name.filename.find-in-files"}],"colors":{"editor.foreground":"#F8F8F2","editor.background":"#1e1c1c","editor.selectionBackground":"#49483E","editor.lineHighlightBackground":"#3E3D32","editorCursor.foreground":"#F8F8F0","editorWhitespace.foreground":"#3B3A32","editorIndentGuide.activeBackground":"#9D550FB0","editor.selectionHighlightBorder":"#222218"}}')},"6fe3":function(e,t){e.exports={publicPath:"./",outputDir:"dist",assetsDir:"static",lintOnSave:!0,transpileDependencies:["resize-detector"],devPort:"80",providePlugin:{},build7z:!1,buildGzip:!0,imageCompression:!1,useCdn:!0,ignoreCdn:["php","bugtags","1279876845","qq"],iconfontId:["font_2759556_r8d9wroaw8"],isSmp:!0,CDN_URL:"/dgiot_dashboard/public",cdn:"//dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_release/dashboardCdn"}},9834:function(e,t){e.exports={isPwa:!1,pwaConfig:{workboxOptions:{skipWaiting:!0,clientsClaim:!0},themeColor:"#46bd87",msTileColor:"#ffffff",appleMobileWebAppCapable:"yes",appleMobileWebAppStatusBarStyle:"black",manifestOptions:{author:"h7ml",dateTime:new Date,name:"dgiot-dashboard",short_name:"dgiot-dashboard",description:"提供物联网垂直领域应用使能平台及解决方案",display:"standalone",orientation:"portrait-primary",prefer_related_applications:!1,background_color:"#ffffff",lang:"zh-CN",start_url:"/",scope:"/",theme_color:"#4fc08d",icons:[{src:"./dgiot_dashboard/public/assets/images/icons/android-chrome-192x192.png",sizes:"192x192",type:"image/png"},{src:"./dgiot_dashboard/public/assets/images/icons/android-chrome-512x512.png",sizes:"512x512",type:"image/png"},{src:"./dgiot_dashboard/public/assets/images/icons/android-chrome-maskable-192x192.png",sizes:"192x192",type:"image/png",purpose:"maskable"},{src:"./dgiot_dashboard/public/assets/images/icons/android-chrome-maskable-512x512.png",sizes:"512x512",type:"image/png",purpose:"maskable"}]}}}},"9b0d":function(e,t){e.exports={reconnect:!0,maxReconnectNum:10}},d4a5:function(e,t,s){var o=s("c32d");e.exports={title:"物联网开发平台",titleSeparator:" - ",titleReverse:!1,abbreviation:"dgiot-dashboard-pro",copyright:"杭州数蛙科技有限公司",keepAliveMaxNum:20,routerMode:"hash",routesWhiteList:["/login","/register","/callback","/404","/403"],loadingText:"正在加载中...",tokenName:"sessionToken",tokenTableName:"dgiot_auth_token",expiresTime:18e5,storage:"cookie",refreshSession:!0,noCookiePages:["","/login"],localHost:["tcloudbaseapp.com","gitee.io","github.io","vercel.app"],expiredTime:600,ignoreApi:["Navigation","Notification","_User"],cookieWhiteList:["cdnResource","language","theme","collapse","title","backgroundimage","logo","Copyright","title","name","_pcimg","_mimg","fileServer"],recordRoute:!1,logo:"vuejs-fill",i18n:"zh",messageDuration:3e3,errorLog:["development","production"],loginInterception:!0,loginRSA:!1,authentication:"all",supportVisit:!1,rolesControl:!1,uniqueOpened:!1,defaultOpeneds:[""],debounce:["doEdit"],clearConsole:!1,openFirstMenu:!0,templateFolder:"project",webpackBarName:"杭州数蛙科技有限公司",dateTime:o().format("YYYY-MM-DD HH:mm:ss"),noReloadRouter:["Workbench"],webpackBanner:" build: 杭州数蛙科技有限公司 \n copyright: dgiot-dashboard \n author: h7ml(h7ml@qq.com) \n Time: ",Keywords:"一站式物联网PaaS平台|物联网应用服务",Description:"提供物联网垂直领域应用使能平台及解决方案"}},d73b:function(e,t){var s={path:"/",name:"Root",component:"Layout",redirect:"/index",meta:{title:"总控台",icon:"home-2-line"},children:[{path:"index",name:"Index",component:"@/views/equipment_management/platform_overview",meta:{title:"总控台",icon:"home-2-line",noClosable:!0}}]},o={path:"/roles",name:"User",component:"Layout",redirect:"/structures",meta:{title:"多租户",icon:"admin-fill"},children:[{path:"/roles/menu",name:"Menu_management",component:"@/views/roles/menu",meta:{icon:"menu-2-fill",title:"菜单管理"}},{path:"/roles/roles",name:"Role_management",component:"@/views/roles/rolelist/roles",meta:{title:"角色管理",icon:"admin-line"}}]},i={path:"*",redirect:"/404",hidden:!0};e.exports={indexRoutes:s,errorRoutes:i,defaultRoutes:o}},f121:function(e,t,s){var o=s("5379").default,i=s("6fe3"),n=s("d4a5"),a=s("448d"),r=s("197e"),p=s("633c"),c=s("63539"),m=s("9834"),d=s("5a26"),l=s("9b0d"),u=s("368a"),g=s("36f9"),h=s("14ba"),j=s("9224"),f=o(o(o(o(o(o(o(o(o(o(o(o(o({},i),n),a),r),p),m),l),c),d),u),g),h),j);e.exports=f}}]);