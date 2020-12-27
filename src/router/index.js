import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import axios from "axios";
import body_parser from "body-parser";

Vue.use(VueRouter);

// configure router
const router = new VueRouter({
  //mode: "history", // get rid of # in routing but causes refresh errors
  mode: "hash",
  routes, // short for routes: routes
  axios,
  body_parser,
  linkExactActiveClass: "active",
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});


// Pushing to Login if not Signed in 
router.beforeResolve((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    let user;
    Vue.prototype.$Amplify.Auth.currentAuthenticatedUser().then(data => {
      if (data && data.signInUserSession) {
        user = data;
      }
      next()
    }).catch((e) => {
      next({
        path: '/'
      });
    });
  }
  next()
})

export default router;
