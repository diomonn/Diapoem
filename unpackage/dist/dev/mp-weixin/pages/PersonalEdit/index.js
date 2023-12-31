"use strict";
const common_vendor = require("../../common/vendor.js");
const store_user = require("../../store/user.js");
if (!Array) {
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  _easycom_uni_popup2();
}
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  _easycom_uni_popup();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const Value = common_vendor.ref("空白");
    const Key = common_vendor.ref("");
    const popupCoupon = common_vendor.ref(null);
    const User = store_user.useUserstore();
    const KeyNumber = common_vendor.ref(10);
    const keyWord = common_vendor.computed(() => {
      return KeyNumber.value - Value.value.length;
    });
    const onChooseAvatar = (e) => {
      common_vendor.index.chooseImage({
        count: 1,
        sizeType: ["compressed"],
        sourceType: ["album", "camera"],
        success: (res) => {
          User.SetAvatarUrl(res.tempFilePaths[0]);
        }
      });
    };
    const open = (value, key, num) => {
      popupCoupon.value.open();
      Value.value = value;
      Key.value = key;
      KeyNumber.value = num;
    };
    const close = (A) => {
      if (A) {
        console.log("改名");
        User.SetText(Key.value, Value.value);
      }
      popupCoupon.value.close();
    };
    common_vendor.onBeforeUnmount(() => {
      User.SetUser();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(User).UserData.avatar,
        b: common_vendor.o(onChooseAvatar),
        c: common_vendor.t(common_vendor.unref(User).UserData.user_name),
        d: common_vendor.o(($event) => open(common_vendor.unref(User).UserData.user_name, "user_name", 7)),
        e: common_vendor.t(common_vendor.unref(User).UserData.slogan),
        f: common_vendor.o(($event) => open(common_vendor.unref(User).UserData.slogan, "slogan", 12)),
        g: common_vendor.t(common_vendor.unref(User).UserData.self_introduction),
        h: common_vendor.o(($event) => open(common_vendor.unref(User).UserData.self_introduction, "self_introduction", 20)),
        i: KeyNumber.value,
        j: Value.value,
        k: common_vendor.o(($event) => Value.value = $event.detail.value),
        l: common_vendor.t(common_vendor.unref(keyWord)),
        m: common_vendor.o(($event) => close(true)),
        n: common_vendor.o(($event) => close(false)),
        o: common_vendor.sr(popupCoupon, "1b420d36-0", {
          "k": "popupCoupon"
        }),
        p: common_vendor.p({
          type: "bottom"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1b420d36"], ["__file", "D:/koajs/DiaPoem/pages/PersonalEdit/index.vue"]]);
wx.createPage(MiniProgramPage);
