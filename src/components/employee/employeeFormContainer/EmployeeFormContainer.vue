<template lang="">
  <div> <EmployeeFromPresentation></EmployeeFromPresentation> </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import EmployeeFromPresentation from "../employeeFormContainer/employeeFromPresentation/EmployeeFromPresentation.vue";

export default defineComponent({
  name: "EmployeeFormContainer",
  components: {
    EmployeeFromPresentation,
  },
});
</script>
<style lang=""></style>
