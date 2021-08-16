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
          <hr>
          <!-- <p>
          <img :src="produto.image_url" alt="produto.name" />
          </p> -->
          <p id="fb">
           Fabricado em:  {{ produto.first_brewed }}
          </p>
          <p id="abv">
           ABV: {{ produto.abv }}
          </p>
          <p id="ibu">
           IBU: {{ produto.ibu }}
          </p>
          <p id="ph">
            PH: {{ produto.ph }}
          </p>
          <p id="al">
            Attenuation Level: {{ produto.attenuation_level }}
          </p>
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
#fb{
  
}

#beer-name{
  font-weight: bold;
}

.produtos{
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