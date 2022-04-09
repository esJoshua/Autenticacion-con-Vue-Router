<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <template v-if="!isloggedIn">
        <router-link to="/login">Login</router-link>
      </template>
      <template v-else>
        <button @click="logout" class="btn btn-link">Logout</button>
      </template>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapState(["loggedIn"]),
    isloggedIn() {
      return this.loggedIn ? true : false;
    },
  },
  methods: {
    ...mapActions(["logout"]),
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
