/**
 * @description 由于dgiot开源平台和项目地址代理api不一致，可以将项目配置文件放在以下。代理链接后面不要写/
 */
module.exports = {
  proxy: [
    /**
     * @description iotapi 联调接口。开发使用
     */
    {
      path: 'iotapi',
      target: 'http://121.5.102.15',
    },
    /**
     * @description 静态资源目录。开发使用
     */
    {
      path: 'dgiot_dashboard',
      target: 'https://dev.iotn2n.com',
    },
    /**
     * @description amis server 开发使用
     */
    {
      path: 'baidubce',
      target: 'https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock',
    },
    {
      path: 'amis',
      target: 'https://aisuda.bce.baidu.com/amis/api/mock2',
    },
  ],
}
