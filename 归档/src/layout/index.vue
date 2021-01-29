<template>
  <div class="doc">
    <v-hearder />
    <div class="main">
      <router-view v-if="$store.state.commonHttp.isRouterAlive" />
    </div>
  </div>
</template>
<script>
import vHearder from './components/Header/index'
import storage from '@/utils/storage'
export default {
  components: {
    vHearder
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {
    // console.log(this.$route);
    const token = storage.getSession('token') // 初始化获取session用户信息
    if (token) {
      const username = storage.getSession('username')
      const account = storage.getSession('account')
      this.$store.state.login.username = username
      this.$store.state.login.account = account
    }
  },
  methods: {}
}
</script>
<style lang="scss">
@import "~@/assets/style/index.scss";
</style>
