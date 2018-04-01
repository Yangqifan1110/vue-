<template lang="html">
<div class="text">
  <h1 class="title">发布我手里因故将不能观看的电影票</h1>
  <h1 >选择林大附近影院</h1>
  <ul>
    <li>
      <h1>万达国际影城(乐松店)</h1>
      <h3>地址：香坊区三大动力路8号乐松购物广场4楼（近哈平路）</h3>
    </li>
    <li>
      <h1>嘉星国际影城(学府店)</h1>
      <h3>地址：南岗区中兴大道99号（哈西家纺城5层）</h3>
    </li>
    <li>
      <h1>CGV影城(学府店)</h1>
      <h3>地址：南岗区学府路1-1号凯德广场5楼（近哈师大附中）</h3>
    </li>
  </ul>
</div>
</template>

<script>

import Axios from 'axios'
export default {
  data(){
    return{
      dec:{}
    }
  },

  mounted(){
     Axios.get(API_PROXY+ 'http://m.maoyan.com/showtime/wrap.json?cinemaid=1386&movieid=')
     .then((res)=>{
        console.log(res);
        this.dec=res.data.data.南山区[1].nm;
     })
      .catch(()=>{

      })
  },
}
</script>

<style lang="css" scoped>
.text{ padding: 1rem 0;}
.title{ padding: 5% 0; }
.text h1{ margin: 3%; }
.text h3{ margin: 5% 3%;}
.text ul { padding-top: 0.5rem}
.text ul li{ height:1.8rem; border: 1px solid #ccc; padding: 3%}
.text ul li h1{ color: #000}
</style>
