import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import DashboardView from '@/views/DashboardView.vue'
import ProductoView from '@/views/ProductoView.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: LoginView },
  { path: '/dashboard', component: DashboardView },
  { path: '/productos', component: ProductoView }
]

// AQUÍ ESTÁ EL TRUCO: Debes crear la constante 'router'
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// Ahora el 'beforeEach' sí funcionará porque 'router' ya existe
router.beforeEach((to, from, next) => {
  const logueado = localStorage.getItem('logueado')

  if ((to.path === '/dashboard' || to.path === '/productos') && !logueado) {
    next('/login')
  } else {
    next()
  }
})

export default router