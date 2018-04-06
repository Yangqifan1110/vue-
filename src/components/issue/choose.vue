<template lang="html">
  <div class="choose">


  <h1 class="title">正在热映{{decs.length}}部电影</h1>
  <ul>
    <li v-for='(dec,index) in decs' :key='index' class="list" @click='goTime($route.params.whereId,dec.id)'>

      <div class="d1">
        <img :src='dec.img' alt="">
      </div>
      <div class="d2">
        <p class="p1">{{dec.nm}}</p>
        <p>{{dec.ver}}</p>
        <p>评分：{{dec.sc}}</p>
        <p>{{dec.id}}</p>

      </div>

    </li>
  </ul>
  </div>
</template>

<script>
import Axios from 'axios'
export default {

  data(){
    return {
    decs:[],
    wheId:this.$route.params.whereId
    }
  },
  methods:{
    goTime(whereId,chooseId){
      // console.log(whereId);
      // console.log(chooseId);
  this.$router.push('/issue/time/'+whereId+'/'+chooseId)


    }
  },
  mounted(){

     Axios.get(API_PROXY+ 'http://m.maoyan.com/showtime/wrap.json?cinemaid='+this.$route.params.whereId+ '&movieid=')
     .then((res)=>{
        // console.log(res);
        this.decs=res.data.data.movies;
     })
      .catch(()=>{

      })
  },
}
</script>

<style lang="css" scoped>
h1.title{ padding: 3%;color: #000}
.choose{ padding: 1rem 0;}
li.list{display: flex; border-bottom: 1px solid #ccc; padding: 1% 0;}
.d1{flex-grow: 1;width: 0}
.d1 img{ width: 100%;}
.d2{flex-grow: 2;width: 0; padding:5% 5%;}
.d2 p{color: #000; margin-bottom: 3%; font-size: 0.22rem}
.d2 .p1{font-size: 0.4rem; font-weight: bold;}
</style>
