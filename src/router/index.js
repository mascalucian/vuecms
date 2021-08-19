import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import NewEmpl from '@/components/NewEmpl'
import ViewEmpl from '@/components/ViewEmpl'
import EditEmpl from '@/components/EditEmpl'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/new',
      name: 'newempl',
      component: NewEmpl
    },
    {
      path: '/edit/:employee_id',
      name: 'editempl',
      component: EditEmpl
    },
    {
      path: '/:employee_id',
      name: 'viewempl',
      component: ViewEmpl
    }
  ]
})
