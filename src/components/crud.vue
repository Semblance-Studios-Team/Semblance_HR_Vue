<template>
<div>
</div>
</template>

<script>

export default {
  name: "crudComponent",
  props: {
  },
  computed: {
  },
  methods: {
    deleteEntity() {
      console.log('deleteEntity has been fired off');
    }
  },
  mounted() {
    this.deleteEntity();
  },
};
</script>
<style>
</style>
