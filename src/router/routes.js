
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'categorias', component: () => import('src/pages/categorias/categorias.vue') },
      { path: 'newcat', component: () => import('src/pages/categorias/newcat.vue') },
      { path: 'articulos', component: () => import('src/pages/articulos/articulos.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
