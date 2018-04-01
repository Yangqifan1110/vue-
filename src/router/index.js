import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import movie from '@/components/movie/movie'
import movieList from '@/components/movie/movieList'
import movieDetail from '@/components/movie/movieDetail'
import music from '@/components/music/music'
import near from '@/components/music/near'

import book from '@/components/book/book'
import photo from '@/components/photo/photo'

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
      path:'/music',
      component:music,
      redirect:'/music/near',
      children:[
        {
          path:'/music/near',
          component:near
        }
        // {
        //   path:'/movie/movieDetail/:movieId',
        //   component:movieDetail
        // }
      ]
    },{
      path:'/book',
      component:book
    },{
      path:'/photo',
      component:photo
    }

  ]
})
