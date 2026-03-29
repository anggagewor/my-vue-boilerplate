import { createRouter, createWebHistory } from 'vue-router'
import { adminRoutes } from './modules/admin'
import { authRoutes } from './modules/auth'

const routes = [
    adminRoutes,
    ...authRoutes,
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: () => import('@/pages/errors/NotFoundPage.vue'),
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})

// 🔥 Global Guard
router.beforeEach((to, _from, next) => {
    const isAuthenticated = !!localStorage.getItem('token')

    if (to.meta.requiresAuth && !isAuthenticated) {
        return next({ name: 'login' })
    }

    if (to.meta.guestOnly && isAuthenticated) {
        return next({ name: 'dashboard' })
    }

    next()
})