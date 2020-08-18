import PermissionProvider from "./permissionProvider";
import Mixin from "./mixin"

// Install the components
export function install(Vue) {
  Vue.mixin(Mixin);
  Vue.component(PermissionProvider.name, PermissionProvider);
}

/* -- Plugin definition & Auto-install -- */
/* You shouldn't have to modify the code below */

// Plugin
const plugin = {
  install,
};

export default plugin;

// Auto-install
let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}
