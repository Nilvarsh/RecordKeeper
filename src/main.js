import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

Vue.config.productionTip = false;
Vue.use(VueRouter);

// const Bar = { template: "<div>bar</div>" };
const routes = [
  { path: "/", component: Home },
  { path: "/detail", component: Detail }
  // { path: "/bar", component: Bar }
];

const router = new VueRouter({
  routes // `routes: routes` の短縮表記
});

// new Vue({
//   router
// }).$mount("#app");

new Vue({
  render: (h) => h(App),
  router
}).$mount("#app");
