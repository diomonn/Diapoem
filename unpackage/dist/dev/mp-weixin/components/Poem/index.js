"use strict";
const common_vendor = require("../../common/vendor.js");
const store_theme = require("../../store/theme.js");
const _sfc_main = {
  __name: "index",
  props: ["poem"],
  setup(__props) {
    const theme = store_theme.useThemeterStor();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(__props.poem.title),
        b: common_vendor.o(($event) => _ctx.clie()),
        c: common_vendor.t(__props.poem.author),
        d: common_vendor.f(__props.poem.paragraphs, (el, index, i0) => {
          return {
            a: common_vendor.t(el),
            b: el
          };
        }),
        e: common_vendor.s(common_vendor.unref(theme).theme)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/koajs/DiaPoem/components/Poem/index.vue"]]);
wx.createComponent(Component);
