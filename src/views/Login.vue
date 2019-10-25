<template>
  <div class="loginbox">
    <div class="smallbox">
        <p>欢迎登录!</p>
      <el-input placeholder="账号" suffix-icon="el-icon-date" v-model="input"></el-input>
      <el-input placeholder="密码" v-model="inputone" show-password></el-input>
      <el-button type="primary" round>登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      inputone:""
    };
  }
};
</script>

<style lang="less" scoped>
.loginbox {
  height: 100%;
  width: 100%;
  background-image: url("../assets/imgs/timg.jpg");
  background-size: cover;
  position: relative;

  .smallbox {
    width: 300px;
    height: 300px;
    // border: 1px solid lightblue;
    position: absolute;
    right: 50px;
    bottom: 170px;

    p{
        font-size: 30px;
        color: rgb(255, 0, 179);
        text-align: center;
    }

    .el-input{
        width: 240px;
        margin: 0 30px 30px 30px;
    }

    .el-button{
        background-color: green;
        margin-left: 35%;

    }
  }
}
</style>