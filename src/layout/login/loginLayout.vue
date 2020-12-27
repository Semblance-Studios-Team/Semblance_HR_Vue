<template>
    <div class="main-panel">
      <content-login>
      </content-login>
    </div>
</template>
<!-- backgound image for login page -->
<style lang="scss" scoped>
.main-panel {
  float: left;
  width: 100%;
  height: 100%;
  background-image: url("https://i.imgur.com/YTMcIre.jpg");
  /*background-image: url("https://cdn.pixabay.com/photo/2019/07/01/11/43/bangkok-4309812_1280.jpg");*/
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
<script>
import contentLogin from "./contentLogin.vue";
export default {
  components: {
    contentLogin
  },
  methods: {}
};
</script>
