<template>
  <main>
    <section class="usurario">
      {{ usurario }}
    </section>

    <div id="divBusca">
      <input
        type="text"
        v-model="pesquisa"
        id="txtBusca"
        placeholder="Buscar..."
      />
      <button id="btnBusca">Buscar</button>
    </div>

    <h1>Produtos</h1>

    <div class="bg"></div>
    <section class="Produtos">
      <div v-for="(produto, index) in produtos" class="produto" :key="index">
        <!-- <a class="produto" :href="produto.beers" target="_blank">
            <img :src="produto.thumb" alt="produto.title" />
          </a>
          <div class="produto-link">{{ produto.beers }}</div> -->
        <p>
          {{ produto.name }}
        </p>
        <!-- <p>
          <img :src="produto.image_url" alt="produto.name" />
          </p> -->
        <p>
          {{ produto.first_brewed }}
        </p>
        <p>
          {{ produto.abv }}
        </p>
        <p>
          {{ produto.ibu }}
        </p>
        <p>
          {{ produto.ph }}
        </p>
        <p>
          {{ produto.attenuation_level }}
        </p>
      </div>
    </section>
  </main>
</template>

<script>
import api from "@/services/api.js";
import jwt_decode from "jwt-decode";

export default {
  name: "Produtos",

  data() {
    return {
      produtos: [],
      pesquisa: "",
      usurario: "",
    };
  },
  beforeMount() {
    const token = localStorage.getItem("token");
    const decoded = jwt_decode(token);

    this.usurario = decoded.user.name;

    const authorization = "Bearer " + token;
    const headers = {
      authorization: authorization,
    };

    api
      .get("/api/v1/beers", { headers })
      .then((response) => {
        this.produtos = response.data;
      })
      .catch((error) => {
        console.warn("Error", error);
      });
  },
};
</script>

<style scoped>
main {
  align-items: center;
   justify-content: center;
}

.produtos {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.produto {
  width: 80%;
  margin-bottom: 30px;
  display: inline-block;
  margin-right: 30px;
  width: 300px;
}
.produto img {
  width: 30%;
}

@media (min-width: 700px) {
  .produtos {
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    padding-left: 15px;
    padding-right: 15px;
  }
}
/* --------------------------------- pesquisa */
/* #divBusca {
  align-items: flex-end;
  background-color: #e0eeee;
  border: solid 2px #2b3d50;
  border-radius: 10px;
  width: 150px;
  height: 34px;
  justify-content: left;
  align-items: left;
}

#txtBusca {
  float: left;
  background-color: transparent;
  padding-left: 15px;
  font-size: 18px;
  border: none;
  height: 32px;
  width: 86px;
}

#btnBusca {
  border: none;
  float: left;
  height: 32px;
  border-radius: 0 7px 7px 0;
  width: 60px;
  font-weight: bold;
  background: #2b3d50;
} */

/* --------------------- */

.usurario {
  
  color: black;
  width: 100%;
  flex-direction: row;
  height: 80px;
  margin: 10;
  margin-left: 50px;

}
</style> 