"use strict";
const common_vendor = require("../../common/vendor.js");
const store_theme = require("../../store/theme.js");
const store_user = require("../../store/user.js");
const hook_Touch_Longtime = require("../../hook/Touch_Longtime.js");
if (!Math) {
  (Loding + Poem + FunButton)();
}
const Poem = () => "../../components/Poem/index.js";
const Loding = () => "../../components/Loding/index.js";
const FunButton = () => "../../components/FunButton/index.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const Theme = store_theme.useThemeterStor();
    const User = store_user.useUserstore();
    const poem = common_vendor.ref();
    const UserPoem = common_vendor.ref();
    const todo = common_vendor.$s.importObject("poem");
    const start = common_vendor.ref();
    const UserStart = common_vendor.ref();
    const size = common_vendor.ref(0);
    const PageSize = common_vendor.ref();
    let stop = true;
    const Touch = new hook_Touch_Longtime.Touch({}, {});
    async function getpoem(id) {
      poem.value = {};
      poem.value = await todo.get().then((res) => {
        return res.data[0];
      }).catch((err) => {
      });
      if (User.UserData) {
        start.value = await (User.UserData.collect.filter(
          (el) => {
            return el.id === poem.value._id;
          }
        ).length > 0);
      }
    }
    async function getUserpoem(id) {
      UserPoem.value = {};
      UserPoem.value = await todo.getUserR().then((res) => {
        return res.data[0];
      }).catch((err) => {
      });
      if (User.UserData) {
        UserStart.value = await (User.UserData.collect.filter(
          (el) => {
            return el.id === id;
          }
        ).length > 0);
      }
    }
    async function reload(A2) {
      if (stop) {
        getpoem();
      } else {
        getUserpoem();
      }
    }
    async function collect() {
      if (stop) {
        User.SetCollect({
          id: poem.value._id,
          title: poem.value.title,
          author: poem.value.author,
          isanuthor: false,
          data: (/* @__PURE__ */ new Date()).getTime()
        });
        start.value = await User.UserData.collect.filter((el) => {
          return el.id === poem.value._id;
        }).length > 0;
      } else {
        User.SetCollect({
          id: UserPoem.value._id,
          title: UserPoem.value.title,
          author: UserPoem.value.author,
          isanuthor: true,
          data: (/* @__PURE__ */ new Date()).getTime()
        });
        UserStart.value = await User.UserData.collect.filter(
          (el) => {
            return el.id === UserPoem.value._id;
          }
        ).length > 0;
      }
    }
    async function remove() {
      if (stop) {
        User.UserData.collect.map((el, index) => {
          if (el.id === poem.value._id) {
            User.removeCollect(index);
          }
        });
        start.value = await (User.UserData.collect.filter(
          (el) => {
            return el.id === poem.value._id;
          }
        ).length > 0);
      } else {
        User.UserData.collect.map((el, index) => {
          if (el.id === UserPoem.value._id) {
            User.removeCollect(index);
          }
        });
        UserStart.value = await (User.UserData.collect.filter(
          (el) => {
            return el.id === UserPoem.value._id;
          }
        ).length > 0);
      }
    }
    async function A(Option) {
      poem.value = await todo.getone(Option.id).then((res) => {
        return res.data[0];
      }).catch((err) => {
      });
      if (User.UserData) {
        start.value = await (User.UserData.collect.filter(
          (el) => {
            return el.id === poem.value._id;
          }
        ).length > 0);
      }
    }
    async function B(Option) {
      UserPoem.value = {};
      UserPoem.value = await todo.getUser(Option.id).then((res) => {
        console.log(res);
        return res.data[0];
      }).catch((err) => {
      });
      if (User.UserData) {
        UserStart.value = await (User.UserData.collect.filter(
          (el) => {
            return el.id === UserPoem.value._id;
          }
        ).length > 0);
      }
    }
    common_vendor.onLoad((Option) => {
      console.log(Option);
      if (Option.id && Option.bol === "true") {
        A(Option);
        getUserpoem();
      } else if (Option.id && Option.bol === "false") {
        setTimeout(() => {
          size.value = -PageSize.value;
          stop = false;
        }, 300);
        console.log("A");
        B(Option);
        getpoem();
      } else {
        getpoem();
        getUserpoem();
      }
    });
    common_vendor.onMounted(() => {
      Theme.GetTheme();
      GETPagesize();
    });
    async function GETPagesize() {
      const Wsize = await common_vendor.index.getSystemInfo();
      PageSize.value = Wsize.safeArea.width;
    }
    function Touchmove(e) {
      const Rfn = (Size) => {
        size.value = stop ? Size : Size - PageSize.value;
      };
      Touch.TouchMove(e, Rfn);
    }
    function TouchmEnd(e) {
      const isSizeA = (Size) => {
        console.log("111");
        if (Math.abs(size.value / PageSize.value) * 100 > 30) {
          size.value = -PageSize.value;
          stop = false;
          common_vendor.index.pageScrollTo({
            scrollTop: -10
          });
          console.log(Math.abs(size.value / PageSize.value) * 100);
        } else if (Math.abs(size.value / PageSize.value) * 100 < 30) {
          size.value = 0;
          stop = true;
        }
      };
      const isSizeB = (Size) => {
        console.log("222");
        if (Math.abs(size.value / PageSize.value) * 100 < 72) {
          size.value = 0;
          stop = true;
          common_vendor.index.pageScrollTo({
            scrollTop: -10
          });
          console.log(Math.abs(size.value / PageSize.value) * 100);
        } else if (Math.abs(size.value / PageSize.value) * 100 > 72) {
          size.value = -PageSize.value;
          stop = false;
        }
      };
      Touch.TouchEnd(e, stop ? isSizeA : isSizeB);
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !poem.value
      }, !poem.value ? {} : {
        b: common_vendor.p({
          poem: poem.value
        }),
        c: common_vendor.p({
          poem: UserPoem.value
        }),
        d: `translateX(${size.value / PageSize.value * 100}vw)`
      }, {
        e: common_vendor.unref(stop) ? poem.value._id : UserPoem.value._id,
        f: common_vendor.p({
          reload,
          remove,
          collect,
          start: common_vendor.unref(stop) ? start.value : UserStart.value,
          stop: common_vendor.unref(stop),
          id: common_vendor.unref(stop) ? poem.value._id : UserPoem.value._id
        }),
        g: common_vendor.o((...args) => common_vendor.unref(Touch).touchStart && common_vendor.unref(Touch).touchStart(...args)),
        h: common_vendor.o(Touchmove),
        i: common_vendor.o(TouchmEnd),
        j: common_vendor.s(common_vendor.unref(Theme).theme)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "D:/koajs/DiaPoem/pages/index/index.vue"]]);
_sfc_main.__runtimeHooks = 2;
wx.createPage(MiniProgramPage);
