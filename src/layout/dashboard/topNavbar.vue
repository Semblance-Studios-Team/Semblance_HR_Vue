<template>
  <nav class="navbar navbar-expand-lg navbar-absolute"
       :class="{'bg-white': showMenu, 'navbar-transparent': !showMenu}">
    <div class="container-fluid">
      <div class="navbar-wrapper">
        <div class="navbar-toggle d-inline" :class="{toggled: $sidebar.showSidebar}">
          <button type="button" class="navbar-toggler"
                  @click="toggleSidebar">
            <span class="navbar-toggler-bar bar1"></span>
            <span class="navbar-toggler-bar bar2"></span>
            <span class="navbar-toggler-bar bar3"></span>
          </button>
        </div>
        <a class="navbar-brand" href="#pablo">{{routeName}}</a>
      </div>
      <button class="navbar-toggler" type="button"
              @click="toggleMenu"
              data-toggle="collapse"
              data-target="#navigation"
              aria-controls="navigation-index"
              aria-label="Toggle navigation">
        <span class="navbar-toggler-bar navbar-kebab"></span>
        <span class="navbar-toggler-bar navbar-kebab"></span>
        <span class="navbar-toggler-bar navbar-kebab"></span>
      </button>
      <collapse-transition>
        <div class="collapse navbar-collapse show" v-show="showMenu">
          <ul class="navbar-nav" :class="$rtl.isRTL ? 'mr-auto' : 'ml-auto'">
           
           
           
           
           <!-- <div class="search-bar input-group">
              <input 
                type="text" 
                class="form-control" 
                placeholder="Search..."
                v-model="searchQuery"
               >
              <div class="input-group-addon searchButton">
                <i 
                   class="tim-icons icon-zoom-split "
                   @click="searchModalVisible(c)"
                >
                </i>
              </div>
            
             
            </div>  -->
             <!-- form moved to a separate file srchform.htm -->
           
            <!-- <modal :show.sync="searchModalVisible"
                   class="modal-search"
                   id="searchModal"
                   :centered="false"
                   :show-close="true">
                 <input slot="header" 
                        value=""
                        v-model="searchQuery" 
                        type="text" 
                        class="form-control" 
                        id="inlineFormInputGroup"
                        placeholder="SEARCH"
                        v-on:change="find()">
            </modal> -->
            <!-- <base-dropdown tag="li"
                           :menu-on-right="!$rtl.isRTL"
                           title-tag="a" class="nav-item">
              <a slot="title" href="#" class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="true">
                <div class="notification d-none d-lg-block d-xl-block"></div>
                <i class="tim-icons icon-sound-wave"></i>
                <p class="d-lg-none">
                  New Notifications
                </p>
              </a>
              <li class="nav-link">
                <a href="#" class="nav-item dropdown-item">Mike John responded to your email</a>
              </li>
              <li class="nav-link">
                <a href="#" class="nav-item dropdown-item">You have 5 more tasks</a>
              </li>
              <li class="nav-link">
                <a href="#" class="nav-item dropdown-item">Your friend Michael is in town</a>
              </li>
              <li class="nav-link">
                <a href="#" class="nav-item dropdown-item">Another notification</a>
              </li>
              <li class="nav-link">
                <a href="#" class="nav-item dropdown-item">Another one</a>
              </li>
            </base-dropdown> -->
            <base-dropdown tag="li"
                           :menu-on-right="!$rtl.isRTL"
                           title-tag="a"
                           class="nav-item"
                           menu-classes="dropdown-navbar">
              <a slot="title" href="#" class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="true">
                <div class="photo">
                  <img src="img/iconBlue.png"> 
                </div>
                <b class="caret d-none d-lg-block d-xl-block"></b>
                <p class="d-lg-none">
                  Log out
                </p>
              </a>
              
              
              
            <!-- <li class="nav-link" style="background-color: #0B0B47;">
              <sidebar-link to="/Add_Client" :name="$t('Add Client')"/> 
            </li>
            <li class="nav-link" style="background-color: #0B0B47;">
              <sidebar-link to="/Add_Employee" :name="$t('Add Employee')"/>    
            </li>
            <li class="nav-link" style="background-color: #0B0B47;">
              <sidebar-link to="/Employee_List" :name="$t('Employee List')"/>
            </li>
            <li class="nav-link" style="background-color: #0B0B47;">
              <sidebar-link to="/Billing" :name="$t('Client Billing')"/>
            </li>
            <li class="nav-link" style="background-color: #0B0B47;">
                <sidebar-link to="/Settings" :name="$t('Settings')" /> 
            </li> -->
           <!--  <div class="dropdown-divider"></div> -->
            <li class="nav-link" >
               <amplify-sign-out class="signOutButton" v-bind:signOutConfig="signOutConfig" @click.prevent="onLogout"  ></amplify-sign-out> 
            </li>
            
            </base-dropdown>
          </ul>
        </div>
      </collapse-transition>
    </div>
  </nav>
</template>
<script>
import { CollapseTransition } from "vue2-transitions";
import { InputGroupPlugin } from 'bootstrap-vue'
// import { Modal } from "@/components";
import { baseTable } from "../../pages/Employee_List.vue"
import { AmplifyEventBus } from 'aws-amplify-vue';

AmplifyEventBus.$emit('authState', 'signedOut')

export default {
  components: {
    CollapseTransition,
    InputGroupPlugin
    // Modal
  },
  computed: {
    routeName() {
      const { name } = this.$route;
      return this.capitalizeFirstLetter(name);
    },
    isRTL() {
      return this.$rtl.isRTL;
    }
  },
  data() {
    return {
      activeNotifications: false,
      showMenu: false,
      searchModalVisible: false,
      searchQuery: " ",
      info: [],
      keyword: " ",
      items: " ",
      fields: " ",
      signedIn: false, 
      dataArray: [ {
        formattedName: 'formatted name',
        workEmail: 'work email' }
      
      ],
      signOutConfig: [] 
      // modal: false,
    };
     
  },
  methods: {
    
    

    // searchModalVisible(c){
    //   const list = await axios.get(`https://7olb5ali48.execute-api.us-east-1.amazonaws.com/admin/list`);
    //   this.info = list.data;

    // },
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    toggleNotificationDropDown() {
      this.activeNotifications = !this.activeNotifications;
    },
    closeDropDown() {
      this.activeNotifications = false;
    },
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    hideSidebar() {
      this.$sidebar.displaySidebar(false);
    },
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    onLogout() {
      this.$router.push("/");
    }
  },
};
</script>
<style scoped >
  .searchButton:hover {
    cursor: pointer;
  }

  .signOutButton {
    float: left !important;
  }

  /* .Button__button___1FrBC {
  color: black !important;
  background-color: transparent !important;
}

.Button__button___1FrBC:hover {
  
  cursor: pointer !important;
} */

  
</style>
