"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const store_user = require("./store/user.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/home/index.js";
  "./pages/collect/index.js";
  "./pages/Personal/index.js";
  "./pages/My_write/index.js";
  "./pages/theme/index.js";
  "./pages/Aboutme/index.js";
}
const _sfc_main = {
  __name: "App",
  setup(__props) {
    const A = store_user.useUserstore();
    const p = async () => {
      await A.GetUser();
      setTimeout(() => {
        console.log(A.UserData);
      }, 6e3);
    };
    p();
    return () => {
    };
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/koajs/DiaPoem/App.vue"]]);
const pinia = common_vendor.createPinia();
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.use(pinia);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
