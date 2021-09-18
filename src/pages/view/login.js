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
    login () {
      api
        .post("/api/v1/auth/login", {
          username: this.form.username,
          password: this.form.password,
        })
        .then((response) => {
          // console.log("resposta", response.data.data.access_token);
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
