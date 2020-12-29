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

        <!-- <br><br><br> -->
        <!-- 
     <h2> <span> Employee Information </span></h2>
     <div class="form-row">
       <base-input 
        class="col-md-4" 
        name="personalEmail" 
        v-model="data.personalEmail"
        label="Personal Email" 
        placeholder="Personal Email"
       />
       <base-input 
        class="col-md-4" 
        name="dob" 
        v-model="data.dob"
        label="Date of Birth" 
        placeholder="MM/DD/YYYY"
       />
        <base-input
          class="col-md-4"
          name="homeAddress_street"
          v-model="data.homeAddress_street"
          label="Home Address"
          placeholder="Home Address"
        />
      </div>
      <div class="form-row">
        <base-input 
        class="col-md-4" 
        name="homeAddress_city" 
        v-model="data.homeAddress_city"
        label="City" 
        placeholder="City"
       />
       <base-input 
         class="col-md-4" 
         name="homeAddress_stateProvince"
         v-model="data.homeAddress_stateProvince"
         type="text" 
         label=" State / Province" 
         placeholder=" State / Province"
        />
        <base-input
          class="col-md-4"
          name="homeAddress_postalCode"
          v-model="data.homeAddress_postalCode"
          label="CEP / ZIP"
          placeholder="CEP / ZIP"
        />
      </div>
      <div class="form-row">
        <base-input
          class="col-md-4"
          name="mothersName"
          v-model="data.mothersName"
          type="text"
          label="Mother's Name"
          placeholder="Mother's Name"
        />
        <base-input
          class="col-md-4"
          name="fathersName"
          v-model="data.fathersName"
          type="text"
          label="Father's Name"
          placeholder="Father's Name"
        />
        <base-input
          class="col-md-4"
          name="maritalStatus"
          v-model="data.maritalStatus"
          type="text"
          label="Marital Status"
          placeholder="Marital Status"
        >
          <select 
           name="maritalStatus" 
           id="inputState" 
           class="form-control">
            <option selected>Choose...</option>
            <option>Single</option>
            <option>Married</option>
            <option>Divorced</option>
          </select>
        </base-input>
      </div>
      <div class="form-row">
        <base-input 
         class="col-md-3" 
         name="rgDL" 
         v-model="data.rgDL"
         type="text" 
         label="RG / DL" 
         placeholder="RG / DL"
        />
        <base-input
          class="col-md-3"
          name="expeditor"
          v-model="data.expeditor"
          type="text"
          label="Expeditor"
          placeholder="Expeditor"
        />
        <base-input
          class="col-md-3"
          name="expeditionDate"
          v-model="data.expeditionDate"
          type="text"
          label="Expedition Date"
          placeholder="Expedition Date"
        />
        <base-input 
         class="col-md-3" 
         name="cpf" 
         v-model="data.cpf"
         type="text" 
         label="CPF" 
         placeholder="CPF"
        />
      </div>
      <br>
      <h2> <span> Company Information </span> </h2>
      <div class="form-row">
        <base-input
          class="col-md-4"
          name="startDate"
          v-model="data.startDate"
          type="text"
          label="Start Date"
          placeholder="MM/DD/YYYY"
        />
        <base-input
          class="col-md-4"
          name="endDate"
          v-model="data.endDate"
          type="text"
          label="End Date"
          placeholder="MM/DD/YYYY"
        />
        <base-input
          class="col-md-4"
          name="viviCompany"
          v-model="data.viviCompany"
          type="text"
          label="Vivi Company"
          placeholder="Vivi Company"
         >
          <select name="viviCompany" id="inputState" class="form-control">
            <option selected>Choose...</option>
            <option>ViviTech</option>
            <option>ViviPay</option>
            <option>ViviHoldings</option>
            <option>ViviFoundation</option>
            <option>ViviMobile</option>
          </select>
        </base-input>
      </div>
      <div class="form-row">
        <base-input
          class="col-md-4"
          name="department"
          v-model="data.department"
          type="text"
          label="Department"
          placeholder="Department"
        >
          <select name="department" id="inputState" class="form-control">
            <option selected>Choose...</option>
            <option>Finance</option>
            <option>Adminstrative</option>
            <option>Commercial</option>
            <option>Marketing</option>
            <option>Information Technology</option>
            <option>Operations</option>
            <option>PMO</option>
            <option>Human Resources</option>
            <option>Other</option>
          </select>
        </base-input>
        <base-input
          class="col-md-4"
          name="basedIn"
          v-model="data.basedIn"
          type="text"
          label="Based In"
          placeholder="Based In"
          >
          <select name="basedIn" id="inputState" class="form-control">
            <option selected>Choose...</option>
            <option>Aracaju</option>
            <option>Blumenau</option>
            <option>Boca Raton</option>
            <option>Maceió</option>
            <option>São Paulo</option>
            <option>Other</option>
          </select>
        </base-input>
        <base-input
          class="col-md-4" 
          name="workingClient"
          v-model="data.workingClient"
          type="text"
          label="Working Client"
          placeholder="Working Client"
        />
      </div>
      <br>
      <div class="form-check">
        <input
          class="form-check-input"
          name="cltPj"
          type="radio"
          id="clt"
          value="cltPj(notImportantField)"
          v-model="data.cltPj"
          v-on:click="hide()"
        >
        <label class="form-check-label" for="clt">
          <h4>CLT / W2 </h4>
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          name="cltPj"
          type="radio"
          id="pj"
          value="Pj(notImportantField)"
          v-model="data.cltPj"
          v-on:click="show()"
        >
        <label class="form-check-label" for="pj">
          <h4>PJ / 1099</h4>
        </label>
      </div>
      <br>
      <br>
      <br>
      <div id="showHide">
        <h2> <span> Employee Company Information - (1099 / PJ) </span></h2>
        <div class="form-row">
          <base-input 
            class="col-md-3" 
            name="razao" 
            v-model="data.razao"
            type="text" 
            label="Razão Social" 
            placeholder="Razão Social"
           />
          <base-input 
            class="col-md-3" 
            name="cnpj"
            v-model="data.cnpj" 
            type="text" 
            label="CNPJ/EIN" 
            placeholder="CNPJ/EIN"
           />
          <base-input
            class="col-md-3"
            name="nomeFantasia"
            v-model="data.nomeFantasia"
            type="text"
            label="Nome Fantasia"
            placeholder="Nome Fantasia"
          />
          <base-input
            class="col-md-3"
            name="inscricaoEstadual"
            v-model="data.inscricaoEstadual"
            type="text"
            label="Inscrição Estadual"
            placeholder="Inscrição Estadual"
          />
        </div>
        <div class="form-row">
          <base-input
            class="col-md-3"
            name="inscricaoMunicipal"
            v-model="data.inscricaoMunicipal"
            type="text"
            label="Inscrição Municipal"
            placeholder="Inscrição Municipal"
          />
          <base-input
            class="col-md-3"
            name="enderecoDaEmpresa"
            v-model="data.enderecoDaEmpresa"
            type="text"
            label="Endereço da Empresa"
            placeholder="Endereço da Empresa"
          />
          <base-input
            class="col-md-3"
            name="optante"
            v-model="data.optante"
            type="text"
            label="Optante"
            placeholder="Optante"
          />
          <base-input
            class="col-md-3"
            name="contractNumber"
            v-model="data.contractNumber"
            type="text"
            label="Contract Number"
            placeholder="Contract Number"
          />
        </div> -->

      <!-- </div> -->

      
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
        .post("http://localhost:8081/prospects", formValues)
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








