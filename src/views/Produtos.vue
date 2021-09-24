<template>
  <main>
    <Header :usuario="this.usuario" />

    <b-row style="display: flex; justify-content: space-between">
      <b-row class="ml-2">
        <b-button
          variant="outline-primary"
          class="ml-4"
          @click="teor"
          name="teor"
          value="0"
        >
          0% - 10%
        </b-button>
        <b-button
          variant="outline-primary"
          class="ml-2"
          @click="teor"
          name="teor"
          value="1"
          >10% - 55%
        </b-button>
      </b-row>
      <div class="Busca">
        <b-row>
          <b-col>
            <b-form-input v-model="pesquisa" id="txtBusca"></b-form-input>
          </b-col>
          <b-button variant="outline-primary" class="mr-1" @click="getBeerName"
            >Buscar</b-button
          >
          <b-button variant="outline-primary" @click="getRandomBeer"
            >Random</b-button
          >
        </b-row>
      </div>
    </b-row>
    <modal min-height="600" name="" />
    <div class="bg"></div>

    <div>
      <b-table striped hover :items="this.produtos">
        <template #cell(image)="data">
        <span v-html="data.value"></span>
      </template>
      </b-table>
    </div>
  </main>
</template>

<script>
import api from "@/services/api.js";
import jwt_decode from "jwt-decode";
import Pagination from "../components/Pagination";
import ModalCustom from "../components/ModalCustom";
import Header from "@/components/Header";

export default {
  name: "Produtos",
  components: { Header },
  data() {
    return {
      produtos: [],
      pesquisa: "",
      usuario: "",
      showModal: false,
      headers: {},
      page: 1,
      decoded: {},
      Pagination,
    };
  },
  created() {
    setInterval(() => {
      this.canBeShown = !this.canBeShown;
    }, 5000);
  },

  beforeMount() {
    const token = localStorage.getItem("token");

    if (!token) {
      document.location.pathname = "/";
    } else {
      this.decoded = jwt_decode(token);
      this.usuario = this.decoded.user.name;

      const authorization = "Bearer " + token;
      this.headers = {
        authorization: authorization,
      };

      api
        .get("/api/v1/beers", { headers: this.headers })
        .then((response) => {
          this.produtos = response.data;
          this.produtos = this.produtos.map((value) => {
            const {
              name,
              first_brewed,
              abv,
              ibu,
              ph,
              attenuation_level,
              // image_url,
            } = value;
            console.log("RESPONSE DATA: ", value);
            return {
              name,
              first_brewed,
              abv,
              ibu,
              ph,
              attenuation_level,
              // image: `<img src="${image_url}" height="100" />`,
            };
          });
        })
        .catch((error) => {
          console.warn("Error", error);
        });
    }
  },

  methods: {
    showDynamicComponentModal(id) {
      const endpoind = "/api/v1/beers/" + id;
      let stringIngredient = [];

      api
        .get(endpoind, { headers: this.headers })
        .then((response) => {
          const produto = response.data[0];
          for (const ingredient in produto.ingredients) {
            if (typeof produto.ingredients[ingredient] === "string") {
              stringIngredient.push(
                `${ingredient.toUpperCase()}: ${
                  produto.ingredients[ingredient]
                }`
              );
            } else {
              const desc = produto.ingredients[ingredient].map((value) => {
                return `${value.name} - ${value.amount.value} ${value.amount.unit}`;
              });
              stringIngredient.push(`${ingredient.toUpperCase()}: ${desc}`);
            }
          }

          this.$modal.show(ModalCustom, {
            name: produto.name,
            tagline: produto.tagline,
            description: produto.description,
            image_url: !produto.image_url
              ? require("../assets/images/img.png")
              : produto.image_url,
            volume: produto.volume,
            ingredients: stringIngredient,
            food_pairing: produto.food_pairing.join(),
          });
        })

        .catch((error) => {
          console.warn("Error", error);
        });
    },
    getRandomBeer() {
      const endpoind = "/api/v1/beers/random";
      api.get(endpoind, { headers: this.headers }).then((response) => {
        this.showDynamicComponentModal(response.data[0].id);
      });
    },
    getBeerName() {
      const name = this.pesquisa;
      const endpoind = `/api/v1/beers?beer_name=${name}`;
      api.get(endpoind, { headers: this.headers }).then((response) => {
        this.$nextTick(function () {
          this.produtos = response.data;
        });
      });
    },
    teor(valor) {
      let teorBusca = "lt";

      if (valor.target.value[0] === "1") {
        teorBusca = "gt";
      }

      const endpoind = `/api/v1/beers?abv_${teorBusca}=10`;
      api.get(endpoind, { headers: this.headers }).then((response) => {
        this.$nextTick(function () {
          this.produtos = response.data;
        });
      });
    },
  },
};
</script>


<style scoped>
.btn-descricao {
  display: flex;
  justify-content: center;
  width: 100%;
}

.descricao {
  color: white;
  background-color: #8b8989;
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

.Busca {
  width: 60%;
  margin-right: 40px;
}
/* .... */

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

.modal-content {
  height: 100%;
  width: 100%;
}

.submit {
  margin: 55px;
  display: table-column-group;
}
</style> 