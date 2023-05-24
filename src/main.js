import { createApp } from 'vue'
import { InstallCodemirro } from "codemirror-editor-vue3";
import App from './App.vue'
import './css/index.css'
import './css/style.css'
import router from './routers/routes.js'  

const app = createApp(App);
app.use(InstallCodemirro, { componentName: "codeEditor" });
app.use(router);
app.mount("#app");