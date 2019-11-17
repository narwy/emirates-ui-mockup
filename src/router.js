import DashboardHome from './components/Dashboard/Pages/Home'
import Error from './components/Error'

const router = {
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'DashboardHome',
      component: DashboardHome,
    },
    {
      path: '*',
      name: 'Error',
      component: Error,
    }
  ]
}

export default router
