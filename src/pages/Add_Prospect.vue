<template>
  <card class="employee-card">
    <form @submit.prevent="handleSubmit" enctype="multipart/form-data">
      <br>
      <h2> <span style ="margin-right: 15px;"> Prospect Information </span>
        <label class="form-check-label" for="pj">
        </label>
      </h2>
      <div class="form-row">
        <base-input
          class="col-md-4"
          name="companyName"
          v-model="data.companyName"
          type="text"
          label="Company Name*"
          placeholder="Company Name"
        />
       <base-input
          class="col-md-4"
          name="formattedName"
          v-model="data.formattedName"
          type="text" 
          label="Internal Contact's Name"
          placeholder="Internal Contact's Name"
          />
          
        <base-input 
         class="col-md-4" 
         name="title"
         v-model="data.title"
         type="text" 
         label="Title" 
         placeholder="Title"
        />
        </div>


        <div class="form-row">
         <base-input 
         class="col-md-4" 
         name="companyEmail"
         v-model="data.companyEmail"
         type="email" 
         label="Contact Email" 
         placeholder="Contact Email"
        />
  
        <base-input
          class="col-md-4"
          name="cellPhone"
          v-model="data.cellPhone"
          type="text"
          label="Cell Phone"
          placeholder="xxx-xxx-xxxx"
        />
        <base-input
          class="col-md-4"
          name="companyPhoneNumber"
          v-model="data.companyPhoneNumber"
          type="text"
          label="Company Phone Number"
          placeholder="xxx-xxx-xxxx"
        />
        </div>
        <div class="form-row">
         
        <base-input
          class="col-md-4"
          name="extenstionNumber"
          v-model="data.extenstionNumber"
          type="text"
          label="Extension Number"
          placeholder="ex: 3471"
        />
        
          <base-input
          class="col-md-4"
          name="contactedThisMonth"
          v-model="data.contactedThisMonth"
          type="text"
          label="Contacted This Month*"
          placeholder="Yes or No"
          >
          <select name="contactedThisMonth" id="inputState" class="form-control">
            <option selected>No</option>
            <option>Yes</option>
          </select>
        </base-input>

        <!-- New code by Kenny 12/29/20-->
        <base-input
          class="col-md-4"
          name="hotAndCold"
          v-model="data.hotAndCold"
          type="text"
          label="Hot and Cold*"
          placeholder="Hot or Cold"
          >
          <select name="hotAndCold" class="form-control">
            <option selected>Cold</option>
            <option>Hot</option>
          </select>
        </base-input>
      <!-- End new code by Kenny 12/29/20-->
      </div>

      <div class="form-row">
         <base-input
          class="col-md-4"
          name="companyAddress_street"
          v-model="data.companyAddress_street"
          type="text"
          label="Company Address"
          placeholder="Company Address"
        />
        
        <base-input 
         class="col-md-4" 
         name="companyAddress_city"
         v-model="data.companyAddress_city"
         type="text" 
         label="Company City" 
         placeholder="Company City"
        />
        <base-input 
         class="col-md-4" 
         name="companyAddress_stateProvince" 
         v-model="data.companyAddress_stateProvince"
         label="Company State / Province">
          <select 
           name="companyAddress_stateProvince" 
           id="inputState" 
           class="form-control">
            
           <option selected>AK</option>
           <option >AL</option>
           <option>AR</option>
           <option>AZ</option>           
           <option>CA</option>
           <option>CO</option>
           <option>CT</option>
           <option>DE</option>
           <option>FL</option>
           <option>GA</option>
           <option>HI</option>
           <option>IA</option>
           <option>ID</option>
           <option>IL</option>
           <option>IN</option>
           <option>KS</option>
           <option>KY</option>
           <option>LA</option>
           <option>MA</option>
           <option>MD</option>
           <option>ME</option>
           <option>MI</option>
           <option>MN</option>
           <option>MO</option>
           <option>MS</option>
           <option>MT</option>
           <option>NC</option>
           <option>ND</option>
           <option>NE</option>
           <option>NH</option>
           <option>NJ</option>
           <option>NM</option>
           <option>NV</option>
           <option>NY</option>
           <option>OH</option>
           <option>OK</option>
           <option>OR</option>
           <option>PA</option>
           <option>RI</option>
           <option>SC</option>
           <option>SD</option>
           <option>TN</option>
           <option>TX</option>
           <option>UT</option>
           <option>VA</option>
           <option>VT</option>
           <option>WA</option>
           <option>WI</option>
           <option>WV</option>
           <option>WY</option>
           <option>Other</option>
          </select>
        </base-input>
        <base-input
          class="col-md-4"
          name="companyAddress_postalCode"
          v-model="data.companyAddress_postalCode"
          type="text"
          label="Company Postal Code"
          placeholder="Company Postal Code"
        />

        <base-input
          class="col-md-4"
          name="companyWebsite"
          v-model="data.companyWebsite"
          type="text"
          label="Company Website*"
          placeholder="Company Website"
        />
      </div>
      <div class="form-row">
       <base-input
          class="col-md-8"
          name="comment"
          v-model="data.comment"
          type="text"
          label="Comment"
          placeholder="Comment"
        />
       </div>

        <div class="form-row hidefromclient">
        <fieldset disabled>
         <base-input 
           class="col-md-12"
           name="lastEditedBy"
           label="Database ID (Disabled)" 
           v-model="data.lastEditedBy" 
           type="text" 
         />
       </fieldset>
      </div>

      
      <!-- with image upload (onUpload)-->
       <base-button 
        style="float: right; margin-top: 0px;"
        class="animation-on-hover" 
        type="info" 
        native-type="Submit" >
         Add Prospect
      </base-button> 
      <!-- <base-button 
       
        class="animation-on-hover" 
        type="info" 
        native-type="Submit" >
         Add Employee
      </base-button> -->
    </form>
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
      console.log("------------data",this.data)
      this.data = formValues;

      //admin user 

         // attach current admin user to form 
          await Auth.currentUserInfo()
          .then(info => {
            var userEmail = info.attributes.email;
            var userName = info.username;
            var createdUserName = info.username;
            console.log('12');
            console.log(createdUserName);  
            this.data.createdBy = createdUserName;
            formValues.createdBy = this.data.createdBy;
            //add timestamp
            var timestamp = Number(new Date());
            const date = new Date(timestamp).toDateString();
            this.data.timeStampAdd = date;
           });
      //error handling
      if (formValues.companyName == "") {
        alert('Company Name is REQUIRED! Please fix.');
      }
      else {
        //http://localhost:8081/prospects
        //https://dad59dxvm7.execute-api.us-east-1.amazonaws.com/admin/prospects
      axios
        .post("https://dad59dxvm7.execute-api.us-east-1.amazonaws.com/admin/prospects", formValues)
        .then(response => {
          console.log(response);
          alert("Thank you, Prospect has been added to the Database.");
          this.$router.push('Prospect_List')
        })
        .catch(error => {
          console.log(error);
        });
      }
    },
    show() {
      var x = document.getElementById("showHide");
      if (x.style.display === "none") {
        x.style.display = "block";
      }
    },
    hide() {
      var y = document.getElementById("showHide");
      if (y.style.display === "block") {
        y.style.display = "none";
      } else {
        y.style.display = "none";
      }
    }
  },
  beforeCreate() {
      // attach admin user to form 
     //  Auth.currentUserInfo()
     //    .then(info => {
     //      var userEmail = info.attributes.email;
     //      var userName = info.username;
     //      console.log('11');
     //      console.log(userEmail);
     //      console.log(userName);  
     //      this.data.lastEditedBy = userName;
     //      console.log('lastEditedBy');
     //      console.log(this.data.lastEditedBy);
             
     // });
    },
};
</script>
<style>
  /*custom css located in src/assets/demo/demo.css*/
 .on-image-selected {
  display: none;
 }
</style>








