<template>
  <main>
    <div class="Login" id="login">
      <h1>Login</h1>
      <input type="text" placeholder="Username" v-model="form.username" />
      <br />
      <input type="password" placeholder="password" v-model="form.password" />
      <br />
      <div class="btn-login">
        <button @click="login">Login</button>
      </div>
    </div>
    <p>
      Você não tem conta?
      <a href="">crie uma conta</a>
    </p> 
  </main>
</template>
<script>
import api from '@/services/api'
export default {
  name: "Login",
  data: () => ({
    form: {
      username: "",
      password: "",
    },
  }),
  created(){
   // this.ActionsSetUser({name: 'evan', password:'passoword'})

  },
  
  methods: {
  //  ...mapActions('auth',[ActionsSetUser]),
    submit (){
      console.log(this.from)
    },
    login: function () {
    api
      .post("/api/v1/auth/login", {
        username: this.form.username,
        password: this.form.password,
      })
      .then((response) => {
        console.log("resposta", response);
        this.$router.replace("produtos");
      }).catch((error) => {
        alert('Login ou password inválidos!');
        console.log(error);
      }); 


   }
  }
};

</script>

<style scoped>
main {
  background-color: var(--color-background-home);
  justify-content: center;
  align-items: center;
}
</style>
 