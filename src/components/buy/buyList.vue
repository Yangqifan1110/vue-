<template lang="html">
<div class="ml">
  <ul class="">

    <li v-for='(buy,index) in buyall' :key='index' class="list">
      <div class="d1">
        <img :src='buy.img' alt="">
      </div>
      <div class="d2">
        <p class="p1">{{buy.nm}}</p>
        <p>{{buy.where}} 时间：{{buy.time}}</p>
        <p></p>
        <p>电话：{{buy.phone}}</p>
        <p>数量：{{buy.num}}张</p>
        <p>位置：{{buy.site}}</p>
        <p>原因：{{buy.why}}</p>
        </div>

    </li>
  </ul>
</div>
</template>

<script>


export default {
  data(){
    return {
      buyall:[
        {
          img:"http://p0.meituan.net/165.220/movie/a547dd7f6851d7ced67ec1b6c8b7f3b2447754.jpg",
          nm:'头号玩家',
          where:'万达国际影城(乐松店)',
          time:'16:50',
          phone:'18812345418',
          num:1,
          site:'10排8坐',
          why:'晚上有事去不了，20元'


      },{
        img:"http://p0.meituan.net/165.220/movie/75fc3610bfe91b6ad8ae5f186f1c2fd6294933.jpg",
        nm:'狂暴巨兽',
        where:'万达国际影城(乐松店)',
        time:'16:30',
        phone:'18812345418',
        num:2,
        site:'10排8坐,10排10座',
        why:'晚上有事去不了，20元'
      },{
        img:"http://p0.meituan.net/165.220/movie/a547dd7f6851d7ced67ec1b6c8b7f3b2447754.jpg",
        nm:'头号玩家',
        where:'万达国际影城(乐松店)',
        time:'16:50',
        phone:'18812345418',
        num:1,
        site:'10排8坐',
        why:'晚上有事去不了，20元'
      },{
        img:"http://p0.meituan.net/165.220/movie/75fc3610bfe91b6ad8ae5f186f1c2fd6294933.jpg",
        nm:'狂暴巨兽',
        where:'万达国际影城(乐松店)',
        time:'16:50',
        phone:'18812345418',
        num:1,
        site:'10排8坐',
        why:'晚上有事去不了，20元'
      },{
        img:"http://p0.meituan.net/165.220/movie/a547dd7f6851d7ced67ec1b6c8b7f3b2447754.jpg",
        nm:'头号玩家',
        where:'万达国际影城(乐松店)',
        time:'16:50',
        phone:'18812345418',
        num:1,
        site:'10排8坐',
        why:'晚上有事去不了，20元'
      },{
        img:"http://p1.meituan.net/165.220/movie/82a01e8f773c273ba10b96b5acb06196381700.jpg"
,
        nm:"红海行动",
        where:'万达国际影城(乐松店)',
        time:'16:50',
        phone:'18812345418',
        num:1,
        site:'10排8坐',
        why:'晚上有事去不了，20元'
      },{
        img:"http://p1.meituan.net/165.220/movie/82a01e8f773c273ba10b96b5acb06196381700.jpg"
,
        nm:"红海行动",
        where:'万达国际影城(乐松店)',
        time:'16:50',
        phone:'18812345418',
        num:1,
        site:'10排8坐',
        why:'晚上有事去不了，20元'
      },{
        img:"http://p0.meituan.net/165.220/movie/a547dd7f6851d7ced67ec1b6c8b7f3b2447754.jpg",
        nm:'头号玩家',
        where:'万达国际影城(乐松店)',
        time:'16:50',
        phone:'18812345418',
        num:1,
        site:'10排8坐',
        why:'晚上有事去不了，20元'
      }

      ],

    }
  },

  methods:{

    }
  }

</script>

<style lang="css">
.ml{ padding: 1rem 0; }
li.list{display: flex; border-bottom: 1px solid #ccc; padding: 1% 0;}
.d1{flex-grow: 1;width: 0}
.d1 img{ width: 100%;}
.d2{flex-grow: 2;width: 0; padding:3% 5%;}
.d2 p{color: #000; margin-bottom: 3%; font-size: 0.22rem}
.d2 .p1{font-size: 0.4rem; font-weight: bold;}
.loading{ text-align: center;}
.tip h2{ text-align: center;}
</style>
