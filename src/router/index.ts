import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NiceToMeetU from '@/components/NiceToMeetU'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/nice',
      name: 'NiceToMeetU',
      component: NiceToMeetU
    }
  ]
})
