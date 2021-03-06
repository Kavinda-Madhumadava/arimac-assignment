import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(fas)

createApp(App).component('fa', FontAwesomeIcon).use(store).use(router).use(VueLoading).mount('#app')
