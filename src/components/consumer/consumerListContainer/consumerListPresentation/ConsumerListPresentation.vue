<template lang="en">
    <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <figure>
      <img src="" class="img-fluid rounded-start" alt="">
      </figure>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import Multiselect from "@vueform/multiselect";

export default defineComponent({
  name: "ConsumerListContainer",
  components: {
    Multiselect,
  },
  setup() {
    let dataList = reactive({ data: [] as any });
    let value = ref(null);
    dataList.data = ["Batman", "Robin", "Joker"];

    return {
      dataList,
      value,
    };
  },
});
</script>
// <style lang="en" src="@vueform/multiselect/themes/default.css"></style>
