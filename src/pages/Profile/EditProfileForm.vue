<template>
  <card>
    <h5 slot="header" class="title">
    Edit Employee Form
    </h5>
    <div class="row">
      <div class="col-md-4 pr-md-1">
        <base-input label="Full Name"
                  name="formattedName"
                  placeholder="full Name"
                  v-model="info.formattedName"
                  >
                  
                
        </base-input>
      </div> 
      <div class="col-md-4 px-md-1">
        <base-input label="First Name"
                  placeholder="First Name"
                  v-model="info.firstName">
        </base-input>
      </div>
      <div class="col-md-4 px-md-1">
        <base-input label="Last Name"
                  placeholder="Last Name"
                  v-model="info.lastName">
        </base-input>
      </div>
    </div>
    <!-- <div class="row">
      <div class="col-md-4 pl-md-1">
        <base-input label="Email"
                  type="email"
                  placeholder="name@email.com"
                  v-model="model.email">
        </base-input>
      </div>
      <div class="col-md-4 pr-md-1">
        <base-input label="Home Phone"
                  v-model="model.homePhone"
                  placeholder="Home Phone">
        </base-input>
      </div>
      <div class="col-md-4 pl-md-1">
        <base-input label="Birthday"
                  v-model="model.birthday"
                  placeholder="Birthday">
        </base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <base-input label="Address"
                  v-model="model.homeAddress_street"
                  placeholder="Home Address">
        </base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 pr-md-1">
        <base-input label="City"
                  v-model="model.homeAddress_city"
                  placeholder="City">
        </base-input>
      </div>
      <div class="col-md-4 px-md-1">
        <base-input label="State"
                  v-model="model.homeAddress_stateProvince"
                  placeholder="State">
        </base-input>
      </div>
      <div class="col-md-4 pl-md-1">
        <base-input label="Postal Code"
                  placeholder="ZIP Code"
                  v-model="model.homeAddress_postalCode">
        </base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 pl-md-1">
        <base-input label="Mothers Name"
                  placeholder="Mothers Name"
                  v-model="model.mothersName">
        </base-input>
      </div>
      <div class="col-md-4 pl-md-1">
        <base-input label="Fathers Name"
                  placeholder="Fathers Name"
                  v-model="model.fathersName">
        </base-input>
      </div>
      <div class="col-md-4 pl-md-1">
        <base-input label="Marital Status"
                  placeholder="Martital Status"
                  v-model="model.maritalStatus">
        </base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 pl-md-1">
        <base-input label="Postal Code"
                  placeholder="ZIP Code"
                  v-model="model.rgDL">
        </base-input>
      </div>
      <div class="col-md-4 pl-md-1">
        <base-input label="Expeditor"
                  placeholder="Expeditor"
                  v-model="model.expeditor">
        </base-input>
      </div>
      <div class="col-md-4 pl-md-1">
        <base-input label="Expedition Date"
                  placeholder="Expedition Date"
                  v-model="model.expeditionDate">
        </base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 pl-md-1">
        <base-input label="CPF"
                  placeholder="CPF"
                  v-model="model.cpf">
        </base-input>
      </div>
      <div class="col-md-4 pl-md-1">
        <base-input label="Email Vivi"
                  placeholder="Email Vivi"
                  v-model="model.emailVivi">
        </base-input>
      </div>
      <div class="col-md-4 pl-md-1">
        <base-input label="Start Date"
                  placeholder="Start Date"
                  v-model="model.startDate">
        </base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 pl-md-1">
        <base-input label="ID"
                  placeholder="ID"
                  v-model="model.autoId">
        </base-input>
      </div>
      <div class="col-md-4 pl-md-1">
        <base-input label="Vivi Company"
                  placeholder="Vivi Company"
                  v-model="model.viviCompany">
        </base-input>
      </div>
      <div class="col-md-4 pl-md-1">
        <base-input label="Title"
                  placeholder="Title"
                  v-model="model.title">
        </base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 pl-md-1">
        <base-input label="Based In"
                  placeholder="Based In"
                  v-model="model.basedIn">
        </base-input>
      </div>
      <div class="col-md-4 pl-md-1">
        <base-input label="Work Phone"
                  placeholder="Work Phone"
                  v-model="model.workPhone">
        </base-input>
      </div>
      <div class="col-md-4 pl-md-1">
        <base-input label="Extension Number"
                  placeholder="Extension Number"
                  v-model="model.extenstionNumber">
        </base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-2 pl-md-1">
        <base-input label="Active"
                  placeholder="Active"
                  v-model="model.active">
        </base-input>
      </div>
      <div class="col-md-2 pl-md-1">
        <base-input label="Inactive"
                  placeholder="Inactive"
                  v-model="model.inactive">
        </base-input>
      </div>
      <div class="col-md-4 pl-md-1">
        <base-input label="CLT"
                  placeholder="CLT"
                  v-model="model.clt">
        </base-input>
      </div>
      <div class="col-md-4 pl-md-1">
        <base-input label="PJ"
                  placeholder="PJ"
                  v-model="model.pj">
        </base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 pl-md-1">
        <base-input label="RAZAO"
                  placeholder="RAZAO"
                  v-model="model.razao">
        </base-input>
      </div>
      <div class="col-md-4 pl-md-1">
        <base-input label="CNPJ"
                  placeholder="CNPJ"
                  v-model="model.cnpj">
        </base-input>
      </div>
      <div class="col-md-4 pl-md-1">
        <base-input label="Nome Fantasia"
                  placeholder="Nome Fantasia"
                  v-model="model.nomeFantasia">
        </base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 pl-md-1">
        <base-input label="Inscricao Estadual"
                  placeholder="Inscricao Estadual"
                  v-model="model.inscricaoEstadual">
        </base-input>
      </div>
      <div class="col-md-4 pl-md-1">
        <base-input label="Inscricao Municipal"
                  placeholder="Inscricao Municipal"
                  v-model="model.inscricaoMunicipal">
        </base-input>
      </div>
       <div class="col-md-4 pl-md-1">
        <base-input label="Endereço Da Empresa"
                  placeholder="Endereço Da Empresa"
                  v-model="model.endereçoDaEmpresa">
        </base-input>
      </div>
    </div>
    <div class="row">
       <div class="col-md-4 pl-md-1">
        <base-input label="Optante"
                  placeholder="Optante"
                  v-model="model.optante">
        </base-input>
      </div>
       <div class="col-md-4 pl-md-1">
        <base-input label="Contract Number"
                  placeholder="Contract Number"
                  v-model="model.contractNumber">
        </base-input>
      </div>
    </div> -->
    <base-button  class="animation-on-hover" slot="footer" type="info" fill>Edit</base-button>
    <base-button class="animation-on-hover" slot="footer" type="info" fill>Save</base-button>
  </card>
</template>
<script>
export default {
  props: {
    info: {
      type: Object,
      default: () => {
        return {};
      }
    }
  }
};
</script>
<style>
</style>
