"use strict";
const common_vendor = require("../../common/vendor.js");
const store_user = require("../../store/user.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    common_vendor.reactive([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    common_vendor.ref(null);
    const LO = common_vendor.ref(false);
    const User = store_user.useUserstore();
    const userlist = common_vendor.ref([]);
    new common_vendor.dayjs();
    common_vendor.onReachBottom(() => {
      GetUser();
      console.log("!");
    });
    const Getday = () => {
      console.log("你");
    };
    const GetUser = async () => {
      LO.value = true;
      const db = common_vendor.$s.database();
      let { result } = await db.collection("users").where(`_id!='${User.UserData._id}'`).field(
        {
          "user_name": true,
          "create": true,
          "self_introduction": true,
          "slogan": true,
          "avatar": true
        }
      ).limit(7).skip(userlist.value.length).get();
      userlist.value = [...userlist.value, ...result.data];
      if (result.data.length) {
        LO.value = false;
      }
      console.log(result.value);
    };
    const GoNavigateTo = (Url, value) => {
      console.log("跳转");
      common_vendor.index.navigateTo({
        url: `/pages/${Url}/index?data=` + JSON.stringify(value),
        animationType: "pop-in",
        animationDuration: 1e4
      });
    };
    common_vendor.onMounted(() => {
      GetUser();
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(($event) => Getday()),
        b: common_vendor.f(userlist.value, (item, index, i0) => {
          return {
            a: item.avatar,
            b: common_vendor.t(item.user_name),
            c: common_vendor.t(item.slogan),
            d: common_vendor.t(item.self_introduction),
            e: common_vendor.o(($event) => GoNavigateTo("Personal", item), index),
            f: index
          };
        }),
        c: LO.value
      }, LO.value ? {} : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-da70f5fc"], ["__file", "D:/koajs/DiaPoem/pages/neighborhood/index.vue"]]);
wx.createPage(MiniProgramPage);
