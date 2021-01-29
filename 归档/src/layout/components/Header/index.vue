<template>
  <div class="header">
    <div class="header-con">
      <div class="logo">
        <img src="@/assets/images/logo.png">
        <ul class="list">
          <li class="item">用户名：系统管理员</li>
          <li class="item" @click="$router.push({path: '/'})">退出</li>
        </ul>
      </div>
      <div class="h-menu">
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          :default-active="activeIndex"
          :router="true"
        >
          <template v-for="(item, index) in menuList">
            <el-menu-item
              v-if="!item.hasOwnProperty('children') || item.children.length == 0"
              :key="item.url + index"
              :index="item.url"
            >{{ item.name }}</el-menu-item>
            <el-submenu
              v-else
              :key="item.url + index"
              :index="item.url"
              popper-class="h-menu-pop"
              :popper-append-to-body="false"
            >
              <template slot="title">{{ item.name }}</template>
              <template v-for="(itemIn, indexIn) in item.children">
                <el-menu-item
                  v-if="!itemIn.hasOwnProperty('children') || itemIn.children.length == 0"
                  :key="itemIn.url + index + indexIn"
                  :index="itemIn.url"
                >{{ itemIn.name }}</el-menu-item>
                <menu-item v-else :key="itemIn.url + index + indexIn" :item="itemIn" />
              </template>
            </el-submenu>
          </template>
        </el-menu>
      </div>
    </div>
  </div>
</template>
<script>
import MenuItem from './MenuItem'
export default {
  components: {
    MenuItem
  },
  data() {
    return {
      activeIndex: '',
      menuList: [
        {
          name: '首页',
          url: '/home'
        },
        {
          name: '在用产品',
          url: ''
        },
        {
          name: '5G+AI',
          url: ''
        },
        {
          name: '用户管理',
          url: ''
        },
        {
          name: '菜单管理',
          url: ''
        },
        {
          name: '系统管理',
          url: ''
        }
      ]
    }
  },
  computed: {
  },
  mounted() {
    this.activeIndex = this.$route.path
  },
  methods: {}
}
</script>
