/**
 * meta 可配置参数
 * @param {boolean} icon 页面icon
 * @param {boolean} keepAlive 是否缓存页面
 * @param {string} title 页面标题
 */
export default [
  {
    path: '/',
    redirect: '/demo'
  },
  {
    path: '/tree',
    name: 'tree',
    component: () => import('@/views/Tree.vue')
  },
  {
    path: '/print',
    name: 'print',
    component: () => import('@/views/Print.vue')
  },
  {
    path: '/demo',
    name: 'demo',
    component: () => import('@/views/Demo.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
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
        path: 'dashload',
        name: 'dashload',
        component: () => import('@/views/dashload/dashload.vue'),
        meta: {
          icon: '',
          keepAlive: true,
          title: 'dashload'
        }
      },
      {
        path: 'treeTable',
        name: 'treeTable',
        component: () => import('@/views/tree-table/Index.vue'),
        meta: {
          icon: '',
          // keepAlive: true,
          title: 'demo'
        }
      }
    ]
  }
]
