"use strict";const e=require("../../common/vendor.js"),a=require("../../store/theme.js"),t=require("../../store/user.js"),l=require("../../hook/Touch_Longtime.js");Math||(u+o+n)();const o=()=>"../../components/Poem/index.js",u=()=>"../../components/Loding/index.js",n=()=>"../../components/FunButton/index.js",i={__name:"index",setup(o){const u=a.useThemeterStor(),n=t.useUserstore(),i=e.ref(),c=e.ref(),r=e.$s.importObject("poem"),s=e.ref(),v=e.ref(),d=e.ref(0),h=e.ref();let f=!0;const g=new l.Touch({},{});async function m(e){i.value={},i.value=await r.get().then((e=>e.data[0])).catch((e=>{})),n.UserData&&(s.value=await(n.UserData.collect.filter((e=>e.id===i.value._id)).length>0))}async function _(e){c.value={},c.value=await r.getUserR().then((e=>e.data[0])).catch((e=>{})),n.UserData&&(v.value=await(n.UserData.collect.filter((a=>a.id===e)).length>0))}async function p(e){f?m():_()}async function w(){f?(n.SetCollect({id:i.value._id,title:i.value.title,author:i.value.author,isanuthor:!1,data:(new Date).getTime()}),s.value=await n.UserData.collect.filter((e=>e.id===i.value._id)).length>0):(n.SetCollect({id:c.value._id,title:c.value.title,author:c.value.author,isanuthor:!0,data:(new Date).getTime()}),v.value=await n.UserData.collect.filter((e=>e.id===c.value._id)).length>0)}async function U(){f?(n.UserData.collect.map(((e,a)=>{e.id===i.value._id&&n.removeCollect(a)})),s.value=await(n.UserData.collect.filter((e=>e.id===i.value._id)).length>0)):(n.UserData.collect.map(((e,a)=>{e.id===c.value._id&&n.removeCollect(a)})),v.value=await(n.UserData.collect.filter((e=>e.id===c.value._id)).length>0))}function D(e){g.TouchMove(e,(e=>{d.value=f?e:e-h.value}))}function T(a){g.TouchEnd(a,f?a=>{console.log("111"),100*Math.abs(d.value/h.value)>30?(d.value=-h.value,f=!1,e.index.pageScrollTo({scrollTop:-10}),console.log(100*Math.abs(d.value/h.value))):100*Math.abs(d.value/h.value)<30&&(d.value=0,f=!0)}:a=>{console.log("222"),100*Math.abs(d.value/h.value)<72?(d.value=0,f=!0,e.index.pageScrollTo({scrollTop:-10}),console.log(100*Math.abs(d.value/h.value))):100*Math.abs(d.value/h.value)>72&&(d.value=-h.value,f=!1)})}return e.onLoad((e=>{console.log(e),e.id&&"true"===e.bol?(!async function(e){i.value=await r.getone(e.id).then((e=>e.data[0])).catch((e=>{})),n.UserData&&(s.value=await(n.UserData.collect.filter((e=>e.id===i.value._id)).length>0))}(e),_()):e.id&&"false"===e.bol?(setTimeout((()=>{d.value=-h.value,f=!1}),300),console.log("A"),async function(e){c.value={},c.value=await r.getUser(e.id).then((e=>(console.log(e),e.data[0]))).catch((e=>{})),n.UserData&&(v.value=await(n.UserData.collect.filter((e=>e.id===c.value._id)).length>0))}(e),m()):(m(),_())})),e.onMounted((()=>{u.GetTheme(),async function(){const a=await e.index.getSystemInfo();h.value=a.safeArea.width}()})),(a,t)=>e.e({a:!i.value},i.value?{b:e.p({poem:i.value}),c:e.p({poem:c.value}),d:`translateX(${d.value/h.value*100}vw)`}:{},{e:e.unref(f)?i.value._id:c.value._id,f:e.p({reload:p,remove:U,collect:w,start:e.unref(f)?s.value:v.value,stop:e.unref(f),id:e.unref(f)?i.value._id:c.value._id}),g:e.o(((...a)=>e.unref(g).touchStart&&e.unref(g).touchStart(...a))),h:e.o(D),i:e.o(T),j:e.s(e.unref(u).theme)})}},c=e._export_sfc(i,[["__scopeId","data-v-a339a2fa"]]);i.__runtimeHooks=2,wx.createPage(c);
