import './showBilldVersion';
import './main.scss';

import { createApp } from 'vue';

import App from './App.vue';

import router from '@/router/index';
import store from '@/store/index';

// import 'windi.css'; // windicss-webpack-plugin会解析windi.css这个MODULE_ID

const app = createApp(App);

app.use(store);
app.use(router);

app.mount('#app');
