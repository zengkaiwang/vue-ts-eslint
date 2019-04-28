export default [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: () => import('@/views/login/login.vue'),
  //   meta: {
  //     icon: '',
  //     keepAlive: true,
  //     title: 'login'
  //   }
  // },
  {
    path: '/index',
    name: 'index',
    redirect: '/index/dashload',
    component: () => import('@/views/index/index.vue'),
    meta: {
      icon: '',
      keepAlive: true,
      title: 'index'
    },
    children: [
      {
        name: 'dashload',
        path: 'dashload',
        component: () => import('@/views/dashload/dashload.vue'),
        meta: {
          icon: '',
          keepAlive: true,
          title: 'dashload'
        }
      }
      // {
      //   name: 'demo',
      //   path: 'demo',
      //   component: () => import('@/views/demo/demo.vue'),
      //   meta: {
      //     icon: '',
      //     // keepAlive: true,
      //     title: 'demo'
      //   }
      // }
    ]
  }  
]
