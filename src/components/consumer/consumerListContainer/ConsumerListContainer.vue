<template lang="en">
    <div>
        <ConsumerListPresentation></ConsumerListPresentation>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ConsumerListPresentation from "./consumerListPresentation/ConsumerListPresentation.vue";
export default defineComponent({
  name: "ConsumerListContainer",
  components: {
    ConsumerListPresentation,
  },
});
</script>
<style lang="en"></style>
