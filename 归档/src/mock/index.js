const Mock = require('mockjs')
import mockdata from './data.js'
// 格式： Mock.mock( url, post/get , 返回的数据)；
// 延时400s请求到数据
Mock.setup({
  timeout: 1000
})
// 获取省市区城市下拉
Mock.mock('api/getCityCode', 'post', function(option) {
  return mockdata.cityCode
})

