<template>
  <main>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="fonts/iconic/css/material-design-iconic-font.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/animate/animate.css">
  <!--===============================================================================================-->
	<link rel="stylesheet" type="text/styles" href="styles/util.css">
	<link rel="stylesheet" type="text/styles" href="styles/global.css">
<!--===============================================================================================-->

  </head>
    <div class="limiter">
      <div class="container-login100" style="background-image">
    <div class="Login" id="login">
     <span class="login100-form-title p-b-49">
						Login
					</span>
      
    <p>
      <span class="label-input100">Username</span>
      <br/>
      <input type="input100" placeholder="Username" v-model="form.username" /> 
  
      <br/>
      <span class="label-input100">Password</span>
      <br/>
      <input type="password" placeholder="password" v-model="form.password" />
      
      <br/> 
      
      <div class="btn-login">
        <button class="button button4" @click="login">Entrar</button>
      </div>
      </div>
      </div>
  </div>
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
  },
  methods: {
    submit (){
      console.log(this.from)
    },
    login: function () { api
      .post("/api/v1/auth/login", {
        username: this.form.username,
        password: this.form.password,
      })
      .then((response) => {
       // console.log("resposta", response.data.data.access_token);
        localStorage.setItem('token', response.data.data.access_token);
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
  background-color: var(--color-background);
  justify-content: center;
  align-items: center;
}

.button  {
  background-color: #2B3D50;
  border: none;
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 10px 60px;
  cursor: pointer;
  border-radius: 10px
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
  font-family: Poppins-Bold;
  font-size: 39px;
  color: #070707;
  line-height: 1.2;
  text-align: center;
}



/*------------------------------------------------------------------
[ Input ]*/

.wrap-input100 {
  width: 100%;
  position: relative;
  border-bottom: 2px solid #d9d9d9;
}

.label-input100 {
  font-family: Poppins-Regular;
  font-size: 14px;
  color: #333333;
  line-height: 1.5;
  padding-left: 7px;
}

.input100 {
  font-family: Poppins-Medium;
  font-size: 16px;
  color: #333333;
  line-height: 1.2;

  display: block;
  width: 100%;
  height: 55px;
  background: transparent;
  padding: 0 7px 0 43px;
}

/*---------------------------------------------*/
.focus-input100 {
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
}

.focus-input100::after {
  content: attr(data-symbol);
  font-family: Material-Design-Iconic-Font;
  color: #adadad;
  font-size: 22px;

  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: calc(100% - 20px);
  bottom: 0;
  left: 0;
  padding-left: 13px;
  padding-top: 3px;
}

.focus-input100::before {
  content: "";
  display: block;
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: #7f7f7f;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
}


.input100:focus + .focus-input100::before {
  width: 100%;
}

.has-val.input100 + .focus-input100::before {
  width: 100%;
}

.input100:focus + .focus-input100::after {
  color: #a64bf4;
}

.has-val.input100 + .focus-input100::after {
  color: #a64bf4;
}


</style>
 