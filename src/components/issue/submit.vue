<template lang="html">
  <div class="submit">

    <h1>请填写具体信息</h1>
    <input type="text" name="" value="" placeholder="请输入手机号"><br>
    <input type="number" name="" value="" placeholder="请输入张数"><br>
    <input type="text" name="" value="" placeholder="请输入座位号"><br>
    <input type="text" name="" value="" placeholder="请输入转让理由"><br>

    <button type="button" name="button">提交</button>
  </div>

</template>

<script>
  import Axios from 'axios'
export default {

  data (){
    return {

    }
  },
}
</script>

<style lang="css" scoped>
.submit{padding: 1rem 0%; width: 100%; text-align: center;}
.submit h1{ color: #000; margin-top: 0.5rem}
.submit input{ width: 70%; height: 0.8rem; margin-top: 6%; border: 1px solid #ccc; border-radius: 0.2rem; padding-left: 8%}
.submit button{ background: #33A9EF; border: none; color: #fff; width: 22%; height: 0.8rem; margin-top: 10%; border-radius: 0.2rem}
</style>
