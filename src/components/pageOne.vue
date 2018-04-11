<template>
  <div class="home">
    <el-menu :default-active="activeIndex" class="el-menu-demo navMargin" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="3">讨论</el-menu-item>
      <el-menu-item index="4">介绍</el-menu-item>
      <el-menu-item index="8" class="fr">登录</el-menu-item>
      <el-menu-item index="9" class="fr">注册</el-menu-item>
      <el-submenu index="7" class="fr">
        <template slot="title">工作台</template>
        <el-menu-item index="7-1">选项1</el-menu-item>
        <el-menu-item index="7-2">选项2</el-menu-item>
        <el-menu-item index="7-3">选项3</el-menu-item>
      </el-submenu>
    </el-menu>
    <div class="line"></div>
    <div id="hiddenIsActive"><span class="meng">Meng</span><span class="fei">Fei</span><span class="blog">blog</span></div>
    

  </div>
</template>

<script>

export default {
  name: 'pageOne',
  data () {
    return {
      activeIndex: '1',
    }
  },
  methods:{
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }      
  },
  mounted(){
  }
}
</script>

<style scoped >
@import '../assets/css/common.css';
#hiddenIsActive{
    height: 60px;
    line-height: 60px;
    position: absolute;
    top: 0;
    left: 0;
}

.home .blog{
    width: 50px;
    height:30px;
    background: green;
    color: white;
    line-height: 30px;
    font-size: 20px;
    text-align: center;
    display: inline-block;
    margin-left: 10px;
    border-radius: 3px;
  }
.home .navMargin{  
    padding-left: 15%;
    padding-right: 15%;
  }
.home .meng{
    color: black;
    font-size: 28px;
  }
.home .fei{
    color:green;
    font-size: 28px;
  }

</style>
