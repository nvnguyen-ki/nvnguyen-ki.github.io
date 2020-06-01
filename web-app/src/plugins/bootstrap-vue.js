import Vue from "vue";

import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/nvnguyen-ki/" : "/"
};
