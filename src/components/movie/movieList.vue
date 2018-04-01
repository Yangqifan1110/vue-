<template lang="html">
<div class="ml">
  <ul class="">

    <li @click='goDetail(movie.id)' v-for='(movie,index) in movieList' :key='index' class="list">
      <div class="d1">
        <img :src='movie.img' alt="">
      </div>
      <div class="d2">
        <p class="p1">{{movie.nm}}</p>
        <p>{{movie.ver}}</p>
        <p>{{movie.star}}</p>
        <p>{{movie.showInfo}}</p>
      </div>

    </li>
  </ul>
  <div class="loading" v-show='ldshow'>
    <img src="../../assets/images/login.gif">
  </div>
  <div class="tip" v-show='tip'>
    <h2>到底啦！！！</h2>
  </div>
</div>
</template>

<script>
import Axios from 'axios'

export default {
  data(){
    return {
      movieList:[],
      ldshow:true,
      tip:false
    }
  },
  mounted(){
      this.loadData();

      window.onscroll=()=>{
        var ht=document.documentElement.clientHeight;
        var kt=document.documentElement.scrollTop;
        var st=document.documentElement.scrollHeight;
        if(ht+kt==st){
          this.ldshow=true;
          if(!this.tip){

            this.loadData();
          }

        }
      }




  },
  methods:{


    loadData(){
      Axios.get(API_PROXY + 'http://m.maoyan.com/movie/list.json?type=hot&limit=10&offset='+ this.movieList.length)
      .then((res)=>{
            this.ldshow=false;
            let list=res.data.data.movies;
            if(list.length<10){
                this.tip = true;

            }


            this.movieList=this.movieList.concat(list)


      })
      .catch(()=>{
          alert('获取失败')
      });
    },


    goDetail(movieId){
      this.$router.push('/movie/movieDetail/'+movieId)
    }
  }
}
</script>

<style lang="css">
.ml{ padding: 1rem 0; }
li.list{display: flex; border-bottom: 1px solid #ccc; padding: 1% 0;}
.d1{flex-grow: 1;width: 0}
.d1 img{ width: 100%;}
.d2{flex-grow: 2;width: 0; padding:5% 5%;}
.d2 p{color: #000; margin-bottom: 3%; font-size: 0.22rem}
.d2 .p1{font-size: 0.4rem; font-weight: bold;}
.loading{ text-align: center;}
.tip h2{ text-align: center;}
</style>
