import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";
import stores from "./store";

import "./assets/styles/tailwind.css";
import "./assets/styles/global.css";
import { registerGlobalComponent } from "@/utils/import";

const app = createApp(App);
registerGlobalComponent(app);
app.use(router);
app.use(stores);
app.mount("#app");
