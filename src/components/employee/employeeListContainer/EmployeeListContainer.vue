<template>
  <div>
    <EmployeeListPresentation
      :list="dataList.data"
      :language="languageList.data"
      @deleteID="deleteCall($event)"
    ></EmployeeListPresentation>
  </div>
</template>
<script lang="ts">
import EmployeeListPresentation from "../employeeListContainer/employeeListPresentation/EmployeeListPresentation.vue";
import { defineComponent, reactive } from "vue";
import {
  deleteUserData,
  getLanguage,
  getUserData,
} from "@/components/user/userService/UserService";

export default defineComponent({
  name: "EmployeeListContainer",
  components: {
    EmployeeListPresentation,
  },
  setup() {
    let dataList = reactive({ data: [] as any });
    let languageList = reactive({ data: [] as any });
    getUserData().then((res: any) => {
      dataList.data = res.data;
    });
    getLanguage().then((res) => {
      languageList.data = res.data;
    });
    const deleteCall = (id: number) => {
      deleteUserData(id).then((res: any) => {
        if (res) {
          getUserData().then((res: any) => {
            dataList.data = res.data;
          });
        }
      });
    };

    return {
      deleteCall,
      dataList,
      languageList,
    };
  },
});
</script>
<style></style>
