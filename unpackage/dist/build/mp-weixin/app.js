"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("./common/vendor.js"),o=require("./store/user.js");Math;const t={methods:{p(){o.useUserstore().GetUser(),e.index.getStorageSync("Darft")||e.index.setStorageSync("Darft",JSON.stringify({key:[]}))}},onLaunch:function(){try{this.p()}catch(e){console.log("失败")}console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}},n=e.createPinia();function r(){const o=e.createSSRApp(t);return o.use(n),{app:o}}r().app.mount("#app"),exports.createApp=r;
