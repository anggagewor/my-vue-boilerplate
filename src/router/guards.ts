import { useAuthStore } from '@/stores/useAuthStore'
import type { Router } from 'vue-router'

export function setupGuards(router: Router) {
    router.beforeEach((to, _from, next) => {
        const auth = useAuthStore()

        if (to.meta.requiresAuth && !auth.isAuthenticated) {
            return next('/login')
        }

        next()
    })
}