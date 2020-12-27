<template>
  <div class="wrapper">
    <side-bar>
      <template slot="links"> 
        <sidebar-link to="/Add_Client" :name="$t('Add Client')" icon="fas fa-plus"/> 
        <sidebar-link to="/Add_Employee" :name="$t('Add Employee')" icon="fas fa-plus"/>    
        <sidebar-link to="/Add_Prospect" :name="$t('Add Prospect')" icon="fas fa-plus"/>   
        <sidebar-link to="/Billing" :name="$t('Client Billing')" icon="tim-icons icon-money-coins marginIcon "/>
        <sidebar-link to="/Employee_List" :name="$t('Employee List')" icon="tim-icons icon-badge marginIcon "/>
        <sidebar-link to="/Prospect_List" :name="$t('Prospect List')" icon="tim-icons icon-single-02 marginIcon "/>
        <sidebar-link to="/Settings" :name="$t('Settings')" icon="tim-icons icon-settings-gear-63 marginIcon "/> 
        
      </template>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
import topNavbar from "./topNavbar.vue";
import contentFooter from "./contentFooter.vue";
import dashboardContent from "./content.vue";
import mobileMenu from "./mobileMenu";
export default {
  components: {
    topNavbar,
    contentFooter,
    dashboardContent,
    mobileMenu
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    }
  }
};
</script>
<style >
  .marginIcon {
    margin-top: -5px !important;
  }

</style>
