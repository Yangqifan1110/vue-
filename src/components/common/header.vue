<template>
  <div class="header" :style="{background:bg}">
    <span class="home" @click='goHome'>返回</span>
    <h2>
      <slot name='title'></slot>
    </h2>
  </div>

</template>

<script>
export default {
  methods:{
    goHome(){
      this.$router.go(-1)
    }
  },
  props:['bg']
}
</script>

<style scoped>
.header{
  height: 1rem;
  background: #33A9EF;
  position: fixed;
  top: 0;
  width: 100%;
  line-height: 1rem;
}
.home{
  color: #fff;
  padding-left: 5%
}
.header h2{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  color: #fff;
}
</style>
