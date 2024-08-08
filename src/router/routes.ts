import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/Home'
  },
  {
    path: '/Dashboard',
    component: () => import('src/layouts/MainLayoutUsers.vue'),
    children: [
      { 
        path: '/Analysis', 
        component: () => import('components/MainLayoutUsers/Analysis/Analysis.vue'), 
        meta: { requiresAuth: true, roles: ['ADMIN', 'SELLER'] } 
      },
      { 
        path: '/Users', 
        component: () => import('components/MainLayoutUsers/Users/Users.vue'), 
        meta: { requiresAuth: true, roles: ['ADMIN', 'SELLER'] } 
      },
      { 
        path: '/Products', 
        component: () => import('components/MainLayoutUsers/Products/Products.vue'), 
        meta: { requiresAuth: true, roles: ['ADMIN', 'SELLER'] } 
      },
      { 
        path: '/Sales', 
        component: () => import('components/MainLayoutUsers/Sales/Sales.vue'), 
        meta: { requiresAuth: true, roles: ['ADMIN', 'SELLER'] } 
      },
      { 
        path: '/Marketing', 
        component: () => import('components/MainLayoutUsers/Marketing/Marketing.vue'), 
        meta: { requiresAuth: true, roles: ['ADMIN', 'SELLER'] } 
      },
    ]
  },
  {
    path: '/Initial',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [
      { 
        path: '/Home', 
        component: () => import('components/MainLayout/Home/Home.vue'), 
        meta: { requiresAuth: false, roles: ['ADMIN', 'SELLER', 'CUSTOMER', 'GUEST'] } 
      },
      { 
        path: '/Shop', 
        component: () => import('components/MainLayout/Shop/Shop.vue'), 
        meta: { requiresAuth: false, roles: ['ADMIN', 'CUSTOMER', 'GUEST'] } 
      },
      { 
        path: '/Login', 
        component: () => import('components/MainLayout/Login/Login.vue'), 
        meta: { requiresAuth: false, roles: ['ADMIN', 'SELLER', 'CUSTOMER', 'GUEST'] } 
      },
    ]
  },
  // { 
  //   path: '/index', 
  //   component: () => import('layouts/MainLayout.vue'), 
  //   meta: { requiresAuth: true, roles: ['ADMIN', 'SELLER', 'CUSTOMER', 'GUEST'] } 
  // },
  
  // Ruta para mostrar error 503
  { 
    path: '/access-denied', 
    component: () => import('pages/ErrorWithoutPermission.vue'), 
  },
  // Ruta para mostrar error 404
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
