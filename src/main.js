import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import router from './core/router'
import ApiService from './core/services/api.service'

const app = createApp(App);

ApiService.init(app);
app.use(Quasar, quasarUserOptions);
app.use(router);

app.mount('#app');