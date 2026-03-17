import { createRouter, createWebHistory } from '@ionic/vue-router'
import { RouteRecordRaw } from 'vue-router'
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [

{
path: '/',
redirect: '/tabs/tab1'
},

{
path: '/tabs/',
component: TabsPage,
children: [

{
path: '',
redirect: '/tabs/tab1'
},

{
path: 'tab1',
component: () => import('../views/Tab1Page.vue'),
meta: { title: 'Khata Aero' }
},

{
path: 'tab2',
component: () => import('../views/Tab2Page.vue'),
meta: { title: 'Registro/Login' }
},

{
path: 'tab2/login',
component: () => import('../views/Login.vue'),
meta: { title: 'Iniciar sesión' }
},

{
path: 'tab2/registro',
component: () => import('../views/Registro.vue'),
meta: { title: 'Registrarse' }
},

{
path: 'tab3',
component: () => import('../views/Tab3Page.vue'),
meta: { title: 'Cámara/GPS' }
},

{
path: 'aesthetic/:id',
component: () => import('../views/AestheticPage.vue')
}

]
},

]

const router = createRouter({
history: createWebHistory(import.meta.env.BASE_URL),
routes
})

export default router