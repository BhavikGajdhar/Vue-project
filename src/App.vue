<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <nav>
    <router-link to="/">Home</router-link> | <router-link to="/add">Form</router-link> |
    <router-link to="/empList">EmpList</router-link>|
    <router-link to="/addEmp">EmpForm</router-link>|
    <router-link to="/consList">ConsList</router-link>
  </nav>

  <!-- <h1>{{ title }}</h1>
  <input type="test" ref="name" @close="handleClick" />
  <HelloWorld :header="header" :text="text" :them="sale" @close="handleClick">
  <template v-slot:links>
    <a href="#">SignUp</a>
    <a href="#">More Info</a>
  </template>
    <h1>Ninja Giveaway!!</h1>
    <p>Grab the ninja</p>
  </HelloWorld>
  <button @click="handleClick">Click Me</button> -->
  <router-view />
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
  },
  data() {
    return {
      title: "My First Vue App :)",
      header: "Sign up for the Giveaway!!",
      text: "Grab your ninja swag for half price",
      sale: false,
    };
  },
  methods: {
    handleClick() {
      // eslint-disable-next-line no-debugger
      debugger;
      this.sale = !this.sale;
      console.log(this.sale);
      this.$refs.name.classList.add("active");
      this.$refs.name.focus();
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
