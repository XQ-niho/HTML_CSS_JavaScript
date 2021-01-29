<!-- 示例 -->
<template>
  <div class="wrap">
    <div class="nor-panel1">
      <div class="nor-tit1"><span class="txt">面包屑</span></div>
      <el-breadcrumb separator-class="el-icon-arrow-right" class="nor-breadcrumb">
        <el-breadcrumb-item :to="{ path: '/home' }"><svg-icon icon-name="icon-weizhi" />首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/msgList' }">企业查询</el-breadcrumb-item>
        <el-breadcrumb-item>广州市振英塑料有</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="nor-panel1">
      <div class="nor-tit1"><span class="txt">文字颜色</span></div>
      <span class="greytxt">灰色</span><br>
      <span class="redtxt">红色</span><br>
      <span class="orangetxt">橙色</span><br>
      <span class="darkbluetxt">深蓝色</span><br>
      <span class="bluetxt">蓝色</span>
    </div>
    <div class="nor-panel1">
      <div class="nor-tit1"><span class="txt">标题</span></div>
      <div class="nor-tit1"><span class="txt">示例示例1</span></div>
      <div class="nor-tit1"><span class="txt">示例示例2</span><span class="exp">（当前信用评分75分，在所在行政区域内排在前20%）</span></div>
      <div class="nor-tit2"><span class="txt">示例示例3</span><span class="bluetxt">（100）</span></div>
    </div>
    <div class="nor-panel1">
      <div class="nor-tit1"><span class="txt">分页</span></div>
      <div class="nor-page1">
        <el-pagination
          :current-page="currentPage1"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="10"
          layout="total, sizes, prev, pager, next"
          :total="totalPage1"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
    <div class="nor-panel1">
      <div class="nor-tit1"><span class="txt">搜索</span></div>
      <div class="search-box">
        <el-input class="search-input" placeholder="请输入搜索关键词">
          <div slot="prepend" class="icon el-icon-search" />
        </el-input>
        <button class="nor-btn2 btn-blue margin-left5" type="button">搜 索</button>
      </div>
    </div>
    <div class="nor-panel1">
      <div class="nor-tit1"><span class="txt">按钮 样式一</span></div>
      <button type="button" class="nor-btn1 btn-orange margin-right10">查看</button>
      <button type="button" class="nor-btn1 btn-blue margin-right10">下载</button>
      <button type="button" class="nor-btn1 btn-grey">禁用</button>
      <div class="nor-tit1"><span class="txt">按钮 样式二</span></div>
      <div>
        <button class="nor-btn2 btn-blue margin-right10" type="button">40</button>
        <button class="nor-btn2 btn-blue h34 margin-right10" type="button">34</button>
        <button class="nor-btn2 btn-blue h32 margin-right10" type="button"><svg-icon icon-name="icon-sousuo" />32</button>
        <button class="nor-btn2 btn-blue h30 margin-right10" type="button">30</button>
        <button class="nor-btn2 btn-blue h28" type="button">28</button>
      </div>
      <div class="margin-top10">
        <button class="nor-btn2 btn-blue-plain margin-right10" type="button">40</button>
        <button class="nor-btn2 btn-blue-plain h34 margin-right10" type="button">34</button>
        <button class="nor-btn2 btn-blue-plain h32 margin-right10" type="button"><svg-icon icon-name="icon-sousuo" />32</button>
        <button class="nor-btn2 btn-blue-plain h30 margin-right10" type="button">30</button>
        <button class="nor-btn2 btn-blue-plain h28" type="button">28</button>
      </div>
      <br>
    </div>
    <div class="nor-panel1">
      <div class="nor-tit1"><span class="txt">切换</span></div>
      <ul class="nor-tab1">
        <li v-for="(item, index) in tabNavData" :key="index" class="item" :class="tabNavIndex === index ? 'cur' : ''" @click="handleTabNavChange(item, index)">{{ item.name }}</li>
      </ul>
    </div>
    <div class="nor-panel1">
      <div class="nor-tit1"><span class="txt">弹窗</span></div>
      <button class="nor-btn2 btn-blue h28" type="button" @click="handleShowDialog">click me</button>
    </div>
    <div class="nor-panel1">
      <div class="nor-tit1"><span class="txt">表格样式1</span></div>
      <div class="nor-table1">
        <el-table stripe :data="tableData">
          <el-table-column align="center" type="selection" width="55" />
          <el-table-column align="center" prop="field1" label="接口名称" />
          <el-table-column align="center" prop="field2" label="接口说明" />
          <el-table-column align="center" prop="field3" label="状态" />
          <el-table-column align="center" prop="field4" label="创建人" />
          <el-table-column align="center" prop="field5" label="创建时间" />
          <el-table-column align="center" label="操作" width="220">
            <template slot-scope="scope">
              <button type="button" class="nor-btn1 btn-orange margin-right10" @click="handleToView(scope.row)">查看</button>
              <button type="button" class="nor-btn1 btn-blue">下载</button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="nor-tit1"><span class="txt">表格样式2</span></div>
      <div class="nor-table2">
        <el-table :data="tableData">
          <el-table-column align="center" prop="field1" label="接口名称" />
          <el-table-column align="center" prop="field2" label="接口说明" />
          <el-table-column align="center" prop="field3" label="状态" />
          <el-table-column align="center" prop="field4" label="创建人" />
          <el-table-column align="center" prop="field5" label="创建时间" />
        </el-table>
      </div>
      <div class="nor-tit1"><span class="txt">表格样式3</span></div>
      <div class="nor-table3">
        <table>
          <tr>
            <th width="120">企业名称</th>
            <td>XXXXXX</td>
            <th width="120">成立日期</th>
            <td>XXXXXX</td>
          </tr>
          <tr>
            <th>统一信用编码</th>
            <td>XXXXXX</td>
            <th>营业范围</th>
            <td>XXXXXX</td>
          </tr>
          <tr>
            <th>企业等级</th>
            <td>XXXXXX</td>
            <th>注册资本</th>
            <td>XXXXXX</td>
          </tr>
          <tr>
            <th>企业地址</th>
            <td colspan="3">XXXXXX</td>
          </tr>
        </table>
      </div>
    </div>
    <el-dialog
      title="提交审批"
      :visible.sync="dialogVisible1"
      width="860px"
      top="5vh"
      custom-class="nor-dialog"
    >
      <el-form
        :model="form1"
        size="small"
        :label-width="labelWidth"
        class="nor-form1 margin-right20"
      >
        <el-row>
          <el-col :span="12">
            <el-form-item label="承办单位:" prop="unitName">
              <el-input v-model="form1.unitName" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="承办部门:" prop="deptName">
              <el-select v-model="form1.deptName" placeholder="请选择">
                <el-option
                  v-for="item in unitList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div class="btn-group1">
        <button class="nor-btn2 btn-blue h32" type="button" @click="dialogVisible1 = false">确定</button>
        <button class="nor-btn2 btn-blue-plain h32" type="button" @click="dialogVisible1 = false">取消</button>
      </div>
      <div class="btn-group1 right">
        <button class="nor-btn2 btn-blue h32" type="button" @click="dialogVisible1 = false">确定</button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { mixinComm } from '@/utils/mixin'

export default {
  mixins: [mixinComm],
  data() {
    return {
      currentPage1: 1,
      pageSize1: 10,
      totalPage1: 100,
      tabNavIndex: 0,
      tabNavData: [
        { name: '基本信息', id: 1 },
        { name: '业务订退信息', id: 2 },
        { name: '业务使用情况', id: 3 },
        { name: '业务续费情况', id: 4 }
      ],
      dialogVisible1: false,
      unitList: [],
      labelWidth: '120px',
      form1: {
        unitName: '',
        deptName: ''
      },
      tableData: [
        {
          field1: '标签信息',
          field2: '本传输内容项主要用于*****',
          field3: '启用',
          field4: '张伟',
          field5: '2019-10-28'
        },
        {
          field1: '标签信息',
          field2: '本传输内容项主要用于*****',
          field3: '启用',
          field4: '张伟',
          field5: '2019-10-28'
        },
        {
          field1: '标签信息',
          field2: '本传输内容项主要用于*****',
          field3: '启用',
          field4: '张伟',
          field5: '2019-10-28'
        },
        {
          field1: '标签信息',
          field2: '本传输内容项主要用于*****',
          field3: '启用',
          field4: '张伟',
          field5: '2019-10-28'
        },
        {
          field1: '标签信息',
          field2: '本传输内容项主要用于*****',
          field3: '启用',
          field4: '张伟',
          field5: '2019-10-28'
        }
      ]
    }
  },
  methods: {
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
    },
    handleTabNavChange(item, index) {
      this.tabNavIndex = index
    },
    handleShowDialog() {
      this.dialogVisible1 = true
    },
    handleToView(row) {

    }
  }
}
</script>

<style lang="sass">
</style>
