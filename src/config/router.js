import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/components/controleFinanceiro/Home"
import Category from "@/components/controleFinanceiro/Category"
import NotFound from "@/components/generalViews/NotFound"
import Content from "@/components/template/Content";


Vue.use(VueRouter);
const routes = [
  // {
  //   name: "dispachLabel",
  //   path: "/exceptiontoast",
  //   component: DispachLabel
  // },
  // {
  //   name: "Brinde Final de Ano",
  //   path: "/toast",
  //   component: EndOfYearToast
  // }
  {
    path: '/',
    component: Content,
    redirect: '/admin/home'
  },
  {
    path: '/admin',
    component: Content,
    redirect: '/admin/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home
      },
      {
        path: 'category',
        name: 'Category',
        component: Category
      }
    ]
  },
  { path: '*', component: NotFound }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
