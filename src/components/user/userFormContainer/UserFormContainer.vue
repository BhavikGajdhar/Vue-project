<template>
  <UserFormPresentation
    :formData="formData.data"
    @postData="postPutCall($event)"
  ></UserFormPresentation>
</template>

<script lang="ts">
import { defineComponent , reactive } from "vue";
import {
  addUserData,
  getUserDataByID,
  putUserData,
} from "../userService/UserService";
import UserFormPresentation from "./userFormPresentation/UserFormPresentation.vue";
import { useRouter,useRoute } from 'vue-router'

export default defineComponent({
  name: "UserListPresentationVue",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    UserFormPresentation,
  },
  props: [],
  data() {
    return {
      // formData: [] as any,
    };
  },
  setup() {
    const router = useRouter()
    const route = useRoute()
    let formData = reactive({ data: [] as any });
    let id: number | any = route.params.id;
     if (id) {
       getUserDataByID(id).then((res) => {
         formData.data = res.data 
       });
     }
  
    const postPutCall=(value: any)=>{
        if (value.id) {
        putUserData(value.id, value).then((res) => {
          if (res) {
          router.push({name: 'userList'})
          }
        }).catch((error)=>{console.log(error);
        });
      } else {
        addUserData(value).then((res) => {
          if (res) {
           router.push({name: 'userList'})
          }
        }).catch((error)=>{console.log(error);
        });
      }

    }
    return{
      postPutCall,
      formData
    }
  },
  mounted() {
    // let id: number | any = this.$route.params.id;
    // if (id) {
    //   getUserDataByID(id).then((res) => {
    //     this.formData = res.data 
    //   });
    // }
  },
  // methods: {
  //   postPutCall(value: any) {
  //     if (value.id) {
  //       putUserData(value.id, value).then((res) => {
  //         if (res) {
  //           this.$router.push({ name: "UserList" });
  //         }
  //       });
  //     } else {
  //       addUserData(value).then((res) => {
  //         if (res) {
  //           this.$router.push({ name: "UserList" });
  //         }
  //       });
  //     }
  //   },
  // },
  // created() {
  //   // eslint-disable-next-line no-debugger
  //   let id: number | any = this.$route.params.id;
  //   if(id){
  //     getUserDataByID(id).then((res) => {
  //       console.log();
  //       this.formData = res.data
  //     });
  //   }
  // },
});
</script>

<style></style>
