<!-- navbar logo / navbar BG / text colors / qrcode logos / qrcode color / placeholder selection for employee images -->
<template>
  <card class="employee-card">
    <form @submit.prevent="handleSubmit" enctype="multipart/form-data">
      <br>
      <h2> <span style ="margin-right: 15px;"> Employee Information* </span>
        <label class="form-check-label" for="pj">
        </label>
      </h2>
      <div class="form-row">
        <base-input
          class="col-md-4"
          name="formattedName"
          v-model="data.formattedName"
          type="text" 
          label="Full Name*"
          placeholder="Full Name"
          />
        <base-input
          class="col-md-4"
          name="firstName"
          v-model="data.firstName"
          type="text"
          label="First Name*"
          placeholder="First Name"
        />
        <base-input
          class="col-md-4"
          name="lastName"
          v-model="data.lastName"
          type="text"
          label="Last Name*"
          placeholder="Last Name"
        />
      </div>
      <div class="form-row">
        <base-input 
         class="col-md-4" 
         name="title"
         v-model="data.title"
         type="text" 
         label="Title*" 
         placeholder="Title"
        />
          
        <base-input 
         class="col-md-4" 
         name="workEmail"
         v-model="data.workEmail"
         type="email" 
         label="Work Email*" 
         placeholder=" Work Email"
        />
        <base-input
          class="col-md-4"
          name="workAddress_street"
          v-model="data.workAddress_street"
          type="text"
          label="Work Address*"
          placeholder="Work Address"
        />
      </div>
      <div class="form-row">
        <base-input 
         class="col-md-4" 
         name="workAddress_city"
         v-model="data.workAddress_city"
         type="text" 
         label="Work City*" 
         placeholder="Work City"
        />
        <base-input 
         class="col-md-4" 
         name="workAddress_stateProvince" 
         v-model="data.workAddress_stateProvince"
         label="Work State / Province*">
          <select 
           name="workAddress_stateProvince" 
           id="inputState" 
           class="form-control">
            <option selected>AL</option>
            <option>FL</option>
            <option>NY</option>
            <option>RJ</option>
            <option>SC</option>
            <option>SE</option>
            <option>SP</option>
            <option>TX</option>
            <option>Other</option>
          </select>
        </base-input>
        <base-input
          class="col-md-4"
          name="workAddress_postalCode"
          v-model="data.workAddress_postalCode"
          type="text"
          label="Work Postal Code*"
          placeholder="Work Postal Code"
        />
      </div>
      <div class="form-row">
       <base-input
          class="col-md-4"
          name="cellPhone"
          v-model="data.cellPhone"
          type="text"
          label="Cell Phone*"
          placeholder="+55 (11) 99999-8888 TYPE AS: 5511999998888"
        />
       <base-input
          class="col-md-4"
          name="workWebsite"
          v-model="data.workWebsite"
          type="text"
          label="Work Website*"
          placeholder="Work Website"
        >
        <select 
           name="workWebsite" 
           id="inputState" 
           class="form-control">
            <option selected>https://SemblanceStudios.com</option>
            <!-- <option> https://viviholdings.com/vivipay </option>
            <option> https://viviholdings.com/vivitech </option>
            <option> https://vivitech.com.br </option> 
            <option> https://vivimobile.com </option>  -->
          </select>
       </base-input>
       <base-input
          class="col-md-4"
          name="activeORinactive"
          v-model="data.activeORinactive"
          type="text"
          label="Active or Inactive*"
          placeholder="Active or Inavtive"
          >
          <select name="activeORinactive" id="inputState" class="form-control">
            <option selected>Active</option>
            <option>Inactive</option>
          </select>
        </base-input>
      </div>
      <div class="form-row">
        <base-input
          class="col-md-6"
          name="workPhone"
          v-model="data.workPhone"
          type="text"
          label="Work Phone  (Not Required)"
          placeholder="+55 (11) 99999-8888 TYPE AS: 5511999998888"
        />
        <base-input
          class="col-md-6"
          name="extenstionNumber"
          v-model="data.extenstionNumber"
          type="text"
          label="Extension Number (Not Required)"
          placeholder="ex: 3471"
        />
      </div>


      <p style ="margin-left:6px"> Employee Picture Upload* </p>
        <input 
          class="upload-file-button" 
          id="emp" 
          name="employeePic"
          type="file" 
          @change="onFileChanged"
          >
        <label for="emp">
          <i style ="margin-right:4px" id="iconChangeEMP" class="tim-icons icon-cloud-upload-94 fa-2x"></i>Choose a file
        </label>

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
        @click="onUpload" 
        class="animation-on-hover" 
        type="info" 
        native-type="Submit" >
         Add Employee
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

    let onUpload = (employeePic) => {
      const formData = new FormData()
      if (employeePic == undefined) {
         alert('Employee Picture REQUIRED! Please fix.');
      }
      else {
        formData.append('employeePic', employeePic, employeePic.name);
        return axios
          .post('http://localhost:8081/s3-upload', formData)
          .then(response => {
            console.log(response);
            return Promise.resolve(response)
          })
         .catch(error => {
           console.log(error);
           return Promise.reject(error)
         });
       }
    }
export default {
  data() {
    return {
      data: [],
    };
  },
  methods: {
    onUpload() {
      const formData = new FormData()
      formData.append('employeePic', this.employeePic, this.employeePic.name);
      return axios
        .post('http://localhost:8081/s3-upload', formData)
        .then(response => {
          console.log(response);
          return Promise.resolve(response)
        })
        .catch(error => {
          console.log(error);
          return Promise.reject(error)
        });
    },
    onFileChanged (event) {
      this.employeePic = event.target.files[0];
        if (this.employeePic !== null && 
          this.employeePic.size <= 500000) {
          console.log(this.employeePic.size)
          iconChangeEMP.classList.remove("icon-cloud-upload-94");
          iconChangeEMP.classList.add("icon-check-2");
          alert('File Uploaded..');
        } else {
          console.log(this.employeePic.size)
          alert('File Upload FAILED! Limit is 500 KB.. Please Try Again.');
        }
    },
    async handleSubmit () {
      let formValues = [];
          const inputs = document.querySelectorAll(".employee-card input, select");
          for (let input of inputs) {
               let name = input.name;
               let value = input.value;
            formValues.push({ [name]: value });
          }
      formValues = Object.assign({}, ...formValues);
      //console.log("------------data",this.data)
      this.data = formValues;

      //admin user 
      formValues.lastEditedBy = this.data.lastEditedBy;
      console.log(this.data.lastEditedBy);
      console.log('formValues.lastEditedBy');
      console.log(formValues.lastEditedBy);
      
      //picture
      let urls = await onUpload(this.employeePic);
      formValues.employeePic = urls.data.imageUrl1
      
      //error handling
      if (formValues.formattedName == "") {
        alert('Full Name is REQUIRED! Please fix.');
      } if (formValues.firstName == "") {
          alert('First Name is REQUIRED! Please fix.');
      } if (formValues.lastName == "") {
          alert('Last Name is REQUIRED! Please fix.');
      } 
      //if (formValues.title == "") {
      //     alert('Title is REQUIRED! Please fix.');
      // } if (formValues.workEmail == "") {
      //     alert('Work Email is REQUIRED! Please fix.');
      // } if (formValues.workAddress_street == "") {
      //     alert('Work Address is REQUIRED! Please fix.');
      // } if (formValues.workAddress_city == "") {
      //     alert('Work City is REQUIRED! Please fix.');
      // } if (formValues.workAddress_stateProvince == "") {
      //     alert('Work State / Province is REQUIRED! Please fix.');
      // } if (formValues.workAddress_postalCode == "") {
      //     alert('Work Postal Code is REQUIRED! Please fix.');
      // } if (formValues.workWebsite == "") {
      //     alert('Work Website is REQUIRED! Please fix.');
      // } if (formValues.cellPhone == "") {
      //     alert('Cell Phone is REQUIRED! Please fix.');
      // }
      else {
        //http://localhost:3000/clients
        //https://7olb5ali48.execute-api.us-east-1.amazonaws.com/admin/consultants
      axios
        .post("http://localhost:8081/consultants", formValues)
        .then(response => {
          console.log(response);
          alert("Thank you, Employee has been added to the Database.");
          this.$router.push('employeeList')
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
      Auth.currentUserInfo()
        .then(info => {
          var userEmail = info.attributes.email;
          var userName = info.username;
          console.log('11');
          console.log(userEmail);
          console.log(userName);  
          this.data.lastEditedBy = userName;
          console.log('lastEditedBy');
          console.log(this.data.lastEditedBy);
             
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








