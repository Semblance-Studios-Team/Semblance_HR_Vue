import dashboardLayout from "@/layout/dashboard/dashboardLayout.vue";
import loginLayout from "@/layout/login/loginLayout.vue";
// GeneralViews
import notFound from "@/pages/notFoundPage.vue";

// hr pages
import Login from "@/pages/login.vue";
import Add_Employee from "@/pages/Add_Employee.vue";
import Employee_List from "@/pages/Employee_List.vue";
import Add_Client from "@/pages/Add_Client.vue";
import Billing from "@/pages/Billing.vue";
import Add_Prospect from "@/pages/Add_Prospect.vue";
import Prospect_List from "@/pages/Prospect_List.vue";
import Settings from "@/pages/Settings.vue";

import Vue from 'vue';
import VueRouter from 'vue-router';


const routes = [
  {
    path: "/",
    component: loginLayout,
    redirect: "/",
    children: [
      {
        path: "/",
        component: Login,
        meta: {
          guest: true
        }
      }
    ]
  },
  {
    path: "/Employee_List",
    component: dashboardLayout,
    redirect: "/Employee_List",
    meta: { requiresAuth: true},
    children: [
      {
        path: "/Add_Employee",
        name: "Add_Employee",
        component: Add_Employee,
        meta: { requiresAuth: true}
      },
      {
        path: "/Employee_List",
        name: "Employee_List",
        component: Employee_List,
        meta: { requiresAuth: true}
      },
      {
        path: "/Add_Client",
        name: "Add_Client",
        component: Add_Client,
        meta: { requiresAuth: true}
      },
      {
        path: "/Billing",
        name: "Billing",
        component: Billing,
        meta: { requiresAuth: true}
      },
      {
        path: "/Add_Prospect",
        name: "Add_Prospect",
        component: Add_Prospect,
        meta: { requiresAuth: true}
      },
      {
        path: "/Prospect_List",
        name: "Prospect_List",
        component: Prospect_List,
        meta: { requiresAuth: true}
      },
      {
        path: "/Settings",
        name: "Settings",
        component: Settings,
        meta: { requiresAuth: true}
      }
    ]
  },
  { path: "*", component: notFound }
];

const router = new VueRouter({
  routes
})

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
