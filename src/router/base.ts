import type { RouteRecordRaw } from 'vue-router'

export const base: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Index',
        component: () => import('@/views/index.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/views/not-found.vue'),
    }
]
