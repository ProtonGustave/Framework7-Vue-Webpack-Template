export default [
    {
        path: '/about/',
        component: require('./pages/about.vue')
    },
    {
        path: '/signup/',
        component: require('./pages/registration.vue')
    },
    {
        path: '/signup/:step',
        component: require('./pages/signup2.vue')
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