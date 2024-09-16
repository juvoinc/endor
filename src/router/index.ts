import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoanView from '../views/LoanView.vue'
import TestingView from '../views/TestingView.vue'
import ProductsList from '../components/products/ListComponent.vue'
import TestingHome from '../components/TestingHome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/testing',
      component: TestingView,
      children: [
        {
          path: '/',
          component: TestingHome
        },
        {
          path: 'products',
          component: ProductsList
        }
      ]
    },
    {
      path: '/loans',
      name: 'Empréstimos',
      component: LoanView
    }
  ]
})

export default router
