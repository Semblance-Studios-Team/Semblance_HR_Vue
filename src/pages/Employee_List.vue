<template >
    <div> 
     <div>
       <div id="search">
        <base-button 
          type="button" 
          icon class="btn btn-info animation-on-hover col-md-3" 
          @click="getList"
          >
         <i class="tim-icons icon-refresh-01" size="lg"></i>
           </base-button>
           <p class="searchhover">Reset</p>
      </div>
      <div id="search">
        <base-button 
          type="button" 
          icon class="btn btn-success animation-on-hover col-md-3"  
          @click="searchList"
          >
        <i class=" tim-icons icon-zoom-split" size="lg" > </i>
       </base-button>
       <p class="searchhover">Search</p>
      </div>
      <base-input
        type="text"
        class="col-md-3 searchbar"
        placeholder="Search by Employee Name"
        id="userSearchInput"
        v-model="userSearchInput"/>
      <base-dropdown class="base-dropdown"
                      menu-classes="dropdown-black"
                      title-classes="btn btn-secondary"
                      title="Status"
                      >
          <h6 class="dropdown-header">Select Status</h6>
          <a  class="dropdown-item hoverBlue" @click="getList" >All</a>
          <a  class="dropdown-item hoverBlue" @click="searchStatusActive" >Active</a>
          <a  class="dropdown-item hoverBlue" @click="searchStatusInactive" >Inactive</a>
      </base-dropdown>       
      </div>
     <div id="main" > 
    <base-table 
    id="empTable"
    :data="info" 
    :columns="columns"  >
      <template slot="columns" > 
        <th>Full Name</th>
        <th>Work Email</th> 
        <th>Title</th>
        <th> STATUS </th>
        <th class="text-right">Actions</th>
      </template>
      <!-- v-if="
          typeof info != 'undefined' &&
          info != null &&
          info.length != null &&
          info.length > 0 "  -->
      <template
        slot-scope="{row}"
          >
       <td>
        <button  class="buttonChange" @click="(t) =>viewInfo(t)">
           {{row.formattedName }} 
        </button>
       </td>
       <td>
        <button  class="buttonChange" @click="(t) =>viewInfo(t)">
           {{row.workEmail}}
        </button>
       </td>
        <td>
         <button  class="buttonChange" @click="(t) =>viewInfo(t)">
            {{row.title}}
         </button>
        </td>
        <td >
          <button  class="buttonChange" @click="(t) =>viewInfo(t)">
            {{row.activeORinactive}}
          </button>
        </td>
        <td class="td-actions text-right">
   <!-- Delete  -->
        <div id="wrapper">
          <base-button 
            type="warning" 
            size="sm" 
            icon class="animation-on-hover"
            value="Delete"
            @click="(r) =>removeRow(r)"
            >
            <i class="tim-icons icon-simple-remove"></i>
          </base-button>
          <p class="text">Delete</p>
        </div>
         <!-- QR Code Black  -->
        <div id="wrapper">
          <base-button 
            @click="(q) =>createQRblack(q)"
            type="default" 
            size="sm" 
            icon class="animation-on-hover">
            <i class="tim-icons icon-badge"></i>
          </base-button>
         <p class="text">Black QR</p>
        </div>
        <!-- QR Code Red  -->
        <!-- <div id="wrapper">
          <base-button 
            @click="(q) =>createQRred(q)"
            type="danger" 
            size="sm" 
            icon class="animation-on-hover">
            <i class="tim-icons icon-badge"></i>
          </base-button>
         <p class="text">Red QR </p>
        </div> -->
    <!-- Employee Status --> 
        <div id="wrapper">
          <base-button 
            @click="(s) =>statusButtons(s)"
            type="success" 
            size="sm" 
            icon class="animation-on-hover"
           >
            <i class="tim-icons icon-single-02"></i>
          </base-button>
          <p class="text">Status</p>
         </div>
    <!-- Edit Employee -->
         <div id="wrapper">
          <base-button
            type="info"
            size="sm"
            icon
            class="animation-on-hover hover"
            @click="(e) =>editInfo(e)"
          >
            <i class="tim-icons icon-pencil"></i>  
          </base-button> 
           <p class="text">Edit</p>
         </div>
        </td>
      </template>
      
    </base-table>
    </div>
    <!-- employee modal -->
    <modal class="edit-modal" :show.sync="modal" :key="refreshOnExit">

      <template slot="header">
        <h1 class="modal-title">Edit Employee Information</h1>
      </template>
      
      <form role="form"  @submit="handleSubmit" enctype="multipart/form-data">

        <div class="form-row hidefromclient">
        <fieldset disabled>
         <base-input 
           class="col-md-12"
           name="consultant_id"
           label="Database ID (Disabled)" 
           v-model="infoModal.consultant_id" 
           type="text" 
         />
       </fieldset>
       <fieldset disabled>
         <base-input 
           class="col-md-12"
           name="lastEditedBy"
           label="Edited By (Disabled)" 
           v-model="infoModal.lastEditedBy"  
           type="text" 
         />
       </fieldset>
      </div>
      
        <div class="form-row">
          <base-input
            class="col-md-4"
            name="formattedName"
            v-model="infoModal.formattedName"
            type="text"
            label="Full Name"
          />
          <base-input
            class="col-md-4"
            name="firstName"
            v-model="infoModal.firstName"
            type="text"
            label="First Name"
          />
          <base-input
            class="col-md-4"
            name="lastName"
            v-model="infoModal.lastName"
            type="text"
            label="Last Name"
          />
        </div>





       <div class="form-row">
         <base-input 
           class="col-md-4" 
           name="title"
           v-model="infoModal.title"
           type="text" 
           label="Title" 
          />
          <base-input 
           class="col-md-4" 
           name="workEmail"
           v-model="infoModal.workEmail"
           type="email" 
           label="Work Email" 
          />
          <base-input 
           class="col-md-4" 
           name="workAddress_street"
           v-model="infoModal.workAddress_street"
           type="text" 
           label="Work Address" 
          />
        </div>
        <div class="form-row">
         <base-input 
           class="col-md-4" 
           name="workAddress_city"
           v-model="infoModal.workAddress_city"
           type="text" 
           label="Work City" 
          />
          <base-input 
         class="col-md-4" 
         name="workAddress_stateProvince" 
         v-model="infoModal.workAddress_stateProvince"
         label="Work State / Province*">
          <select 
           name="workAddress_stateProvince" 
           id="inputState" 
           class="form-control">
            <option selected>
              {{infoModal.workAddress_stateProvince}} 
            </option>

             <option >AK</option>
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
           name="workAddress_postalCode"
           v-model="infoModal.workAddress_postalCode"
           type="text" 
           label="Work Postal Code" 
          />
        </div>
        <div class ="form-row">
        <base-input
           class="col-md-4"
           name="workWebsite"
           v-model="infoModal.workWebsite"
           type="text"
           label="Work Websites"
           placeholder="Work Website"
         >
         <select 
           name="workWebsite" 
           id="inputState" 
           class="form-control">
            <option selected>
            {{infoModal.workWebsite}} 
            </option>
            <option> https://SemblanceStudios.com </option>
            <!-- <option> https://viviholdings.com/vivipay </option>
            <option> https://viviholdings.com/vivitech </option>
            <option> https://vivitech.com.br </option> 
            <option> https://vivimobile.com </option>  -->
          </select>
         </base-input>
          <base-input
           class="col-md-4"
           name="cellPhone"
           v-model="infoModal.cellPhone"
           type="text"
           label="Cell Phone"
          />
          <base-input
            class="col-md-4"
            name="activeORinactive"
            v-model="infoModal.activeORinactive"
            type="text"
            label="Status"
          >
           <select 
               name="activeORinactive" 
               class="form-control"
               id="inputState">
             <option selected>
                 {{infoModal.activeORinactive}}             
             </option>
             <option>Active</option>
             <option>Inactive</option>
           </select>
        </base-input>
       </div>
        <div class ="form-row">
          <base-input 
           class="col-md-6" 
           name="workPhone"
           v-model="infoModal.workPhone"
           type="text" 
           label="Work Phone" 
          />
        <base-input
          class="col-md-6"
          name="extenstionNumber"
          v-model="infoModal.extenstionNumber"
          type="text"
          label="Extension Number"
        />
       </div>
      
       <br>
      <h5>Employee Picture Re-upload</h5>
       <div class="form-row">
        <input 
          class="upload-file-button" 
          id="empPicID" 
          name="employeePic"
          type="file" 
          @change="onFileChanged"
          >
        <label for="empPicID">
          <i style ="margin-right:4px" id="iconChangeEMP" class="tim-icons icon-cloud-upload-94 fa-2x"></i>Choose a file
        </label>
      </div>

      <br>
      <br>
      <!--
    <h5>Edit Employee Information</h5>
      <div class="form-row">
       <base-input 
        class="col-md-4" 
        name="personalEmail" 
        v-model="infoModal.personalEmail"
        label="Personal Email" 
       />
       <base-input 
        class="col-md-4" 
        name="dob" 
        v-model="infoModal.dob"
        label="Date of Birth" 
        placeholder="MM/DD/YYYY"
       />
        <base-input
          class="col-md-4"
          name="homeAddress_street"
          v-model="infoModal.homeAddress_street"
          label="Home Address"
        />
      </div>
      <div class="form-row">
        <base-input 
        class="col-md-4" 
        name="homeAddress_city" 
        v-model="infoModal.homeAddress_city"
        label="City" 
       />
        <base-input 
         class="col-md-4" 
         name="homeAddress_stateProvince"
         v-model="infoModal.homeAddress_stateProvince"
         type="text" 
         label=" State / Province" 
        />
        <base-input
          class="col-md-4"
          name="homeAddress_postalCode"
          v-model="infoModal.homeAddress_postalCode"
          label="CEP / ZIP"
        />
      </div>
      <div class="form-row">
        <base-input
          class="col-md-4"
          name="mothersName"
          v-model="infoModal.mothersName"
          type="text"
          label="Mothers Name"
        />
        <base-input
          class="col-md-4"
          name="fathersName"
          v-model="infoModal.fathersName"
          type="text"
          label="Fathers Name"
        />
        <base-input
          class="col-md-4"
          name="maritalStatus"
          v-model="infoModal.maritalStatus"
          type="text"
          label="Marital Status"
        >
          <select 
           name="maritalStatus" 
           id="inputState" 
           class="form-control">
            <option selected>
             {{infoModal.maritalStatus}}
            </option>
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
         v-model="infoModal.rgDL"
         type="text" 
         label="RG / DL" 
        />
        <base-input
          class="col-md-3"
          name="expeditor"
          v-model="infoModal.expeditor"
          type="text"
          label="Expeditor"
        />
        <base-input
          class="col-md-3"
          name="expeditionDate"
          v-model="infoModal.expeditionDate"
          type="text"
          label="Expedition Date"
        />
        <base-input 
         class="col-md-3" 
         name="cpf" 
         v-model="infoModal.cpf"
         type="text" 
         label="CPF" 
        />
      </div>
      <br><br>
      <h5> Edit Company Information </h5>
       <div class="form-row">
        <base-input
          class="col-md-4"
          name="startDate"
          v-model="infoModal.startDate"
          type="text"
          label="Start Date"
          placeholder="MM/DD/YYYY"
        />
        <base-input
          class="col-md-4"
          name="endDate"
          v-model="infoModal.endDate"
          type="text"
          label="End Date"
          placeholder="MM/DD/YYYY"
        />
        <base-input
          class="col-md-4"
          name="viviCompany"
          v-model="infoModal.viviCompany"
          type="text"
          label="Vivi Company"
         >
          <select name="viviCompany" id="inputState" class="form-control">
            <option selected>
              {{infoModal.viviCompany}}
            </option>
            <option>ViviTech</option>
            <option>ViviPay</option>
            <option>ViviHoldings</option>
          </select>
        </base-input>
      </div>
      <div class="form-row">
        <base-input
          class="col-md-4"
          name="department"
          v-model="infoModal.department"
          type="text"
          label="Department"
        >
          <select name="department" id="depo" class="form-control">
            <option selected>
              {{infoModal.department}}
            </option>
            <option>Finance</option>
            <option>Adminstrative</option>
            <option>Commercial</option>
            <option>Marketing</option>
            <option>Information Technology</option>
            <option>Operations</option>
            <option>PMO</option>
            <option>Human Resources</option>
          </select>
        </base-input>
        <base-input
          class="col-md-4"
          name="basedIn"
          v-model="infoModal.basedIn"
          type="text"
          label="Based In"
          >
          <select 
             name="basedIn" 
             id="inputState" 
             class="form-control">
            <option selected>
              {{infoModal.basedIn}}
            </option>
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
          v-model="infoModal.workingClient"
          type="text"
          label="Working Client"
        />
      </div>
       <div class="form-row hidefromclient">
        <fieldset disabled>
         <base-input 
           class="col-md-12"
           name="consultant_id"
           label="Database ID (Disabled)" 
           v-model="infoModal.consultant_id" 
           type="text" 
         />
       </fieldset>
      </div>
      <br>
      <br>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="cltPj"
          id="clt"
          value="cltPj(notImportantField)"
          v-model="infoModal.cltPj"
          v-on:click="hide()"
        >
        <label class="form-check-label" for="clt">
          <h5>CLT / W2</h5>
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          name="cltPj"
          type="radio"
          id="pj"
          value="Pj(notImportantField)"
          v-model="infoModal.cltPj"
          v-on:click="show()" 
        >
        <label class="form-check-label" for="pj">
          <h5>PJ / 1099</h5>
        </label>
      </div>
      <br><br>
        <div id="showHide">
        <h5> Edit Employee Company Information (1099 / PJ) </h5>
        <div class="form-row">
          <base-input 
            class="col-md-3" 
            name="razao" 
            v-model="infoModal.razao"
            type="text" 
            label="Razão Social" 
           />
          <base-input 
            class="col-md-3" 
            name="cnpj"
            v-model="infoModal.cnpj" 
            type="text" 
            label="CNPJ/EIN" 
           />
          <base-input
            class="col-md-3"
            name="nomeFantasia"
            v-model="infoModal.nomeFantasia"
            type="text"
            label="Nome Fantasia"
          />
          <base-input
            class="col-md-3"
            name="inscricaoEstadual"
            v-model="infoModal.inscricaoEstadual"
            type="text"
            label="Inscrição Estadual"
          />
        </div>
        <div class="form-row">
          <base-input
            class="col-md-3"
            name="inscricaoMunicipal"
            v-model="infoModal.inscricaoMunicipal"
            type="text"
            label="Inscrição Municipal"
          />
          <base-input
            class="col-md-3"
            name="enderecoDaEmpresa"
            v-model="infoModal.enderecoDaEmpresa"
            type="text"
            label="Endereço da Empresa"
          />
          <base-input
            class="col-md-3"
            name="optante"
            v-model="infoModal.optante"
            type="text"
            label="Optante"
          />
          <base-input
            class="col-md-3"
            name="contractNumber"
            v-model="infoModal.contractNumber"
            type="text"
            label="Contract Number"
          />
        </div> -->


      <!-- </div> -->

       


      </form>
      <template slot="footer">
        <base-button 
          type="secondary" 
          @click="modal = false"
          class="animation-on-hover" 
          >
            Close
        </base-button>
        <base-button 
          type="info" 
          v-model="info"
          @click="handleSubmit"
          class="animation-on-hover" 
         
          >
           Save changes
        </base-button>
      </template>
    </modal>
    <!-- view modal -->
   <modal-view class="view-modal" :show.sync="modalView">
    <div style="border-bottom:1px solid black;">
     <h1 style="color: black">Employee Information <span> 
       <h5 style="color: black; float: right; margin-top: 10px;">Last Edited By: {{infoModal.lastEditedBy}} On {{infoModal.timeStampEdit}}</h5>
      </span>
     </h1>
     </div>
    <form role="form" >
        <div class="form-row" style="">
          <h4  class="col-md-2 h4ViewModals"> Full Name: </h4>
          <h5
            class="col-md-4 modalView h5ViewModals"
            v-model="infoModal.formattedName" 
          > 
           {{infoModal.formattedName}}
          </h5>
        </div>
        <div class="form-row">
          <h4 class="col-md-2 h4ViewModals"> First Name: </h4>
          <h5
            class="col-md-4 h5ViewModals"
            v-model="infoModal.firstName"
          >
           {{infoModal.firstName}}
          </h5>
        </div>
        <div class="form-row">
          <h4 class="col-md-2 h4ViewModals"> Last Name: </h4>
          <h5
            class="col-md-4 h5ViewModals"
            v-model="infoModal.lastName"
          >
           {{infoModal.lastName}}
          </h5>
        </div>
      <div class="form-row">
        <h4 class="col-md-2 h4ViewModals"> Title: </h4>
         <h5 
           class="col-md-4 h5ViewModals" 
           v-model="infoModal.title"
         >
           {{infoModal.title}}
         </h5>
       </div>
       <div class="form-row">
          <h4 class="col-md-2 h4ViewModals"> Work Email: </h4>
          <h5
           class="col-md-4 h5ViewModals" 
           v-model="infoModal.workEmail"
          >
            {{infoModal.workEmail}}
          </h5>
        </div>

           <!-- image s3 url -->
         <!--  <h5 class="col-md-2"> Picture URL: </h5>
        <h5 class="col-md-10" v-model="infoModal.employeePic">
            {{infoModal.employeePic}}
        </h5> -->
        <!-- <h5 class="col-md-2"> Picture: </h5> -->
        <div style="float: right;" class="form-row">
        <div 
            style="margin-right: 70px; margin-bottom:10px; margin-top: -300px"
            class="">
             <img 
               class="" 
               width="300"
               height="285"  
               id="employeeImageCan"
               style="border-radius: 150px;">
        </div>
          <canvas 
            id="employeeCanvas" 
            width="100" 
            height="100" 
            style="border:1px solid #d3d3d3; display: none;">
          </canvas>
        </div>
        <hr style="margin-top: 2px;">




        <div class="form-row">
          <h4 class="col-md-2 h4ViewModals"> Work Street: </h4>
          <h5 
           class="col-md-4 h5ViewModals" 
           v-model="infoModal.workAddress_street"
          >
            {{infoModal.workAddress_street}}
          </h5>

           <h4 class="col-md-2 h4ViewModals"> Work Website: </h4>
         <h5 
           class="col-md-4 h5ViewModals"
           v-model="infoModal.workWebsite"
         >
           {{infoModal.workWebsite}} 
         </h5>

        </div>


        <div class="form-row">
        <h4 class="col-md-2 h4ViewModals"> Work City: </h4>
         <h5 
           class="col-md-4 h5ViewModals" 
           v-model="infoModal.workAddress_city" 
          >
            {{infoModal.workAddress_city}}
          </h5>
           <h4  class="col-md-2 h4ViewModals"> Cell Phone: </h4>
          <h5
           class="col-md-4 h5ViewModals"
           v-model="infoModal.cellPhone"
          >
            {{infoModal.cellPhone}}
          </h5>
        </div>
        <div class="form-row">
          <h4 class="col-md-2 h4ViewModals"> Work State: </h4>
          <h5 
           class="col-md-4 h5ViewModals" 
           v-model="infoModal.workAddress_stateProvince"
          >
            {{infoModal.workAddress_stateProvince}}
          </h5>

          <h4 class="col-md-2 h4ViewModals"> Status: </h4>
          <h5
           class="col-md-4 h5ViewModals"
           v-model="infoModal.cellactiveORinactivePhone"
          >
            {{infoModal.activeORinactive}}
          </h5>
          </div>
          <div class="form-row">
          <h4 class="col-md-2 h4ViewModals"> Work Postal Code: </h4>
          <h5 
           class="col-md-10 h5ViewModals" 
           v-model="infoModal.workAddress_postalCode"
          >
            {{infoModal.workAddress_postalCode}}
          </h5>
        </div>
        <!-- <div class ="form-row">
          <h4 style="color: black;" class="col-md-2"> Work Phone: </h4>
          <h5 
           class="col-md-10" 
           v-model="infoModal.workPhone"
           style="margin-top: auto;"
          >
            {{infoModal.workPhone}}
          </h5>
          <h4 style="color: black;" class="col-md-2"> Extension Number: </h4>
          <h5
            class="col-md-10"
            v-model="infoModal.extenstionNumber"
            style="margin-top: auto;"
          >
            {{infoModal.extenstionNumber}}
          </h5>
       </div> -->


      <!-- <br> -->
    <div id="toggle">
     <h5 style="margin-bottom: 20px; border-bottom:1px solid black;">Employee Information Continued</h5>
      <div class="form-row">
        <h5 class="col-md-2"> Personal Email: </h5>
         <h5 
           class="col-md-10" 
           v-model="infoModal.personalEmail" 
          >
            {{infoModal.personalEmail}}
          </h5>
          <h5 class="col-md-2"> Date of Birth: </h5>
          <h5 
           class="col-md-10" 
           v-model="infoModal.dob"
          >
            {{infoModal.dob}}
          </h5>
          <h5 class="col-md-2"> Home Address: </h5>
          <h5 
           class="col-md-10" 
           v-model="infoModal.homeAddress_street"
          >
            {{infoModal.homeAddress_street}}
          </h5>
      </div>
      <div class="form-row">
        <h5 class="col-md-2"> Home City: </h5>
         <h5 
           class="col-md-10" 
           v-model="infoModal.homeAddress_city" 
          >
            {{infoModal.homeAddress_city}}
          </h5>
          <h5 class="col-md-2"> State / Province: </h5>
          <h5 
           class="col-md-10" 
           v-model="infoModal.homeAddress_stateProvince"
          >
            {{infoModal.homeAddress_stateProvince}}
          </h5>
          <h5 class="col-md-2"> Home Postal Code: </h5>
          <h5 
           class="col-md-10" 
           v-model="infoModal.homeAddress_postalCode"
          >
            {{infoModal.homeAddress_postalCode}}
          </h5>
      </div>
      <div class="form-row">
        <h5 class="col-md-2"> Mothers Name: </h5>
         <h5 
           class="col-md-10" 
           v-model="infoModal.mothersName" 
          >
            {{infoModal.mothersName}}
          </h5>
          <h5 class="col-md-2"> Fathers Name: </h5>
          <h5 
           class="col-md-10" 
           v-model="infoModal.fathersName"
          >
            {{infoModal.fathersName}}
          </h5>
          <h5 class="col-md-2"> Marital Status: </h5>
          <h5 
           class="col-md-10" 
           v-model="infoModal.maritalStatus"
          >
            {{infoModal.maritalStatus}}
          </h5>
      </div>
      <div class="form-row">
        <h5 class="col-md-2"> RG / DL: </h5>
         <h5 
           class="col-md-10" 
           v-model="infoModal.rgDL" 
          >
            {{infoModal.rgDL}}
          </h5>
          <h5 class="col-md-2"> Expeditor: </h5>
          <h5 
           class="col-md-10" 
           v-model="infoModal.expeditor"
          >
            {{infoModal.expeditor}}
          </h5>
          <h5 class="col-md-2"> Expedition Date: </h5>
          <h5 
           class="col-md-10" 
           v-model="infoModal.expeditionDate"
          >
            {{infoModal.expeditionDate}}
          </h5>
      </div>
      <div class="form-row">
        <h5 class="col-md-2"> CPF: </h5>
         <h5 
           class="col-md-10" 
           v-model="infoModal.cpf" 
          >
            {{infoModal.cpf}}
          </h5>
          <h5 class="col-md-2"> Start Date: </h5>
          <h5 
           class="col-md-10" 
           v-model="infoModal.startDate"
          >
            {{infoModal.startDate}}
          </h5>
          <h5 class="col-md-2"> End Date: </h5>
          <h5 
           class="col-md-10" 
           v-model="infoModal.endDate"
          >
            {{infoModal.endDate}}
          </h5>
      </div>
      <div class="form-row">
        <h5 class="col-md-2"> ViVi Company: </h5>
         <h5 
           class="col-md-10" 
           v-model="infoModal.viviCompany" 
          >
            {{infoModal.viviCompany}}
          </h5>
          <h5 class="col-md-2"> Department: </h5>
          <h5 
           class="col-md-10" 
           v-model="infoModal.department"
          >
            {{infoModal.department}}
          </h5>
          <h5 class="col-md-2"> Based In: </h5>
          <h5 
           class="col-md-10" 
           v-model="infoModal.basedIn"
          >
            {{infoModal.basedIn}}
          </h5>
      </div>
      <div class="form-row">
        <h5 class="col-md-2"> Working Client: </h5>
         <h5 
           class="col-md-10" 
           v-model="infoModal.workingClient" 
          >
            {{infoModal.workingClient}}
          </h5>
      </div>
      <br>
      <h5 style="margin-bottom: 20px; border-bottom:1px solid black;">(1099 / PJ) Employee Information</h5>
      <div class="form-row">
        <h5 class="col-md-2"> Razão Social: </h5>
         <h5 
           class="col-md-10" 
           v-model="infoModal.razao" 
          >
            {{infoModal.razao}}
          </h5>
          <h5 class="col-md-2"> CNPJ/EIN: </h5>
          <h5 
           class="col-md-10" 
           v-model="infoModal.cnpj"
          >
            {{infoModal.cnpj}}
          </h5>
          <h5 class="col-md-2"> Nome Fantasia: </h5>
          <h5 
           class="col-md-10" 
           v-model="infoModal.nomeFantasia"
          >
            {{infoModal.nomeFantasia}}
          </h5>
      </div>
      <div class="form-row">
        <h5 class="col-md-2"> Inscrição Estadual: </h5>
         <h5 
           class="col-md-10" 
           v-model="infoModal.inscricaoEstadual" 
          >
            {{infoModal.inscricaoEstadual}}
          </h5>
          <h5 class="col-md-2"> Inscrição Municipa: </h5>
          <h5 
           class="col-md-10" 
           v-model="infoModal.inscricaoMunicipal"
          >
            {{infoModal.inscricaoMunicipal}}
          </h5>
          <h5 class="col-md-2"> Endereço da Empresa: </h5>
          <h5 
           class="col-md-10" 
           v-model="infoModal.endereçoDaEmpresa"
          >
            {{infoModal.endereçoDaEmpresa}}
          </h5>
      </div>
      <div class="form-row">
        <h5 class="col-md-2"> optante: </h5>
         <h5 
           class="col-md-10" 
           v-model="infoModal.optante" 
          >
            {{infoModal.optante}}
          </h5>
          <h5 class="col-md-2"> Contract Number: </h5>
          <h5 
           class="col-md-10" 
           v-model="infoModal.contractNumber"
          >
            {{infoModal.contractNumber}}
          </h5>
      </div>
    </div>
  </form>
     <template slot="footer">
        <base-button 
          type="secondary" 
          @click="modalView = false"
          class="animation-on-hover" 
          >
            Close
        </base-button>
        <base-button 
          type="info" 
          @click="showORhideToggle"
          class="animation-on-hover" 
         >
           Show / Hide Information
        </base-button>
      </template>
   </modal-view>
<!-- qrcode canvas -->
   <img 
     id="logoRed" 
     src="img/icon.png"
     style="display: none;"
    >
    <img 
     id="logoBlack" 
     src="img/iconBlack.png"
     style="display: none;"
    >
    <canvas 
      id="QRcanvas" 
      width="400" 
      height="400" 
      style="border:1px solid #d3d3d3; display: none;">
    </canvas>
    
  </div>
</template>
<script>
    let onReUpload = (employeePic) => {
      const formData = new FormData()
      if (employeePic !== undefined)  {
         formData.append('employeePic', employeePic, employeePic.name);
         //http://localhost:8081/s3-upload
         return axios
           .post('https://dad59dxvm7.execute-api.us-east-1.amazonaws.com/admin/s3-upload', formData)
           .then(response => {
             console.log(response);
             return Promise.resolve(response)
           })
           .catch(error => {
             console.log(error);
             return Promise.reject(error)
        });
      } else {
         return
      }
   }

import { props, BaseTable } from "@/components";
import { Modal } from "@/components";
import { ModalView } from "@/components";
import axios from "axios";
import bodyParser from "body-parser";
import QRCode from "qrcode";
import vCardsJS from "vcards-js";
import { saveAs } from 'file-saver';
import BootstrapVue from 'bootstrap-vue';
import Vue from 'vue';
import { EventBus } from '../main';


// Search Bar fucntionality

// Log-in Authentication 
import { components } from 'aws-amplify-vue';
import { AmplifyEventBus } from 'aws-amplify-vue';
import { Auth } from 'aws-amplify';

export default {
  components: {
    BaseTable,
    Modal,
    ModalView,
    
  },
  data() {
    return {
      columns: [],
      info: [],  
      infoModal: "",
      modal: false,
      modalView: false,
      refreshOnExit: 0,
      error: "",
      userEmail: null,
      signedIn: false,
      userSearchInput: null,
      searchResult: [],
      status: '',
      toggleAorI:true
    }  
  },
  computed: {  
  },
  methods: {
    async getList() {
      try { 
        //http://localhost:8081/consultants/list
        //https://dad59dxvm7.execute-api.us-east-1.amazonaws.com/admin/consultants
        const list = await axios.get(`https://dad59dxvm7.execute-api.us-east-1.amazonaws.com/admin/consultants`);
        this.info = list.data;
        console.log(this.info);
        this.info.sort(function(a, b) {
            var nameA = a.formattedName.toUpperCase(); 
            var nameB = b.formattedName.toUpperCase(); 
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            // names must be equal
            return 0;
          });
      } catch (e) {
        console.log(`getList`, e);
        if (e.response.status === 400) {
          this.error = e.response.data.message;
        }
      }
    },
    searchList() {
      // let str = JSON.stringify(this.userSearchInput);
      let myNewArray = [];
       myNewArray = this.info;
      do {
        console.log(this.userSearchInput)
         var searchResult = myNewArray.filter(myNewArray => !userSearchInput || myNewArray.formattedName.toLowerCase().includes(this.userSearchInput.toLowerCase()))
          console.log(searchResult);
          this.info = searchResult; 
       } while (this.userSearchInput = '')
      

    },
    async searchStatusActive() {
         await this.getList();
         // Creates new array from info [] in data return     
        let myStatusArrayActive = [];
        myStatusArrayActive = this.info; 
        this.status = "Active"
       
        // Filter through new array with employee list for active users
        if ( this.status = "Active") {
          var statusResultActive = myStatusArrayActive.filter(myStatusArrayActive => !this.status || myStatusArrayActive.activeORinactive.includes(this.status))
       // sets info array to filtered active users list      
          this.info = statusResultActive;
          // console.log(statusResultActive)
          
        }

       },
    async searchStatusInactive() {
     
        await this.getList();
      // Creates new array from info [] in data return
        let myStatusArrayInactive = [];
        myStatusArrayInactive = this.info;
      // Sets status to inactive from an empty string  
        this.status = "inactive"
       
      // Filter through new array  for inactive users
        if ( this.status = "inactive") {
          var statusResultInactive = myStatusArrayInactive.filter(myStatusArrayInactive => !this.status || myStatusArrayInactive.activeORinactive.toLowerCase().includes(this.status.toLowerCase()))
      // sets info array to filtered inactive users list
          this.info = statusResultInactive;
          // console.log(statusResultInactive)
        }
          
       },
    editInfo(e) {
      const tr = e.target.parentNode.parentNode.parentNode.parentNode.getAttribute("id");
      console.log(tr);
      this.infoModal = this.info[tr];
      console.log('unique array', this.infoModal);
      this.modal = true;
    },
    viewInfo(t) {
      const rw = t.target.parentNode.parentNode.getAttribute("id");
      console.log(rw)
      this.infoModal = this.info[rw];
      console.log(this.infoModal)
         const employeePicture = this.infoModal.employeePic;
         const canvas = document.getElementById("employeeCanvas");
         const ctx = canvas.getContext("2d");
         const img = document.getElementById("employeeImageCan");
         img.src = employeePicture;
         console.log(img.src);
         console.log(typeof img.src);
         ctx.drawImage(img,0,0);  
      this.modalView = true;
    },
    
    async removeRow(r) {
      const deleteRow = r.target.parentNode.parentNode.parentNode.parentNode.getAttribute("id");
      this.infoModal = this.info[deleteRow];
       try {
       if (confirm('Do you want to delete this Employee?')) {
        let rowId = r.target.parentNode.parentNode.parentNode.parentNode;
            rowId.parentNode.removeChild(rowId);
            console.log('rowId');
            console.log(rowId);
            //https://7olb5ali48.execute-api.us-east-1.amazonaws.com/admin/consultants
            //const myRowPost = await axios.post("http://localhost:8081/consultants/remove", this.infoModal)
            console.log('this.infoModal.consultant_id');
            console.log(this.infoModal.consultant_id);
            //added new global delete method
            var entityType = 'consultants';
            crudGlobal.deleteEntity(entityType, entityId, index, rowHtml); // remove last 2 parameters ?
            // const myRowDelete = await axios.delete(
            // `https://dad59dxvm7.execute-api.us-east-1.amazonaws.com/admin/consultants/${this.infoModal.consultant_id}`)
            // //'http://localhost:8081/consultants/:id', this.infoModal)
         } else {
            return 0;
         }
       } catch (e) {
        console.log(`Delete Row Error =`, e);
        if (e.response.status === 400) {
          this.error = e.response.data.message;
        }
      } 
    },
   // https://7olb5ali48.execute-api.us-east-1.amazonaws.com/admin/vcards
   //https://7olb5ali48.execute-api.us-east-1.amazonaws.com/admin/vc-upload
    async createQRred(q) {
       let uniqueRow = q.target.parentNode;
       const qrCodeLocation = q.target.parentNode.parentNode.parentNode.parentNode.getAttribute("id");
       this.infoModal = this.info[qrCodeLocation];
       try { 
        //http://localhost:8081/vcards
        //https://dad59dxvm7.execute-api.us-east-1.amazonaws.com/admin/vcards
        const new_card = await axios.post("https://dad59dxvm7.execute-api.us-east-1.amazonaws.com/admin/vcards", this.infoModal)
        var file = new File( [new_card.data], "vcard", {type: "text/plain;charset=utf-8"});
        const formData = new FormData()
        if (file !== undefined) {
        formData.append("vcard", file, file.name);
        console.log(formData);
        //http://localhost:8081/vc-upload
        //https://dad59dxvm7.execute-api.us-east-1.amazonaws.com/admin/vc-upload
        let vcf = await axios.post("https://dad59dxvm7.execute-api.us-east-1.amazonaws.com/admin/vc-upload", formData)
        let url = await QRCode.toCanvas(vcf.data.qrUrl1, {  
              errorCorrectionLevel: 'Q',
               margin: 1,
               color: {
                 dark:  '#ffffff',  // white pixels
                 light: '#E4332D', // red background
               }
            })
            var canvas = document.getElementById("QRcanvas");
            var ctx = canvas.getContext("2d");
            var img = document.getElementById("logoRed");
            ctx.drawImage(url, 30, 30, 325, 325); 
            ctx.drawImage(img, 150, 150, 90, 90);     
            var download = document.createElement('a');
            download.href = canvas.toDataURL("image/png") 
            download.download = this.infoModal.formattedName;
            download.click();
         }
       }  catch (e) {
          console.log(`vcard error / Front end =`, e);
      }     
    },
    async createQRblack(q) {
      let uniqueRow = q.target.parentNode;
       const qrCodeLocation = q.target.parentNode.parentNode.parentNode.parentNode.getAttribute("id");
       this.infoModal = this.info[qrCodeLocation];
       try { 
        const new_card = await axios.post("https://dad59dxvm7.execute-api.us-east-1.amazonaws.com/admin/vcards", this.infoModal)
        var file = new File( [new_card.data], "vcard", {type: "text/plain;charset=utf-8"});
        const formData = new FormData()
        if (file !== undefined) {
        formData.append("vcard", file, file.name);
        let vcf = await axios.post("https://dad59dxvm7.execute-api.us-east-1.amazonaws.com/admin/vc-upload", formData)
        let url = await QRCode.toCanvas(vcf.data.qrUrl1, {  
              errorCorrectionLevel: 'Q',
               margin: 1,
               color: {
                 dark:  '#000000',  // black pixels
                 light: '#ffffff', // white background
               }
            })
            var canvas = document.getElementById("QRcanvas");
            var ctx = canvas.getContext("2d");
            var img = document.getElementById("logoBlack");
            ctx.drawImage(url, 30, 30, 325, 325); 
            ctx.drawImage(img, 150, 150, 90, 90);     
            var download = document.createElement('a');
            download.href = canvas.toDataURL("image/png") 
            download.download = this.infoModal.formattedName;
            download.click();
         }
       }  catch (e) {
          console.log(`vcard error / Front end =`, e);
      } 
    },
    onReUpload() {
      const formData = new FormData()
      if (this.employeePic !== undefined) {
        formData.append('employeePic', this.employeePic, this.employeePic.name);
        return axios
          .post('https://dad59dxvm7.execute-api.us-east-1.amazonaws.com/admin/s3-upload', formData)
          .then(response => {
            console.log(response);
            return Promise.resolve(response)
          })
          .catch(error => {
            console.log(error);
            return Promise.reject(error)
          });
      }
      else {
        return
      }
    },
    async handleSubmit () {
      let formValues = [];
          const inputs = document.querySelectorAll(".edit-modal input, select");
          for (let input of inputs) {
               let name = input.name;
               let value = input.value;
            formValues.push({ [name]: value });
          }
          formValues = Object.assign({}, ...formValues);
          this.data = formValues;
          console.log(formValues)
         
         //admin user 
         // attach current admin user to form and add time stamp
          await Auth.currentUserInfo()
          .then(info => {
            var userEmail = info.attributes.email;
            var userName = info.username;
            console.log('12');
            //console.log(userEmail);
            console.log(userName);  
            this.data.lastEditedBy = userName;
            formValues.lastEditedBy = this.data.lastEditedBy;
            console.log('lastEditedBy');
            console.log(formValues.lastEditedBy);
            //add edit timestamp
            var timestamp = Number(new Date());
            const date = new Date(timestamp).toDateString();
            this.data.timeStampEdit = date;
            
         });
         console.log('results');
         console.log(this.data.timeStampEdit);
         console.log(this.data.lastEditedBy);

      //picture
         let urls = await onReUpload( this.employeePic);
             if (this.employeePic !== undefined) {
                 let urls = await onReUpload( this.employeePic);
                 formValues.employeePic = urls.data.imageUrl1;
                 this.infoModal.employeePic = formValues.employeePic;
             } 
              if (this.employeePic == undefined) { 
                  formValues.employeePic = this.infoModal.employeePic;
              }
            var string = "";
            if (formValues.formattedName == "") {
                alert('Full Name is REQUIRED! Please fix.');
                string ="string";
                console.log('STRING 1')
             } if (formValues.firstName == "") {
                alert('First Name is REQUIRED! Please fix.');
               string ="string";
               console.log('STRING 2')
             } if (formValues.lastName == "") {
                alert('Last Name is REQUIRED! Please fix.');
                string ="string";
                console.log('STRING 3')
             }  

             // if (formValues.title == "") {
             //    alert('Title is REQUIRED! Please fix.');
             //    string ="string";
             //    console.log('STRING 4')
             // } if (formValues.workEmail == "") {
             //    alert('Work Email is REQUIRED! Please fix.');
             //    string ="string";
             //    console.log('STRING 5')
             // }  if (formValues.workAddress_street == "") {
             //    alert('Work Address is REQUIRED! Please fix.');
             //    string ="string";
             //    console.log('STRING 6')
             // }  if (formValues.workAddress_city == "") {
             //     alert('Work City is REQUIRED! Please fix.');
             //     string ="string";
             //    console.log('STRING 7')
             // }  if (formValues.workAddress_stateProvince == "") {
             //    alert('Work State / Province is REQUIRED! Please fix.');
             //    string ="string";
             //    console.log('STRING 8')
             // }  if (formValues.workAddress_postalCode == "") {
             //    alert('Work Postal Code is REQUIRED! Please fix.');
             //    string ="string";
             //    console.log('STRING 9')
             // }  if (formValues.workWebsite == "") {
             //     alert('Work Website is REQUIRED! Please fix.');
             //     string ="string";
             //    console.log('STRING 10')
             // }  if (formValues.cellPhone == "") {
             //    alert('Cell Phone is REQUIRED! Please fix.');
             //    string ="string";
             //    console.log('STRING 11')
             // }
             // with image
      if (string !== "string" && this.employeePic !== undefined){
          let empPicEdit = await axios
             .put(`https://dad59dxvm7.execute-api.us-east-1.amazonaws.com/admin/consultants/${this.data.consultant_id}`, formValues)
             .then(response => {
               console.log(response);
              })
              .catch(error => {
                 console.log(error);
              });
           this.modal = false;
           this.refreshOnExit += 1;
       }
       //with no image
      if (string !== "string" && this.employeePic == undefined){
        console.log('HERE-------');
         let wNoImageEdit = await axios
     
            // http://localhost:8081/consultants/${this.data.consultant_id}
            //https://dad59dxvm7.execute-api.us-east-1.amazonaws.com/admin/consultants/${this.data.consultant_id}
            .put(`https://dad59dxvm7.execute-api.us-east-1.amazonaws.com/admin/consultants/${this.data.consultant_id}`, formValues)
            .then(response => {
              console.log(response);
            })
            .catch(error => {
              console.log(error);
            });
          this.modal = false;
          this.refreshOnExit += 1;
      }
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
    statusButtons(s) {
      let statusButton = s.target.parentNode;
      console.log(statusButton);
      const statusLocation = s.target.parentNode.parentNode.parentNode.parentNode.getAttribute(
        "id"
      );
      console.log(statusLocation);
      this.infoModal = this.info[statusLocation];
      console.log('status before change', this.infoModal.activeORinactive);
      if (confirm('Do you want to Change the Status of this Employee?')) {
         if (this.infoModal.activeORinactive === 'Inactive') {
           const str = this.infoModal.activeORinactive;
           const res = str.replace("Inactive", "Active");
           const statusJson = JSON.stringify(res);
           const newArrayValue = JSON.parse(statusJson);
                this.infoModal.activeORinactive = newArrayValue; 
                //`http://localhost:8081/consultants/${this.infoModal.consultant_id}`, this.infoModal
                 axios
                 .put(`https://dad59dxvm7.execute-api.us-east-1.amazonaws.com/admin/consultants/${this.infoModal.consultant_id}`, this.infoModal)
                 .then(response => {
                   console.log(response);
                 })
                 .catch(error => {
                   console.log(error);
               });
          } else if (this.infoModal.activeORinactive === 'Active') {
             const str2 = this.infoModal.activeORinactive;
             const res2 = str2.replace("Active", "Inactive");
             const statusJson2 = JSON.stringify(res2);
             const newArrayValue2 = JSON.parse(statusJson2);
              this.infoModal.activeORinactive = newArrayValue2;    
               axios
               .put(`https://dad59dxvm7.execute-api.us-east-1.amazonaws.com/admin/consultants/${this.infoModal.consultant_id}`, this.infoModal)
               .then(response => {
                 console.log(response);
               })
               .catch(error => {
                 console.log(error);
               });
            }
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
    },
    showORhideToggle() {
       var x = document.getElementById("toggle");
        if (x.style.display === "block"){
            x.style.display = "none";
        } else {
            x.style.display = "block";
         }
    }

  }, //end methods
  // computed: {
  //   sortStatus(){
  //       this.info.sort(function(a, b) {
  //           var statusA = a.activeORinactive.toUpperCase(); 
  //           var statusB = b.activeORinactive.toUpperCase(); 
  //           if (statusA < statusB) {
  //             return -1;
  //           }
  //           if (statusA > statusB) {
  //             return 1;
  //           }
  //           // names must be equal
  //           return 0;
  //         });
  //   },
  // },
  render: { 
  },
  // fire on render
  created() {
    this.getList();
  },
  beforeCreate() {
      
    }
  
};
</script>
<style >
/* .tim-icons {
  line-height: 1.45rem !important;
} */
.buttonChange {
  background-color: #1e1e2f !important;
  color: rgba(255, 255, 255, 0.7) !important;
  border: none;
  text-align: left;
}
.buttonChange:hover {
  cursor: pointer;
  color: white !important;
}
.modalView {
  color: black;
}
/*view modal hidden*/
#toggle {
  display: none;
}
#search {
  position:relative;
  float:right;
  margin:15px;
  visibility:visible;
  width: 9px;
}
.searchhover {
  position:absolute;
  bottom:40px;
  left:-40px;
  width: 60px;
  display: none;
  font-weight: 500;
}
#search:hover .searchhover {
  display: block;
  background-color: #0B0B47 !important;
  text-align: center;
  border-radius: 15px;
}

.hoverBlue:hover {
  background-color: #0B0B47 !important;
}

.searchbar{
  margin-top: 7px !important;
  margin-right: 3px !important;
}

.base-dropdown {
  float: right;
  margin-top: 20px

}
 

</style>

