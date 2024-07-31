<template>
  <div>
    <!-- <router-link to="/add"> <button type="button">Add</button></router-link> -->
    <hr />
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in dataList.data" :key="index">
          <td>{{ user.id }}</td>
          <td>{{ user.firstName }} {{ user.lastName }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.phone }}</td>
          <td>
            <router-link :to="'/edit/' + user.id"
              ><button type="button">Edit</button></router-link
            >
          </td>
          <td>
            <button type="button" @click="deleteId(user.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, watch } from "vue";

export default defineComponent({
  name: "UserListPresentation",
  props: ["list"],
  emits: ["deleteID"],
  // data() {
  //   return {
  //     listDetail: [] as any,`
  //   };
  // },
  // watch: {
  //   list(newValue: any) {
  //     if (newValue) {
  //       this.listDetail = newValue;
  //     }
  //   },
  // },
  // created() {
  //   if (this.list) {
  //     this.listDetail = this.list;
  //   }
  //   // eslint-disable-next-line no-debugger
  // },
  // methods: {
  //   deleteId(id: number) {
  //     this.$emit("deleteID", id);
  //   },
  // },
  setup(props, context) {
    let dataList = reactive({ data: [] as any });

    watch(
      () => props.list,
      () => {
        dataList.data = props.list;
      }
    );
    const deleteId = (id: number) => {
      context.emit("deleteID", id);
    };

    return {
      // eslint-disable-next-line vue/no-dupe-keys
      deleteId,
      dataList,
    };
  },
});
</script>
