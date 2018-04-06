<template>
  <div>


<common-Header>
  <span slot='title'>正在热播</span>
</common-Header>
  <router-view/>
<common-Footer></common-Footer>

  </div>
</template>

<script>
import commonHeader from '../common/header'
import commonFooter from '../common/footer'
export default {

  components:{
    commonHeader,
    commonFooter
  }
}
</script>

<style scoped>
</style>
