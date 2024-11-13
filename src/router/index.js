import Home from '@/views/Home.vue'
import Survey from '@/views/Survey.vue'

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {   path: '/home-in/',
            name: 'Home',
            component: Home
        },
        {   path: '/home-in/Survey',
            name: 'Survey',
            component: Survey
        }
    ]
})

export default router