<template>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
        integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
        crossorigin="anonymous"
      />
      <title>Document</title>
    </head>
    <body>
      <header class="d-flex align-items-center justify-content-between pb-4">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb align-items-center bg-white">
            <li class="breadcrumb-item">
              <span class="fa fa-home text-primary"></span>
            </li>
            <li class="divide breadcrumb-item active" aria-current="page">
              <div class="dropdown d-inline">
                <button
                  class="btn p-0 btn-transparent text-primary"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Employees
                </button>
              </div>
            </li>
          </ol>
        </nav>
        <div class="secarch px-2 bg-white p-3">
          <form>
            <div class="d-flex custom-rounded border align-items-center">
              <span class="fa fa-search p-2"></span>
              <input
                type="text"
                name="search"
                class="col md-7 border-0 bg-transparent outline-none p-0"
              />
            </div>
          </form>
        </div>
      </header>
      <!-- <div class="sub-header d-flex justify-content-between align-items-center">
      <div class="buttons px-3">
        <button class="btn btn-primary"  routerLink="add">Add New</button>
        <button class="btn btn-danger " >Delete</button>
      </div>
      <div class="pagination pr-5">
        <p>
          <button  class = "btn btn-primary btn-xs" >PREV</button>
          <span>Page {{curPage}} of {{numberOfPages()}}</span>
          <button  class = "btn btn-primary btn-xs">NEXT</button>
        </p>
      </div>
    </div> -->
      <div class="table-responsive p-4">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  :disabled="isDisabled"
                  :checked="isAllCheckBoxChecked()"
                  @change="checkAllCheckBox($event)"
                />
              </th>
              <th scope="col" class="position">
                <div>FIRST NAME</div>
                <div>
                  <input
                    type="text"
                    name="firstName"
                    @change="input($event, 'firstName')"
                  />
                </div>
              </th>
              <th scope="col" class="position">
                <div>LAST NAME</div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    @change="input($event, 'lastName')"
                  />
                </div>
              </th>
              <!-- <th scope="col">BIRTHDATE</th>
              <th scope="col">GENDER</th> -->
              <th scope="col" class="position">
                <div>DEPARTMENT</div>
                <div>
                  <select @change="input($event, 'dropdown')">
                    <option value="">select</option>
                    <option
                      v-for="(lang, index) in languageList.data"
                      :key="index"
                      :value="lang.id"
                    >
                      {{ lang.name }}
                    </option>
                  </select>
                </div>
              </th>
              <th scope="col">
                <div>ENABLED</div>
                <div>
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    :checked="isDisabled"
                    @change="input($event, 'AllCheck')"
                  />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, index) in dataList.data" :key="index">
              <td scope="row" class="d-flex">
                <router-link :to="'/editEmp/' + user.id"
                  ><span class="btn fa fa-pencil"> </span
                ></router-link>
                <span class="btn fa fa-trash" @click="deleteId(user.id)"></span>
              </td>
              <th scope="col">
                <input
                  type="checkbox"
                  :disabled="user.isDisabled"
                  value="{{user.id}}"
                  v-model="user.checked"
                />
              </th>
              <td>
                <input
                  type="text"
                  :disabled="user.isDisabled"
                  name="firstName"
                  v-model="user.firstName"
                />
              </td>
              <td>
                <input type="text" :disabled="user.isDisabled" v-model="user.lastName" />
              </td>
              <!-- <td>{{}}</td>
              <td>{{}}</td> -->
              <td>
                <select :disabled="user.isDisabled" v-model="user.langId">
                  <option value="">select</option>
                  <option
                    v-for="(lang, index) in languageList.data"
                    :key="index"
                    :value="lang.id"
                  >
                    {{ lang.name }}
                  </option>
                </select>
              </td>
              <td>
                <div>
                  <input
                    type="checkbox"
                    v-model="user.isDisabled"
                    @change="disableField($event, user)"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </body>
  </html>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, watchEffect } from "vue";

export default defineComponent({
  name: "EmployeeListPresentation",
  components: {},
  props: ["list", "language"],
  emits: ["deleteID"],
  setup(props, ctx) {
    let isDisabled = ref(false);
    let dataList = reactive({ data: [] as any });
    let languageList = reactive({ data: [] as any });
    watchEffect(() => {
      dataList.data = props.list;
      languageList.data = props.language;
    });
    const deleteId = (id: number) => {
      ctx.emit("deleteID", id);
    };
    const isAllCheckBoxChecked = () => {
      return dataList.data.every((p: any) => p.checked);
    };
    const checkAllCheckBox = (value: any) => {
      dataList.data.forEach((x: any) => (x.checked = value.target.checked));
    };
    const disableField = (isChecked: any, value: any) => {
      value.isDisabled = isChecked.target.checked;
      isDisabled.value = isChecked.target.checked;
    };
    const input = (e: any, fieldName: string) => {
      dataList.data.forEach((x: any) => {
        if (x.checked) {
          if (fieldName == "firstName") {
            if (x.isDisabled) {
              x.firstName;
            } else if (!x.isDisabled) {
              x.firstName = e.target.value;
            }
          }
          if (fieldName == "lastName") {
            if (x.isDisabled) {
              x.lastName;
            } else if (!x.isDisabled) {
              x.lastName = e.target.value;
            }
          }
          if (fieldName == "dropdown") {
            if (x.isDisabled) {
              x.langId;
            } else if (!x.isDisabled) {
              x.langId = +e.target.value;
            }
          }
          if (fieldName == "AllCheck") {
            x.isDisabled = e.target.checked;
            if (!e.target.checked) {
              isDisabled.value = e.target.checked;
            } else {
              isDisabled.value = dataList.data.every((p: any) => p.checked);
            }
          }
        }
        // if (x.checked) {
        //   // eslint-disable-next-line no-unused-vars
        //   let field_Name: any[] = ["firstName", "lastName", "dropdown", "AllCheck"];
        //   field_Name.forEach((data: any) => {
        //     if (data == fieldName) {
        //       // x.isDisabled = e.target.checked;
        //       if (x.isDisabled) {
        //         x[fieldName];
        //         x.langId;
        //       } else if (!x.isDisabled) {
        //         x[fieldName] = e.target.value;
        //         if (+e.target.value) {
        //           if (isDisabled.value) {
        //             x.langId = +e.target.value;
        //           }
        //         }
        //       }
        //       if (!e.target.checked) {
        //         x.isDisabled = e.target.checked;
        //         return dataList.data.every((p: any) => p.checked);
        //       } else {
        //         x.isDisabled = e.target.checked;
        //         isDisabled.value = dataList.data.every((p: any) => p.checked);
        //       }
        //     }
        //   });
        // }
      });
    };
    return {
      isAllCheckBoxChecked,
      checkAllCheckBox,
      disableField,
      input,
      dataList,
      languageList,
      isDisabled,
      deleteId,
    };
  },
});
</script>
<style></style>
