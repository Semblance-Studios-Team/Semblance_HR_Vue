<template>
  <form class="table tablesorter" :class="tableClass">
    <thead :class="theadClasses">
    <tr>
      <slot name="columns">
        <th v-for="column in columns" :key="column">{{column}}</th>
      </slot>
    </tr>
    </thead>
    <tbody :class="tbodyClasses">
      <!-- 4/16 add these unique id indexs to BaseTable for enployee list -->
    <!-- <tr v-for="(item, index) in data" :key="index" > -->
      <tr v-for="(item, index) in data" :key="`item-${index}`" >
      <slot :row="item">
        <td v-for="(column, index) in columns"
            :key="`column-${index}`"
            v-if="hasValue(item, column)">
             <!-- :key="index" was in td above -->
          {{itemValue(item, column)}}

        </td>
      </slot>
    </tr>
    </tbody>
  </form>
</template>
<script>
export default {
  name: "base-form",
  props: {
    columns: {
      type: Array,
      default: () => [],
      description: "Table columns"
    },
    data: {
      type: Array,
      default: () => [],
      description: "Table data"
    },
    type: {
      type: String, // striped | hover
      default: "",
      description: "Whether table is striped or hover type"
    },
    theadClasses: {
      type: String,
      default: "",
      description: "<thead> css classes"
    },
    tbodyClasses: {
      type: String,
      default: "",
      description: "<tbody> css classes"
    }
  },
  computed: {
    tableClass() {
      return this.type && `table-${this.type}`;
    }
  },
  methods: {
    hasValue(item, column) {
      return item[column.toLowerCase()] !== "undefined";
    },
    itemValue(item, column) {
      return item[column.toLowerCase()];
    }
  }
};
</script>
<style>
</style>
