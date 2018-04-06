<template lang="html">
  <div class="time">


  <div class="list">
    <div class="d1">
      <img :src='chomov.img' alt="">
    </div>
    <div class="d2">
      <p class="p1">{{chomov.nm}}</p>
      <p>{{chomov.ver}}</p>
      <p>评分：{{chomov.sc}}</p>

    </div>

  </div>

  <ul class="frist">
    <li>放映时间</li>
    <li>语言版本</li>
    <li>影厅</li>

  </ul>
  <ul v-for='(time,index) in timeList' :key='index' class="today" @click='goSubmit($route.params.whereId,$route.params.chooseId,time[0].tm)'>
    <li>{{time[0].tm}}</li>
    <li>{{time[0].lang}}</li>
    <li>{{time[0].th}}</li>
  </ul>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  data(){
    return{
      chomov:{},
      timeList:[],
      timeData:[],

    }
  },

  methods:{
    goSubmit(whereId,chooseId,timeId){

  this.$router.push('/issue/submit/'+whereId+'/'+chooseId+'/'+timeId)
}
},

  mounted(){

    console.log(this.$route.params.whereId);
    console.log(this.$route.params.chooseId);
     Axios.get(API_PROXY+ "http://m.maoyan.com/showtime/wrap.json?cinemaid="+this.$route.params.whereId+"&movieid="+this.$route.params.chooseId)
     .then((res)=>{

        console.log(res.data.data);
        this.chomov=res.data.data.currentMovie;
        this.timeList=res.data.data.DateShow;
        this.timeData=res.data.data.Dates;
        console.log(res.data.data.Dates )
     })
      .catch(()=>{

      })
  }



}
</script>

<style lang="css" scoped>
.time{padding: 1rem 0;}
.list{display: flex; border-bottom: 1px solid #ccc; padding: 1% 0;}
.d1{flex-grow: 1;width: 0}
.d1 img{ width: 100%;}
.d2{flex-grow: 2;width: 0; padding:5% 5%;}
.d2 p{color: #000; margin-bottom: 3%; font-size: 0.22rem}
.d2 .p1{font-size: 0.4rem; font-weight: bold;}

ul.frist{ display: flex;}
ul.frist li{flex-grow: 1; text-align: center;line-height: 0.6rem;background: #ccc;color: #000}
ul.today{ display: flex;}
ul.today li{flex-grow: 1; text-align: center;line-height: 0.6rem;color: #000}
</style>
