<template>
  <main>
    <div class="limiter">
      <div class="container-login100" style="background-image">
        <b-card class="card-login">
          <div class="Login" id="login">
          <span class="login100-form-title p-b-49 mb-4"> Login </span>

          <div class="mb-2">Username</div>
          <b-form-input
            v-model="form.username"
            placeholder="Username"
          ></b-form-input>

          <div class="mb-2 mt-2">Password</div>
          <b-form-input
            type="password"
            v-model="form.password"
            placeholder="Password"
          ></b-form-input>
          <div class="entrar">
          <div class="mt-3">
            <b-button variant="outline-primary" @click="login">Entrar</b-button>
            </div>
          </div>
          </div>
        </b-card>
      </div>
    </div>
  </main>
</template>
 
<script>
import api from "@/services/api";
export default {
  name: "Login",
  data: () => ({
    form: {
      username: "",
      password: "",
    },
  }),
  created() {},
  methods: {
    submit() {
      console.log(this.from);
    },
    login() {
      api
        .post("/api/v1/auth/login", {
          username: this.form.username,
          password: this.form.password,
        })
        .then((response) => {
          localStorage.setItem("token", response.data.data.access_token);
          this.$router.replace("produtos");
        })
        .catch((error) => {
          alert("Login ou password inválidos!");
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>
main {
  background-color: var(--color-background);
  justify-content: center;
  align-items: center;
}
.entrar{
  margin: 20px 80px;
}
.card-login {
  box-shadow: 1px 2px 5px rgba(0,0,0,.2);
}

.button {
  background-color: #8b8989;
  border: none;
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 10px 60px;
  cursor: pointer;
  border-radius: 10px;
}

/* --------------------------------------------- */

/* [ login ]*/
.limiter {
  width: 100%;
  margin: 0 auto;
}

.container-login100 {
  width: 100%;
  min-height: 100vh;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.wrap-login100 {
  width: 500px;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
}

/*------------------------------------------------------------------
[ Form ]*/

.login100-form {
  width: 100%;
}

.login100-form-title {
  display: block;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: normal;
  font-size: 39px;
  color: #8b8989;
  line-height: 1.2;
  text-align: center;
}
</style>
 