import Vue from "vue";
import Vuetify from 'vuetify'
import App from "./App";
import router from "./router/index";
import BlackDashboard from "./plugins/blackDashboard";
import i18n from "./i18n";
import Amplify, * as AmplifyModules from 'aws-amplify';
import { AmplifyPlugin } from 'aws-amplify-vue';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig)

Vue.use(AmplifyPlugin, AmplifyModules)

Vue.use(BlackDashboard, Vuetify);



/* eslint-disable no-new */
new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount("#app");
