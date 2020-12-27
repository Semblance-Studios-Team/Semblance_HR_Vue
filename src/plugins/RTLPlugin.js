export default {
  install(Vue) {
    let app = new Vue({
      data() {
        return {
          isRTL: false
        };
      },
      methods: {
        getDocClasses() {
          return document.body.classList;
        },
        // quick fix to disable RTL plugin
        enableRTL() {
          this.isRTL = false;
          this.getDocClasses().remove("rtl");
          this.getDocClasses().remove("menu-on-right");
          this.toggleBootstrapRTL(false);
        },
        disableRTL() {
          this.isRTL = false;
          this.getDocClasses().remove("rtl");
          this.getDocClasses().remove("menu-on-right");
          this.toggleBootstrapRTL(false);
        },
        toggleBootstrapRTL(value) {
          for (let i = 0; i < document.styleSheets.length; i++) {
            let styleSheet = document.styleSheets[i];
            let { href } = styleSheet;
            if (href && href.endsWith("bootstrap-rtl.css")) {
              styleSheet.disabled = !value;
            }
          }
        }
      }
    });

    Vue.prototype.$rtl = app;
  }
};
