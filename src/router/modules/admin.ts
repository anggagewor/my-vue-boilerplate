import type { RouteRecordRaw } from 'vue-router'
import AdminLayout from '@/layouts/AdminLayout.vue'

export const adminRoutes: RouteRecordRaw = {
    path: '/',
    component: AdminLayout,
    meta: { requiresAuth: true },
    redirect: { name: 'dashboard' },
    children: [
        {
            path: '',
            name: 'dashboard',
            component: () => import('@/pages/dashboard/DashboardPage.vue'),
        },
        {
            path: 'users',
            name: 'users',
            component: () => import('@/pages/users/UserPage.vue'),
        },
    ],
}