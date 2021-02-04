/** ajax 请求函数模块
 * 返回值是 promise 对象(异步返回的数据是：response.data)
 */
import axios from 'axios'

export default function ajax (url, data = {}, type = 'GET') {
  return new Promise(function (reslove, reject) {
    // 执行异步 ajax 请求
    let promise
    // 准备 url query 参数数据
    if (type === 'GET') { // 数据拼接字符串
      let dataStr = ''
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key]
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      // 发送 get 请求
      promise = axios.get(url)
    } else {
      // 发送 post 请求
      promise = axios.post(url, data)
    }
    promise.then(function (response) {
      // 成功调用 resolve
      reslove(response.data)
    })
      .catch(function (error) {
        // 失败调用 reject
        reject(error)
      })
  }) 
}
