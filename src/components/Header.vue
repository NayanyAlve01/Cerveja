<template>
  <header>
    <nav class="container">
      <div class="usuario">
        <div class="btn-sair">
          <b-link href="/" @click="logout">
            <b-icon-box-arrow-left></b-icon-box-arrow-left>
            <span> Sair </span>
          </b-link>
        </div>
     Bem vindo, {{ usuario }}
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  nome: "Header",
  props: ["usuario"],
  methods: {
    logout() {
      localStorage.clear();
    },
  },
};
</script>

<style scoped>
header {
  background-color: var(--color-background-nav);
  width: 100%;
  display: flex;
  justify-content: flex-end;
  box-shadow: 0 2px 3px rgba(10,10,10,.2);
  margin-bottom: 10px;
}

nav {
  margin: 4px 0;
  display: flex;
  justify-content: flex-end;
}

@media (min-width: 576px) {
}

.usuario {
  color: white;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  width: 250px;
}

.btn-sair {
  width: 30%;
  color: #0056b3;
}
</style>
