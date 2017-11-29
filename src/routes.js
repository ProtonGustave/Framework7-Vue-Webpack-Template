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
        path: '/about/',
        component: require('./pages/about.vue')
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