/**
 * meta 可配置参数
 * @param {boolean} icon 页面icon
 * @param {boolean} keepAlive 是否缓存页面
 * @param {string} title 页面标题
 */
export default [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue'),
    meta: {
      icon: '',
      keepAlive: true,
      title: 'login'
    }
  },
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
      },
      {
        name: 'demo',
        path: 'demo',
        component: () => import('@/views/demo/demo.vue'),
        meta: {
          icon: '',
          // keepAlive: true,
          title: 'demo'
        }
      }
    ]
  }
];
