<!--登录-->
<template>
  <div class="login-contain">
    <div class="login-system-name">
      <img src="@/assets/images/logo.png" alt>
    </div>
    <div class="login-center">
      <div class="login-form-wrap">
        <p class="login-form__title">用户登录</p>
        <el-form ref="ruleForm" size="small" :rules="rules" :model="loginForm" class="login-form">
          <el-form-item prop="account">
            <el-input
              v-model="loginForm.account"
              clearable
              placeholder="输入用户名"
              @keyup.enter.native="loginIn"
            >
              <svg-icon slot="prefix" class="form-item-icon" icon-name="icon-shoujidianji" />
            </el-input>
          </el-form-item>
          <el-form-item prop="password" style="margin-bottom: 0;">
            <el-input
              v-model="loginForm.password"
              clearable
              placeholder="输入密码"
              show-password
              @keyup.enter.native="loginIn"
            >
              <svg-icon slot="prefix" class="form-item-icon" icon-name="icon-mimamoren" />
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="login-btn" :disabled="logining" @click="loginIn">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {
  },
  data() {
    return {
      logining: false,
      loginForm: {
        account: '',
        password: ''
      },
      rules: {
        account: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      },
      params: {}
    }
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    loginIn() {
      this.$router.push({ path: '/home' })
    }
  }
}
</script>
<style lang="scss">
@import '~@/assets/style/login.scss';
</style>
