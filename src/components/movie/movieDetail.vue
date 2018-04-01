<template lang="html">
<div class="text">
  <div class="omg">
      <img :src="dec.img" >
  </div>

  <h1>{{dec.nm}}</h1>
  <p>类型：{{dec.cat}}</p>
  <p>导演：{{dec.dir}}</p>
  <p>{{dec.scm}}</p>
  <p>主演：{{dec.star}}</p>
  <p>简介：{{dec.dra}}</p>
</div>
</template>

<script>
import Axios from 'axios'
export default {
  data(){
    return {
      dec:{}
    }
  },
  methods:{},
  mounted(){
     Axios.get(API_PROXY+ 'http://m.maoyan.com/movie/'+ this.$route.params.movieId+'.json')
     .then((res)=>{
        console.log(res);
        this.dec=res.data.data.MovieDetailModel;
     })
      .catch(()=>{

      })
  },

}
</script>

<style lang="css">
.text{ padding: 1rem 0;}
.text .omg{text-align: center;}
.text .omg img{ margin: 5% 0;}
.text h1{ color: #000; text-align: center;}
.text p{  font-size: 0.32rem; padding: 5%; color: #000; line-height: 0.4rem}

</style>
