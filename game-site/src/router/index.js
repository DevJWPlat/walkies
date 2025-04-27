import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('@/views/GameSelector.vue') },
  { path: '/familyfeud', component: () => import('@/views/familyfeud/FamilyFeudHome.vue') },
  { path: '/familyfeud/control', component: () => import('@/views/familyfeud/ControlPanel.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
