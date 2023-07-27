import { defineAsyncComponent } from "vue";
export function registerGlobalComponent(app) {
  app.component(
    "default-layout",
    defineAsyncComponent(() => import("@/layouts/default-layout"))
  );
  app.component(
    "auth-layout",
    defineAsyncComponent(() => import("@/layouts/auth-layout"))
  );
}
