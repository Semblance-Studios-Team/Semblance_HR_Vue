<!-- 

-stripe gateway 
-invoice generater that gets emailed to client at click of a button
-redirect back to app to or pop up for gateway (ideally pop up from email that doesnt redirect to site)
 -->
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
        placeholder="Search by Company Name"
        id="userSearchInput"
        v-model="userSearchInput"/>
      <base-dropdown class="base-dropdown"
                      menu-classes="dropdown-black"
                      title-classes="btn btn-secondary"
                      title="Status"
                      >
          <h6 class="dropdown-header">Select Status</h6>
          <a  class="dropdown-item hoverBlue" @click="getList" >All</a>
          <a  class="dropdown-item hoverBlue" @click="searchStatusPaid" >Paid</a>
          <a  class="dropdown-item hoverBlue" @click="searchStatusPending" >Pending</a>
      </base-dropdown>       
      </div>
     <div id="main" > 
    <base-table 
    id="empTable"
    :data="info" 
    :columns="columns"  >
      <template slot="columns" > 
        <th>Company Name</th>
        <th> INTERNAL CONTACT'S NAME</th>
        <th>Contact Email</th> 
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
           {{row.companyName }} 
        </button>
       </td>
       <td>
        <button  class="buttonChange" @click="(t) =>viewInfo(t)">
           {{row.formattedName}}
        </button>
       </td>
       <td>
        <button  class="buttonChange" @click="(t) =>viewInfo(t)">
           {{row.companyEmail}}
        </button>
       </td>
        <td>
         <button  class="buttonChange" @click="(t) =>viewInfo(t)">
            {{row.title}}
         </button>
        </td>
        <td >
          <button  class="buttonChange" @click="(t) =>viewInfo(t)">
            {{row.paidORpending}}
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
            <i class="tim-icons icon-money-coins"></i>
          </base-button>
         <p class="text">Send Bill</p>
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
    <!-- Client modal -->
    <modal class="edit-modal" :show.sync="modal" :key="refreshOnExit">
      <template slot="header">
        <h1 class="modal-title">Edit Client Information</h1>
      </template>
      <form role="form"  @submit="handleSubmit" enctype="multipart/form-data">

       <div class="form-row hidefromclient">
        <fieldset disabled>
         <base-input 
           class="col-md-12"
           name="client_id"
           label="Database ID (Disabled)" 
           v-model="infoModal.client_id" 
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
          name="companyName"
          v-model="infoModal.companyName"
          type="text"
          label="Company Name*"
          placeholder="Company Name"
        />
        <base-input
          class="col-md-4"
          name="companyPhoneNumber"
          v-model="infoModal.companyPhoneNumber"
          type="text"
          label="Company Phone Number"
          placeholder="Company Phone Number"
        />
        <base-input
          class="col-md-4"
          name="companyAddress_street"
          v-model="infoModal.companyAddress_street"
          type="text"
          label="Work Address"
          placeholder="Work Address"
        />
      </div>

      <div class="form-row">
        
        <base-input 
         class="col-md-4" 
         name="companyAddress_city"
         v-model="infoModal.companyAddress_city"
         type="text" 
         label="Work City*" 
         placeholder="Work City"
        />
        <base-input 
         class="col-md-4" 
         name="companyAddress_stateProvince" 
         v-model="infoModal.companyAddress_stateProvince"
         label="Work State / Province">
          <select 
           name="companyAddress_stateProvince" 
           id="inputState" 
           class="form-control">
            
           <option selected>{{infoModal.companyAddress_stateProvince}}</option>
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
          v-model="infoModal.companyAddress_postalCode"
          type="text"
          label="Work Postal Code*"
          placeholder="Work Postal Code"
        />
      </div>
      <div class="form-row">
        
        <base-input
          class="col-md-4"
          name="companyWebsite"
          v-model="infoModal.companyWebsite"
          type="text"
          label="Company Website*"
          placeholder="Company Website"
        />
      </div>

      <div class="form-row">

       <base-input
          class="col-md-4"
          name="formattedName"
          v-model="infoModal.formattedName"
          type="text" 
          label="Internal Contact's Name"
          placeholder="Internal Contact's Name"
          />
          
        <base-input 
         class="col-md-4" 
         name="title"
         v-model="infoModal.title"
         type="text" 
         label="Title*" 
         placeholder="Title"
        />

         <base-input 
         class="col-md-4" 
         name="companyEmail"
         v-model="infoModal.companyEmail"
         type="email" 
         label="Email" 
         placeholder="Email"
        />
      </div>
      <div class="form-row">
        <base-input
          class="col-md-4"
          name="cellPhone"
          v-model="infoModal.cellPhone"
          type="text"
          label="Cell Phone"
          placeholder="xxx-xxx-xxxx"
        />
        <base-input
          class="col-md-4"
          name="workPhone"
          v-model="infoModal.workPhone"
          type="text"
          label="Work Phone"
          placeholder="xxx-xxx-xxxx"
        />
        <base-input
          class="col-md-4"
          name="extenstionNumber"
          v-model="infoModal.extenstionNumber"
          type="text"
          label="Extension Number"
          placeholder="ex: 3471"
        />
      </div>
      <div class="form-row">
      <base-input
          class="col-md-4"
          name="paidORpending"
          v-model="infoModal.paidORpending"
          type="text"
          label="Paid Or Pending*"
          placeholder="Paid Or Pending"
          >
          <select name="paidORpending" id="inputState" class="form-control">
            <option selected>{{infoModal.paidORpending}}  </option>
            <option>Pending</option>
            <option>Paid</option>
          </select>
        </base-input>
      </div>
      

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
     <h1 style="color: black">Client Information <span> 
       <h5 style="color: black; float: right; margin-top: 10px;">Last Edited By: {{infoModal.lastEditedBy}} On {{infoModal.timeStampEdit}}</h5>
      </span>
     </h1>
     </div>
    <form role="form" >

        <div class="form-row">
           <h4 class="col-md-3 h4ViewModals"> Company Name: </h4>
          <h5
            class="col-md-3 modalView h5ViewModals"
            v-model="infoModal.companyName" 
          > 
           {{infoModal.companyName}}
          </h5>
          <h4 class="col-md-3 h4ViewModals"> Company Phone Number: </h4>
          <h5
            class="col-md-3 modalView h5ViewModals"
            v-model="infoModal.companyPhoneNumber" 
          > 
           {{infoModal.companyPhoneNumber}}
          </h5>
        </div>


        <div class="form-row">
          <h4 class="col-md-3 h4ViewModals"> Internal Contact's Name: </h4>
          <h5
            class="col-md-3 modalView h5ViewModals"
            v-model="infoModal.formattedName" 
          > 
           {{infoModal.formattedName}}
          </h5>
        <h4 class="col-md-3 h4ViewModals"> Contact Email: </h4>
          <h5
           class="col-md-3 modalView h5ViewModals" 
           v-model="infoModal.companyEmail"
          >
            {{infoModal.companyEmail}}
          </h5>
        </div>


      <div class="form-row">
        <h4 class="col-md-3 h4ViewModals"> Title: </h4>
         <h5 
           class="col-md-3 modalView h5ViewModals" 
           v-model="infoModal.title"
         >
           {{infoModal.title}}
         </h5>
          
          <h4 class="col-md-3 h4ViewModals"> Company Street: </h4>
          <h5 
           class="col-md-3 h5ViewModals" 
           v-model="infoModal.companyAddress_street"
          >
            {{infoModal.companyAddress_street}}
          </h5>
        </div>


        <div class="form-row">
        <h4 class="col-md-3 h4ViewModals"> Company City: </h4>
         <h5 
           class="col-md-3 h5ViewModals" 
           v-model="infoModal.companyAddress_city" 
          >
            {{infoModal.companyAddress_city}}
          </h5>
          <h4 class="col-md-3 h4ViewModals"> Company State: </h4>
          <h5 
           class="col-md-3 h4ViewModals" 
           v-model="infoModal.companyAddress_stateProvince"
          >
            {{infoModal.companyAddress_stateProvince}}
          </h5>
        </div>
        <div class="form-row">
          <h4 class="col-md-3 h4ViewModals"> Company Postal Code: </h4>
          <h5 
           class="col-md-3 h5ViewModals" 
           v-model="infoModal.companyAddress_postalCode"
          >
            {{infoModal.companyAddress_postalCode}}
          </h5>
          <h4 class="col-md-3 h4ViewModals"> company Website: </h4>
         <h5 
           class="col-md-3 h5ViewModals"
           v-model="infoModal.companyWebsite"
         >
           {{infoModal.companyWebsite}} 
         </h5>
        </div>
        <div class ="form-row">
          <h4 class="col-md-3 h4ViewModals"> Work Phone: </h4>
          <h5 
           class="col-md-3 h5ViewModals" 
           v-model="infoModal.workPhone"
          >
            {{infoModal.workPhone}}
          </h5>
    
     
          <h4 class="col-md-3 h4ViewModals"> Extension Number: </h4>
          <h5
            class="col-md-3 h5ViewModals"
            v-model="infoModal.extenstionNumber"
          >
            {{infoModal.extenstionNumber}}
          </h5>
 
         </div>
          <div class="form-row">

         <h4 class="col-md-3 h4ViewModals"> Cell Phone: </h4>
          <h5
           class="col-md-3 h4ViewModals"
           v-model="infoModal.cellPhone"
          >
            {{infoModal.cellPhone}}
          </h5>
 
    
          
          <h5 class="col-md-3 h4ViewModals"> Paid Or Pending Fees: </h5>
          <h5
           class="col-md-3 h5ViewModals"
           v-model="infoModal.paidORpending"
          >
            {{infoModal.paidORpending}}
          </h5>

         </div>
    
       
     
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
      userSearchInput: null ,
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
        //http://localhost:8081/clients/clientList
        //https://dad59dxvm7.execute-api.us-east-1.amazonaws.com/admin/clients
        const list = await axios.get(`https://dad59dxvm7.execute-api.us-east-1.amazonaws.com/admin/clients`);
        this.info = list.data;
        console.log(this.info);
        this.info.sort(function(a, b) {
            var nameA = a.companyName.toUpperCase(); 
            var nameB = b.companyName.toUpperCase(); 
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
         var searchResult = myNewArray.filter(myNewArray => !userSearchInput || myNewArray.companyName.toLowerCase().includes(this.userSearchInput.toLowerCase()))
          console.log(searchResult);
          this.info = searchResult; 
       } while (this.userSearchInput = '')
      

    },
    async searchStatusPaid() {
         await this.getList();
         // Creates new array from info [] in data return     
        let myStatusArrayPaid = [];
        myStatusArrayPaid = this.info; 
        this.status = "Paid"
       
        // Filter through new array with employee list for active users
        if ( this.status = "Paid") {
          var statusResultPaid = myStatusArrayPaid.filter(myStatusArrayPaid => !this.status || myStatusArrayPaid.paidORpending.includes(this.status))
       // sets info array to filtered active users list      
          this.info = statusResultPaid;
          // console.log(statusResultActive)
          
        }

    },
    async searchStatusPending() {
     
        await this.getList();
      // Creates new array from info [] in data return
        let myStatusArrayPending = [];
        myStatusArrayPending = this.info;
      // Sets status to inactive from an empty string  
        this.status = "Pending"
       
      // Filter through new array  for inactive users
        if ( this.status = "Pending") {
          var statusResultPending = myStatusArrayPending.filter(myStatusArrayPending => !this.status || myStatusArrayPending.paidORpending.toLowerCase().includes(this.status.toLowerCase()))
      // sets info array to filtered inactive users list
          this.info = statusResultPending;
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
      this.modalView = true;
    },
    
    async removeRow(r) {
      const deleteRow = r.target.parentNode.parentNode.parentNode.parentNode.getAttribute("id");
      this.infoModal = this.info[deleteRow];
       try {
       if (confirm('Do you want to delete this Client?')) {
        let rowId = r.target.parentNode.parentNode.parentNode.parentNode;
            rowId.parentNode.removeChild(rowId);
            console.log('rowId');
            console.log(rowId);
            //https://7olb5ali48.execute-api.us-east-1.amazonaws.com/admin/consultants
            //const myRowPost = await axios.post("http://localhost:8081/consultants/remove", this.infoModal)
            console.log('this.infoModal.client_id');
            console.log(this.infoModal.client_id);
            const myRowDelete = await axios.delete(
            `https://dad59dxvm7.execute-api.us-east-1.amazonaws.com/admin/clients/${this.infoModal.client_id}`)
            //'http://localhost:8081/consultants/:id', this.infoModal)
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
        //https://7olb5ali48.execute-api.us-east-1.amazonaws.com/admin/vcards
        const new_card = await axios.post("http://localhost:8081/vcards", this.infoModal)
        var file = new File( [new_card.data], "vcard", {type: "text/plain;charset=utf-8"});
        const formData = new FormData()
        if (file !== undefined) {
        formData.append("vcard", file, file.name);
        console.log(formData);
        //https://7olb5ali48.execute-api.us-east-1.amazonaws.com/admin/vc-upload
        let vcf = await axios.post("http://localhost:8081/vc-upload", formData)
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
        const new_card = await axios.post("http://localhost:8081/vcards", this.infoModal)
        var file = new File( [new_card.data], "vcard", {type: "text/plain;charset=utf-8"});
        const formData = new FormData()
        if (file !== undefined) {
        formData.append("vcard", file, file.name);
        let vcf = await axios.post("http://localhost:8081/vc-upload", formData)
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

         // attach current admin user to form 
          await Auth.currentUserInfo()
          .then(info => {
            var userEmail = info.attributes.email;
            var userName = info.username;
            console.log('12');
            //console.log(userEmail);
            console.log(userName);  
            this.data.lastEditedBy = userName;
            formValues.lastEditedBy = this.data.lastEditedBy;
            //add edit timestamp
            var timestamp = Number(new Date());
            const date = new Date(timestamp).toDateString();
            this.data.timeStampEdit = date;
         });

         var string = "";
         if (formValues.companyName == "") {
            alert('Company Name is REQUIRED! Please fix.');
            string ="string";
            console.log('STRING 1')
          } 

       //with no image
      if (string !== "string" && this.employeePic == undefined){
        console.log('HERE-------');
         let wNoImageEdit = await axios
            //http://localhost:8081/clients/${this.data.client_id}
            //https://dad59dxvm7.execute-api.us-east-1.amazonaws.com/admin/clients/${this.data.client_id}
            .put(`https://dad59dxvm7.execute-api.us-east-1.amazonaws.com/admin/clients/${this.data.client_id}`, formValues)
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
    statusButtons(s) {
      let statusButton = s.target.parentNode;
      console.log(statusButton);
      const statusLocation = s.target.parentNode.parentNode.parentNode.parentNode.getAttribute(
        "id"
      );
      console.log(statusLocation);
      this.infoModal = this.info[statusLocation];
      console.log('status before change', this.infoModal.paidORpending);
      if (confirm('Do you want to Change the Payment Status of this Client?')) {
         if (this.infoModal.paidORpending === 'Pending') {
           const str = this.infoModal.paidORpending;
           const res = str.replace("Pending", "Paid");
           const statusJson = JSON.stringify(res);
           const newArrayValue = JSON.parse(statusJson);
                this.infoModal.paidORpending = newArrayValue; 
                 axios
                 .put(`https://dad59dxvm7.execute-api.us-east-1.amazonaws.com/admin/clients/${this.infoModal.client_id}`, this.infoModal)
                 .then(response => {
                   console.log(response);
                 })
                 .catch(error => {
                   console.log(error);
               });
          } else if (this.infoModal.paidORpending === 'Paid') {
             const str2 = this.infoModal.paidORpending;
             const res2 = str2.replace("Paid", "Pending");
             const statusJson2 = JSON.stringify(res2);
             const newArrayValue2 = JSON.parse(statusJson2);
              this.infoModal.paidORpending = newArrayValue2;    
               axios
               .put(`https://dad59dxvm7.execute-api.us-east-1.amazonaws.com/admin/clients/${this.infoModal.client_id}`, this.infoModal)
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

