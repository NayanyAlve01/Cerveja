<template>
  <main> 
      <div class="Login">
   <h1>Login</h1>
   <input type="text" placeholder="Usuario">
   <br>
    <input type="password" placeholder="Senha">
    <br>
    <div class="btn-login">
      <button>Login</button>
    </div>
    </div>
    <p>
        Você não tem conta?
        <a href="">crie uma conta</a>
    </p>
   
    </main>
</template>

<script>
import api from '@/services/api.js';
export default {
    name: 'Login',
    data(){
        return {
            Login: []
        }
    },
 mounted(){
     api.post('/api/v1/auth/login').then(response => {
         this.Login = response.data;
     });
 }
}
</script>

<style scoped>
main {background-color: var(--color-background-home);
justify-content: center;
align-items: center;
}


</style>
