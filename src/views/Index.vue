<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="220px">
        <el-menu default-active="1-1" 
        class="el-menu-vertical-demo"
        background-color="#bbb"
        unique-opened
        router

        >
          <el-submenu index="/index/goods">
            <template slot="title">
              <i class="el-icon-s-claim"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/index/goods">商品管理</el-menu-item>
              <el-menu-item index="/index/goodsadd">添加商品</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-circle-plus"></i>
              <span>进货管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/index/productadd">进货管理</el-menu-item>
              <el-menu-item index="/index/productdel">库存管理</el-menu-item>
              <el-menu-item index="/index/productmore">添加库存</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-remove"></i>
              <span>出货管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/index/reducesell">销售列表</el-menu-item>
              <el-menu-item index="/index/reduceless">商品出库</el-menu-item>
              <el-menu-item index="/index/reducereturn">商品退货</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-s-goods"></i>
              <span>统计管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/index/statisticssell">销售统计</el-menu-item>
              <el-menu-item index="/index/statisticsadd">进货统计</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-user-solid"></i>
              <span>账号管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/index/account">账号管理</el-menu-item>
              <el-menu-item index="/index/accountadd">添加账号</el-menu-item>
              <el-menu-item index="/index/accountSetpwd">密码修改</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-star-on"></i>
              <span>会员管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/index/member">账号管理</el-menu-item>
              <el-menu-item index="/index/memberadd">添加账号</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
          <!-- 这里就是放的二级路由页面 -->
           <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.el-container {
  height: 100%;
  width: 100%;
}
.el-header {
  height: 50px;
  width: 100%;
  background: #aaa;
}
.el-aside {
  width: 300px;
  height: 100%;
  background: #bbb;
}
.el-main {
  width: 100%;
  height: 100%;
  background: #ccc;
  margin: 0;
  padding: 0;
}
</style>