export default [
    {
        path: '/signup_01/',
        component: require('./pages/registration/step_01.vue')
    },
    {
        path: '/signup_02/',
        component: require('./pages/registration/step_02.vue')
    },
    {
        path: '/signup_03/',
        component: require('./pages/registration/step_03.vue')
    },
    {
        path: '/signup_04/',
        component: require('./pages/registration/step_04.vue')
    },
    {
        path: '/signup_05/',
        component: require('./pages/registration/step_05.vue')
    },
    {
        path: '/about/',
        component: require('./pages/about.vue')
    },
    {
        path: '/map',
        component: require('./pages/map.vue')
    },
    {
        path: '/form/',
        component: require('./pages/form.vue')
    },
    {
        path: '/dynamic-route/blog/:blogId/post/:postId/',
        component: require('./pages/dynamic-route.vue')
    }
]