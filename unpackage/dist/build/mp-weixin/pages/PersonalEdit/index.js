"use strict";const e=require("../../common/vendor.js"),a=require("../../store/user.js");if(!Array){e.resolveComponent("uni-popup")()}Math;const r={__name:"index",setup(r){const t=e.ref("空白"),o=e.ref(""),u=e.ref(null),s=a.useUserstore(),n=e.ref(10),l=e.computed((()=>n.value-t.value.length)),c=a=>{e.index.chooseImage({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:e=>{s.SetAvatarUrl(e.tempFilePaths[0])}})},f=(e,a,r)=>{u.value.open(),t.value=e,o.value=a,n.value=r},p=()=>{s.SetText(o.value,t.value),u.value.close()};return e.onBeforeUnmount((()=>{s.SetUser()})),(a,r)=>({a:e.unref(s).UserData.avatar,b:e.o(c),c:e.t(e.unref(s).UserData.user_name),d:e.o((a=>f(e.unref(s).UserData.user_name,"user_name",7))),e:e.t(e.unref(s).UserData.slogan),f:e.o((a=>f(e.unref(s).UserData.slogan,"slogan",12))),g:e.t(e.unref(s).UserData.self_introduction),h:e.o((a=>f(e.unref(s).UserData.self_introduction,"self_introduction",20))),i:n.value,j:t.value,k:e.o((e=>t.value=e.detail.value)),l:e.t(e.unref(l)),m:e.o(p),n:e.sr(u,"13290478-0",{k:"popupCoupon"}),o:e.p({type:"bottom"})})}},t=e._export_sfc(r,[["__scopeId","data-v-13290478"]]);wx.createPage(t);