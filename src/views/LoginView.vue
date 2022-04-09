<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h1 class="display-2">Ingrese sus Datos</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="login border">
          <label class="login__title">Usuario</label>
          <input
            class="login__input form-control"
            placeholder="Intenta con: usertest@gmail.com"
            type="email"
            v-model="user"
          />
          <label class="login__title">Contraseña</label>
          <input
            class="login__input form-control"
            placeholder="Ingresa 123456"
            type="password"
            v-model="password"
          />
          <button @click="login" class="login__btn btn btn-primary">
            Ingresar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "LoginView",
  data() {
    return {
      user: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["loginWithFirebase"]),
    async login() {
      await this.loginWithFirebase({
        user: this.user,
        password: this.password,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.login {
  max-width: 20rem;
  border-radius: 5px;
  margin: 1rem auto;
  padding: 1rem;
  &__btn {
    margin: 10px 0;
  }
}
</style>
