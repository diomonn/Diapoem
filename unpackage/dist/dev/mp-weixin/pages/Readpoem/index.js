"use strict";
const common_vendor = require("../../common/vendor.js");
const store_theme = require("../../store/theme.js");
const store_user = require("../../store/user.js");
if (!Array) {
  const _component_uni_card = common_vendor.resolveComponent("uni-card");
  _component_uni_card();
}
if (!Math) {
  Poem();
}
const Poem = () => "../../components/Poem/index.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const Theme = store_theme.useThemeterStor();
    store_user.useUserstore();
    const GetPoemtodo = common_vendor.$s.importObject("poem");
    const poem = common_vendor.ref();
    const list = common_vendor.ref([]);
    const key = common_vendor.ref(0);
    async function GetPoem(keyid) {
      poem.value = {};
      console.log("poem");
      try {
        await GetPoemtodo.getone(list.value[keyid].id).then((res) => {
          poem.value = res.data[0];
        }).catch((err) => {
        });
      } catch (e) {
        console.log("起飞");
      }
    }
    async function GetUserPoem(keyid) {
      console.log("121撒");
      poem.value = {};
      const id = list.value[keyid]._id ?? list.value[keyid].id;
      await GetPoemtodo.getUserone(id).then((res) => {
        poem.value = res.data[0];
      }).catch((err) => {
        console.log(err);
      });
    }
    common_vendor.onLoad((Options) => {
      list.value = JSON.parse(Options.data);
      key.value = JSON.parse(Options.key);
      Options.User === "true" ? GetUserPoem(key.value) : GetPoem(key.value);
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: poem.value
      }, poem.value ? {
        b: common_vendor.p({
          poem: poem.value
        })
      } : {
        c: common_vendor.p({
          title: "内容已被删除",
          thumbnail: "",
          note: "Tips"
        })
      }, {
        d: poem.value ? 1 : "",
        e: !poem.value ? 1 : "",
        f: common_vendor.s(common_vendor.unref(Theme).theme)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e5588c03"], ["__file", "D:/koajs/DiaPoem/pages/Readpoem/index.vue"]]);
wx.createPage(MiniProgramPage);
