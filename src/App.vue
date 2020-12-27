<template>
  <div>
    <notifications></notifications>
    <router-view :key="$route.fullPath"></router-view>
    <!-- and any other components can be added. -->

  </div>
</template>

<script>
// import your components here
import { components } from 'aws-amplify-vue';
import { AmplifyEventBus } from 'aws-amplify-vue';
import { Auth } from 'aws-amplify';

export default {
  data(){
    return {
      signedIn: false
    }
  },
  methods: {
    disableRTL() {
      if (!this.$rtl.isRTL) {
        this.$rtl.disableRTL();
      }
    },
    toggleNavOpen() {
      let root = document.getElementsByTagName("html")[0];
      root.classList.toggle("nav-open");
    }
  },
    beforeCreate() {
      // only logged in users can access
      AmplifyEventBus.$on('authState', info => {
        if (info === 'signedOut') {
          this.$router.push('/')
          this.signedIn = false
        }
      });
    },
  mounted() {
    //ensures css add on overides the RTL format by commenting out line
    //below (css referenced is located in demo.css)

    // this.$watch("$route", this.disableRTL, { immediate: true });
    this.$watch("$sidebar.showSidebar", this.toggleNavOpen);
  }
};
</script>

<style lang="scss">

:root {
  /* login UI Colors */
  --amazonOrange: #0B0B47 !important; /* sign in /sign out btn */
  --lightAmazonOrange: rgb(231, 89, 89);
  /*btn on click color*/
  --darkAmazonOrange: #0B0B47 !important;
  --squidInk: #232F3E;
  --lightSquidInk: #31465F;
  --deepSquidInk: #152939;
  --grey: #828282;
  --lightGrey: #C4C4C4;
  --silver: #E1E4EA;
  --darkBlue: #31465F;
  --red: #DD3F5B;
  --white: #FFFFFF;
  --light-blue: #00a1c9;
  
 }
 /*main form css*/
 .Form__formSection___3tqxz {
   border-radius: 0px 0px 20px 20px !important;
   
 }

//  Hiding the SignUp Link
 .Section__sectionFooterSecondaryContent___3cjOa {
  display: none !important; 
}

// Sign-In and Sign-Out button

.Button__button___1FrBC {
  border-radius: 5px !important;
  margin-top: 10px !important;
  font-size: 14px !important;
}
.Form__formSection___3tqxz{
  min-width: 400px !important;
}



</style>
