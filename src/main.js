import Vue from 'vue';
import Resource from 'vue-resource'
import Router from 'vue-router'
import 'bootstrap';


import App from './components/App.vue';

import HomeComponent from './components/HomeComponent.vue';
import AboutComponent from './components/AboutComponent.vue';
import ContactComponent from './components/ContactComponent.vue';
import HelpComponent from './components/HelpComponent.vue';
import './registerServiceWorker'

Vue.use(Router);
Vue.use(Resource);

var routes = [
    {
      path: '/',
      name: 'home',
      component: HomeComponent
    },

    {
      path: '/about',
      name: 'about',
      component: AboutComponent
    },

    {
      path: '/contact',
      name: 'contact',
      component: ContactComponent
    },

    {
      path: '/help',
      name: 'help',
      component: HelpComponent
    }


];


// Set up a new router
var router = new Router({
  mode: 'history',
  //base: process.env.BASE_URL,
  routes: routes
});


new Vue({
  router: router,
  render: h => h(App)
}).$mount('#website');