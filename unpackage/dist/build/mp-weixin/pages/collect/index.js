"use strict";const e=require("../../common/vendor.js"),o=require("../../store/user.js");Math||s();const s=()=>"../../components/boxbox/boxbox.js",t={__name:"index",setup(s){const t=e.ref(),a=e=>{const s=o.useUserstore();console.log(e),t.value=s.UserData.collect,s.removeCollect(e)};return e.onLoad((e=>{t.value=JSON.parse(e.data)})),(o,s)=>({a:e.p({title:"我的收藏",poem:t.value,mode:"false",fun:a})})}},a=e._export_sfc(t,[["__scopeId","data-v-848ab8df"]]);wx.createPage(a);
