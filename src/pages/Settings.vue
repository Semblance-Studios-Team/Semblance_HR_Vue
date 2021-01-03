<!-- navbar logo / navbar BG / text colors / qrcode logos / qrcode color / placeholder selection for employee images -->
<template>
  <card class="employee-card">
    <form @submit.prevent="handleSubmit" enctype="multipart/form-data">
      <br>
      <h2> <span style ="margin-right: 15px;"> Admin Settings </span>
        <label class="form-check-label" for="pj">
        </label>
      </h2>

      <div class="form-row">
         <base-input
          class="col-md-6"
          name="selectedAdminName"
          v-model="data.selectedAdminName"
          type="text"
          label="Select Admin"
          placeholder="Select Admin"
          >
          <select name="selectedAdminName" class="form-control">
            <option selected>craig.burch2</option>
            <option>braden.burch</option>
          </select>
        </base-input>

        <base-input
          class="col-md-6"
          name="newAdminGroup"
          v-model="data.newAdminGroup"
          type="text"
          label="Select Admin Group"
          placeholder="Select Admin Group"
          >
          <select name="newAdminGroup" class="form-control">
            <option selected>Low_Level_Admins</option>
            <option>Top_Level_Admins</option>
          </select>
        </base-input>
      </div>



       <!--  <div class="form-row hidefromclient">
        <fieldset disabled>
         <base-input 
           class="col-md-12"
           name="lastEditedBy"
           label="Database ID (Disabled)" 
           v-model="data.lastEditedBy" 
           type="text" 
         />
       </fieldset>
      </div> -->
      
      <!-- with image upload (onUpload)-->
       <base-button 
        style="float: right; margin-top: 0px;"
        class="animation-on-hover" 
        type="info" 
        native-type="Submit" >
         Update Admin 
      </base-button> 

    </form>
    <div class="form-row">
      <ul class="col-md-6">
       <li>Select which admin you want to change privileges for
       </li>
        <li>Low Level Admins cant DELETE items, only ADD, UPDATE and READ
       </li>
       <li>Top Level Admins can DELETE, ADD, UPDATE, and READ
       </li>
      </ul>
    </div>

  </card>
</template>
<script>
import { components } from 'aws-amplify-vue';
import { AmplifyEventBus } from 'aws-amplify-vue';
import { Auth } from 'aws-amplify';

export default {
  data() {
    return {
      data: [],
    };
  },
  methods: {
    async handleSubmit () {
      let formValues = [];
          const inputs = document.querySelectorAll(".employee-card input, select");
          for (let input of inputs) {
               let name = input.name;
               let value = input.value;
            formValues.push({ [name]: value });
          }
      formValues = Object.assign({}, ...formValues);
      console.log("-adim-data",this.data)
      this.data = formValues;
      
        //http://localhost:3000/clients
        //https://7olb5ali48.execute-api.us-east-1.amazonaws.com/admin/consultants
      axios
        .post("http://localhost:8081/groups", formValues)
        .then(response => {
          console.log(response);
          alert("Thank you, Employee has been added to the Database.");
          this.$router.push('employeeList')
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
  beforeCreate() {
      // attach admin user to form 
      Auth.currentUserInfo()
        .then(info => {
          var userEmail = info.attributes.email;
          var userName = info.username;
             
     });
    },
};
</script>
<style>
  /*custom css located in src/assets/demo/demo.css*/
 .on-image-selected {
  display: none;
 }
</style>








