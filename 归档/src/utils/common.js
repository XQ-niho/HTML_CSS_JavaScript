export default {
  getWinWH() {
    // 获取文档可是区域宽高
    return {
      winW: window.innerWidth,
      winH: window.innerHeight
    }
  },
  translateTime(p, sym, time) { // 时间戳，分隔符,time(不传则不显示，1 显示时分， 2 显示时分秒)
    // 将时间戳转为特定符号分隔的日期
    if (p) {
      const symbol = sym || '-'
      const val = new Date(p)
      const year = val.getFullYear() // getFullYear getYear
      let month = val.getMonth() + 1
      let result = ''
      if (month < 10) {
        month = '0' + month
      }
      let day = val.getDate()
      if (day < 10) {
        day = '0' + day
      }
      let hour = val.getHours()
      if (hour < 10) {
        hour = '0' + hour
      }
      let minu = val.getMinutes()
      if (minu < 10) {
        minu = '0' + minu
      }
      let sec = val.getSeconds()
      if (sec < 10) {
        sec = '0' + sec
      }
      if (time === 1) {
        result = year + symbol + month + symbol + day + ' ' + hour + ':' + minu // 2019-02-01 12:30
      } else if (time === 2) {
        result = year + symbol + month + symbol + day + ' ' + hour + ':' + minu + ':' + sec // 2019-02-01 12:30:20
      } else {
        result = year + symbol + month + symbol + day // 2019-02-01
      }
      return result
    } else {
      return ''
    }
  },
  generateUUID: function() { // 生成唯一标识UUID
    var d = new Date().getTime()
    if (window.performance && typeof window.performance.now === 'function') {
      d += performance.now() // use high-precision timer if available
    }
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (d + Math.random() * 16) % 16 | 0
      d = Math.floor(d / 16)
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
    })
    return uuid
  }
}
