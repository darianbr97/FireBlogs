import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import { getAuth, onAuthStateChanged } from "firebase/auth";

// let app;
// getAuth().onAuthStateChanged(() => {
//     if(!app) {
//         app = createApp(App)
//         app.use(createPinia());
//         app.use(router);
        
//         app.mount("#app");
//     }
// })

const app = createApp(App);
app.use(createPinia());
app.use(router);

app.mount("#app")

