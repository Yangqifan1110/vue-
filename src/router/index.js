import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import movie from '@/components/movie/movie'
import movieList from '@/components/movie/movieList'
import movieDetail from '@/components/movie/movieDetail'
import issue from '@/components/issue/issue'
import near from '@/components/issue/near'
import choose from '@/components/issue/choose'
import time from '@/components/issue/time'
import submit from '@/components/issue/submit'

import buy from '@/components/buy/buy'
import buyList from '@/components/buy/buyList'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect:'/movie/movieList'
    },{
      path:'/movie',
      name:'',
      component:movie,
      children:[
        {
          path:'/movie/movieList',
          component:movieList
        },{
          path:'/movie/movieDetail/:movieId',
          component:movieDetail
        }
      ]
    },{
      path:'/issue',
      component:issue,
      redirect:'/issue/near',
      children:[
        {
          path:'/issue/near',
          component:near
        },
        {
          path:'/issue/choose/:whereId',
          component:choose,

        },
        {
          path:'/issue/time/:whereId/:chooseId',
          component:time
        },  {
            path:'/issue/submit/:whereId/:chooseId/:timeId',
            component:submit
          }
      ]
    },{
      path:'/buy',
      component:buy,
      redirect:'/buy/buyList',
      children:[
        {
          path:'/buy/buyList',
          component:buyList
        }
      ]
    }

  ]
})
