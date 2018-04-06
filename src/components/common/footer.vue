<template>
<ul class="footer" :style="{background:bg}">
  <li><router-link to="/movie/movieList">最近电影</router-link></li>
  <li><router-link to="/issue">发布电影票</router-link></li>
  <li><router-link to="/buy">购买二手票</router-link></li>
</ul>
</template>

<script>
export default {
  props:['bg']
}
</script>

<style scoped>
.footer{
  height: 1rem;
  background: #33A9EF;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
}
.footer li{
  flex-grow: 1;
  text-align: center;

}
.footer li a{
  text-decoration: none;
  line-height: 1rem;
  color: #ddd

}
.footer li a.router-link-active{
  color: #fff
}
</style>
