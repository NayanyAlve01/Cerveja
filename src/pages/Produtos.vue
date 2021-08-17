<template>
  <main>
    <section class="usurario">
      {{ usurario }}
    </section>

    <section class="divBusca">
      <input
        type="text"
        v-model="pesquisa"
        id="txtBusca"
        placeholder="Buscar..."
      />
      <button id="btnBusca">Buscar</button>
    </section>
    <h1>Produtos</h1>

    <div class="bg"></div>
    <section class="produtos">
      <div v-for="(produto, index) in produtos" class="produto" :key="index">
        <div class="produto-container">
          <!-- <a class="produto" :href="produto.beers" target="_blank">
            <img :src="produto.thumb" alt="produto.title" />
          </a>
          <div class="produto-link">{{ produto.beers }}</div> -->
          <p id="beer-name">
            {{ produto.name }}
          </p>
          <hr />
          <div class="produto-propriedades-main">
            <div class="produto-propriedades">
              <!-- <p>
          <img :src="produto.image_url" alt="produto.name" />
          </p> -->
              <div class="propriedade" id="fb">
                <div>Fabricado em:</div>
                <div>{{ produto.first_brewed }}</div>
              </div>
              <div class="propriedade" id="abv">
                <div>ABV:</div>
                <div>{{ produto.abv }}</div>
              </div>
              <div class="propriedade" id="ibu">
                <div>IBU:</div>
                <div>{{ produto.ibu }}</div>
              </div>
              <div class="propriedade" id="ph">
                <div>PH:</div>
                <div>{{ produto.ph }}</div>
              </div>
              <div class="propriedade" id="al">
                <div>Attenuation Level:</div>
                <div>{{ produto.attenuation_level }}</div>
              </div>
              <hr />
            </div>
          </div>
            <div class="btn-descricao">
              <button id="descricao">Descrição</button>
            </div>
        </div>
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
/* .produtos {
  display: flex;
  flex-direction: column;
  align-items: center;
} */

.btn-descricao{
  display: flex;
  justify-content: center;
  width: 100%;

}

#descricao {
  color: white;
  background-color: #005eff;
  border: none;
  padding: 6px 7px;
  margin: 6px;
  border-radius: 4px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
  

}

.produto-propriedades {
  width: 80%;
  
}
.propriedade {
  display: flex;
  justify-content: space-between;
}

.produto-propriedades-main {
  display: flex;
  justify-content: center;
  
  
}

#beer-name {
  font-weight: bold;
  text-align: center;
}

.produtos {
  display: flex;
}
.produto {
  display: flex;
  justify-content: center;
  margin: 30px 40px;
  width: 340px;
  height: 160px;
  background: white;
  border-radius: 4px;
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.5);
}

.produto-container {
  margin: 10px 0;
  width: 82%;
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
.divBusca {
  border-radius: 10px;
  height: 34px;
  text-align: right;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin-top: -15px;
}

.usurario {
  color: white;
  width: 100%;
  flex-direction: row;
  height: 50px;
  margin-left: 20px;
  margin-top: -22px;
}
</style> 