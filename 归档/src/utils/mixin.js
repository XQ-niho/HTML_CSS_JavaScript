export const mixinComm = { // 公共mixin
  data() {
    return {
      existWarning: null,
      localUrl: ''
    }
  },
  created() {
    this.getUrlFn()
  },
  computed: {

  },
  methods: {
    reloadRouter() {
      // 重载路由
      this.$store.state.commonHttp.isRouterAlive = false
      this.$nextTick(function() {
        this.$store.state.commonHttp.isRouterAlive = true
      })
    },
    getUrlFn() {
      // 获取url
      const url = window.location.href
      this.localUrl = url.split(this.$route.path)[0]
    },
    jumpToBlank(url, keyName, key) { // 地址，参数名，参数
      // 新开页面
      let params = ''
      keyName.forEach((res, index) => {
        params += ((index !== 0 ? '&' : '') + res + '=' + key[res])
      })
      const allurl = this.localUrl + url + '?' + params
      window.open(allurl, '_blank')
    },
    warningMessageFn(type, message) {
      // 公共提示
      if (!this.existWarning) {
        this.existWarning = this.$message({
          type: type,
          message: message,
          showClose: true,
          onClose: instance => {
            this.existWarning = null
          }
        })
      }
    },
    resetForm(form) {
      this.$refs[form].resetFields()
    }
  }
}
