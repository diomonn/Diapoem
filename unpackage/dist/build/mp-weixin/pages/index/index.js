"use strict";const e=require("../../common/vendor.js"),t=require("../../store/theme.js"),a=require("../../store/user.js");Math||(l+o+n)();const o=()=>"../../components/Poem/index.js",l=()=>"../../components/Loding/index.js",n=()=>"../../components/FunButton/index.js",r={__name:"index",setup(o){const l=t.useThemeterStor(),n=a.useUserstore(),r=e.ref(),s=e.$s.importObject("poem"),i=e.ref();async function u(){r.value={},r.value=await s.get().then((e=>e.data[0])).catch((e=>{})),n.UserData&&(i.value=await(n.UserData.collect.filter((e=>e.id===r.value._id)).length>0))}async function c(){n.SetCollect({id:r.value._id,title:r.value.title,author:r.value.author,data:(new Date).getTime()}),i.value=await(n.UserData.collect.filter((e=>e.id===r.value._id)).length>0)}async function d(){n.UserData.collect.map(((e,t)=>{e.id===r.value._id&&n.removeCollect(t)})),i.value=await(n.UserData.collect.filter((e=>e.id===r.value._id)).length>0)}return e.onLoad((e=>{console.log(e.value)})),e.onShareAppMessage((e=>("button"===e.from&&console.log(e.target),{title:"在这里分享你的诗",path:"/pages/index/index"}))),e.onMounted((()=>{u()})),(t,a)=>e.e({a:!r.value},r.value?{b:e.p({poem:r.value}),c:e.p({reload:u,remove:d,collect:c,start:i.value}),d:e.s(e.unref(l).theme)}:{})}},s=e._export_sfc(r,[["__scopeId","data-v-35226053"]]);r.__runtimeHooks=2,wx.createPage(s);