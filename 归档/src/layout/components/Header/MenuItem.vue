<template>
  <div v-if="item.children">
    <template v-if="item.children.length === 0">
      <el-menu-item :index="item.url">{{ item.name }}</el-menu-item>
    </template>
    <el-submenu v-else :index="item.url" :popper-append-to-body="false">
      <template slot="title">{{ item.name }}</template>
      <template v-for="(child, childIndex) in item.children">
        <menu-item
          v-if="child.children && child.children.length > 0"
          :key="child.url + childIndex"
          :item="child"
        />
        <el-menu-item v-else :key="child.url + childIndex" :index="child.url">{{ child.name }}</el-menu-item>
      </template>
    </el-submenu>
  </div>
</template>
<script>
export default {
  name: 'MenuItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
