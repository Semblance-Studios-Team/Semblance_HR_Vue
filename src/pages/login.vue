<template>
    <div v-if="this.isLoading == true"  class="vld-parent ">
        <loading :active.sync="isLoading" 
        :is-full-page="fullPage"></loading>
  </div>

  <div v-else class="container custom-mt">
    <div class="row">
      <div align="center" class="col-md-12" style="padding: 0px !important">
      <img class="loginLogo" src="img/SemblanceHR.png">
      </div>
    </div>
    <div class="row">
      <div class="col-md-12" style="padding: 0px !important">
      <div align="center" class="margin-topform" >
       <amplify-authenticator v-bind:authConfig="authConfig" ></amplify-authenticator>
      </div>
     </div>
    </div>
  </div>
</template>
<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import { components } from 'aws-amplify-vue';
import { AmplifyEventBus } from 'aws-amplify-vue';
import { Auth } from 'aws-amplify';
export default {
   components: {
    Loading
  },
  name: 'login',
  data() {
    return {
      userEmail: ' ',
      data: [],
      signedIn: false,
      // authConfig: {
      //   usernameAttributes: 'User Name',
      //   signUpConfig: {
      //     header: 'Sign Up',
      //     hideAllDefaults: true,
      //     defaultCountryCode: '1'
      //   }
      // },
      isLoading: false,
      fullPage: true 
      
    };
  },
  
  methods: {
    spinner() {
        this.isLoading = true;
        setTimeout(() => {
          this.isLoading = false
        },2000)
    }
   },
   beforeCreate() {
      // event checker
      AmplifyEventBus.$on('authState', info => {
        if (info === 'signedIn') {
          this.signedIn = true
          this.$router.push('/Employee_List')
        }
        if (info === 'signedOut') {
          this.$router.push('/')
          this.signedIn = false
        }
      });
      // Push to employee list if signed in 
      Auth.currentUserInfo()
        .then(info => {
          var userEmail = info.attributes.email;
          var userName = info.username;
          console.log('999999');
          console.log(userName);
          console.log(userEmail);
          if (userEmail != null) {
            this.$router.push('/Employee_List')
          } else {
            //do nothing
          }
     
    });
    },
  beforeMount(){
      this.spinner()
 },
};
</script>
<!-- keep styles local -->
<style scoped>

.loginLogo {
  /*-ms-transform: translateY(-50%);
  transform: translateY(-50%);
  left: 50%;
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);*/
  margin-left: auto;
  margin-right: auto;
  width: 400px;
  padding: 47px;
  background-color: #0B0B47;
  border-top: 4px solid white;
  border-left: 4px solid white;
  border-right: 4px solid white;
  border-radius: 20px 20px 0px 0px;

}

p {
  color: black !important;
  font-size: 20px !important;
}

input {
  color: black !important;
  text-shadow: none !important;
  font-size: 16px;
  font-weight: 500;
}
.form-control {
  border-color: black !important;
}

.custom-mt {
  margin-top: 13% !important
}

@media only screen and (max-width: 1920px) {
  .custom-mt {
  margin-top: 10% !important;
 }
}
@media only screen and (max-width: 1500px) {
  .custom-mt {
  margin-top: 15% !important;
 }
}

</style> 

       <!--    //old log in set up using JWT, migrated to aws cognito

       async submitLogin() {
     
           let userLogin = [];
           // query for all inputs and selects inside the page
           const inputs = document.querySelectorAll(".loginForm input");
           // loop forEach input and select catch the value
           for (let input of inputs) {
             let name = input.name;
             let value = input.value;
             userLogin.push({ [name]: value });
           }
           // transform the object
           userLogin = Object.assign({}, ...userLogin);
           this.data = userLogin;
           var tokenStorage;  
        try {
            let authAdmin = await axios.post("https://7olb5ali48.execute-api.us-east-1.amazonaws.com/admin/auth", userLogin)
                .then(response => {
                  tokenStorage = response.data;             
                })           
            let token = await axios.get(" https://7olb5ali48.execute-api.us-east-1.amazonaws.com/admin/login",
                { headers: { 
                  'Authorization': tokenStorage 
                  }
                })
                  if (tokenStorage !== undefined) {
                     this.$router.push('EmployeeList') 
                  }
        } catch (e) {
          console.log(`ERROR:`, e); 
          alert('Incorrect Sign in Info. Please Try Again.')
          } -->



           <!-- <hr class=" mb-4"> -->
       <!-- Email -->
      <!--  <input 
         type="email" 
         class="form-control mb-4" 
         placeholder="E-mail"
         name="email"
         v-model="data.email"
         > -->
      <!-- Password -->
       <!-- <input 
         type="password" 
         class="form-control  mb-4" 
         placeholder="Password"
         name="password"
         v-model="data.password"
         >
       <div class="d-flex justify-content-around">
         <div> -->
            <!-- Forgot password -->
            <!-- <a href="">Forgot password?</a> -->
         <!-- </div> -->
       <!-- </div> -->
       <!-- Sign in button -->
