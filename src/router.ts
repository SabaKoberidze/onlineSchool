import { createRouter, createWebHashHistory} from 'vue-router'
// import { logInState } from "./stores/auth";
import Home from './views/HomeView.vue'
import Subject from './views/SubjectView.vue'
import Login from './views/LoginView.vue'
const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: "active-link",
  linkExactActiveClass: "exact-active-link",
  // history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    { 
      name: 'Subject',
      path: '/:id',
      component: Subject,
    },
    { 
      path: '/login',
      component: Login,
      meta: {hideNavbar: true}
    },
  ],
})
//router.beforeEach((to, from, next) => {
  // const publicPages = ["/login", "/admin"];
  // const authRequired = !publicPages.includes(to.path);
  // const auth = logInState();

  // if (authRequired && !auth.isLoggedIn) {
  //   next({ path: "/login", query: { redirect: to.fullPath } });
  // } else {
  //   next();
  // }
//});
export default router;