<!-- 首页 -->
<template>
  <div class="wrap">
    <el-row class="home-list" :gutter="15">
      <el-col :span="12">
        <div class="home-list-item">
          <div class="tit">
            <span class="tit-txt"><svg-icon icon-name="icon-zhaotoubiao" />招投标</span>
            <span class="more">更多<svg-icon icon-name="icon-gengduo" /></span>
          </div>
          <div class="home-list-table">
            <table>
              <thead>
                <tr>
                  <td>资讯来源</td>
                  <td width="130">来源</td>
                  <td width="130">发布时间</td>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in tableData" :key="index">
                  <td class="txt"><span class="txt-ellipse">{{ item.txt }}</span><span v-if="item.newFlag" class="mark">news</span></td>
                  <td class="source">{{ item.source }}</td>
                  <td class="time">{{ item.time }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="home-list-item">
          <div class="tit">
            <span class="tit-txt"><svg-icon icon-name="icon-dashujushichang" />大数据市场</span>
            <span class="more">更多<svg-icon icon-name="icon-gengduo" /></span>
          </div>
          <div class="home-list-table">
            <table>
              <thead>
                <tr>
                  <td>资讯来源</td>
                  <td width="130">来源</td>
                  <td width="130">发布时间</td>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in tableData" :key="index">
                  <td class="txt"><span class="txt-ellipse">{{ item.txt }}</span><span v-if="item.newFlag" class="mark">news</span></td>
                  <td class="source">{{ item.source }}</td>
                  <td class="time">{{ item.time }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="home-list-item">
          <div class="tit">
            <span class="tit-txt"><svg-icon icon-name="icon-duishoudongtai" />对手动态</span>
            <span class="more">更多<svg-icon icon-name="icon-gengduo" /></span>
          </div>
          <div class="home-list-table">
            <table>
              <thead>
                <tr>
                  <td>资讯来源</td>
                  <td width="130">来源</td>
                  <td width="130">发布时间</td>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in tableData" :key="index">
                  <td class="txt"><span class="txt-ellipse">{{ item.txt }}</span><span v-if="item.newFlag" class="mark">news</span></td>
                  <td class="source">{{ item.source }}</td>
                  <td class="time">{{ item.time }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="home-list-item">
          <div class="tit">
            <span class="tit-txt"><svg-icon icon-name="icon-zhengcefagui" />政策法规</span>
            <span class="more">更多<svg-icon icon-name="icon-gengduo" /></span>
          </div>
          <div class="home-list-table">
            <table>
              <thead>
                <tr>
                  <td>资讯来源</td>
                  <td width="130">来源</td>
                  <td width="130">发布时间</td>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in tableData" :key="index">
                  <td class="txt"><span class="txt-ellipse">{{ item.txt }}</span><span v-if="item.newFlag" class="mark">news</span></td>
                  <td class="source">{{ item.source }}</td>
                  <td class="time">{{ item.time }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { mixinComm } from '@/utils/mixin'
export default {
  components: {},
  mixins: [mixinComm],
  data() {
    return {
      tableData: [
        { txt: '15大空调上制造涨价舆论，专家质疑涨价理由', source: '中国新闻网', time: '2018-03-11', newFlag: true },
        { txt: '白电厂家高喊涨价，家电商场波澜不惊', source: '中国新闻网', time: '2018-03-11', newFlag: true },
        { txt: '空调页涨价响起数量承诺五个前不涨价', source: '中国新闻网', time: '2018-03-11', newFlag: false },
        { txt: '消费电子零售行业：零售行业创新典范', source: '中国新闻网', time: '2018-03-11', newFlag: false },
        { txt: '3.15葵花，全面倡导消费与责任', source: '中国新闻网', time: '2018-03-11', newFlag: false },
        { txt: '家电厂博弈升级：涨还是不涨', source: '中国新闻网', time: '2018-03-11', newFlag: false }
      ]
    }
  },
  mounted() {
  },
  methods: {

  }
}
</script>
<style lang="scss">
</style>
