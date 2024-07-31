<template>
  <UserListPresentation
    :list="dataList.data"
    @deleteID="deleteCall($event)"
  ></UserListPresentation>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import UserListPresentation from "../userListContainer/userListPresentation/UserListPresentation.vue";
import { deleteUserData, getUserData } from "../userService/UserService";
import { useStore } from "vuex";
export default defineComponent({
  name: "UserListContainer",
  components: {
    UserListPresentation,
  },
  data() {
    return {};
  },
  props: [],
  mounted() {},
  created() {},
  methods: {},
  setup() {
    let dataList = reactive({ data: [] as any });
    const store = useStore();
    console.log(store.state.form);

    getUserData().then((res: any) => {
      dataList.data = res.data;
      // store.commit("increment", 1);
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
      // eslint-disable-next-line vue/no-dupe-keys
      dataList,
      store,
    };
  },
});
</script>
