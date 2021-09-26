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
    <!-- <modal min-height="600" name="" /> -->
    <div class="bg"></div>

    <div class="table-container">
      <div class="table-width">
        <b-table striped hover :items="this.beers">
          <template #cell(description)="data">
            <!-- <span v-html="data.value"></span>     -->
            <button @click="descriptionModal(data.value)">Descrição</button>
          </template>
        </b-table>
      </div>
    </div>
    <modal :beer="this.beer" />
  </main>
</template>

<script>
import api from "@/services/api.js";
import jwt_decode from "jwt-decode";
import { Modal, Header, Pagination } from "@/components";

export default {
  name: "beers",
  components: { Header, Modal },
  data() {
    return {
      beers: [],
      beer: {},
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
          console.log('REPONSE DATA: ', response.data);
          this.beers = response.data.map((value) => {
            const { name, first_brewed, abv, ibu, ph, attenuation_level, id } =
              value;
            // console.log("RESPONSE DATA: ", value);
            return {
              name,
              first_brewed,
              abv,
              ibu,
              ph,
              attenuation_level,
              description: id,
            };
          });
        })
        .catch((error) => {
          console.warn("Error", error);
        });
    }
  },

  methods: {
    // showDynamicComponentModal(id) {
    //   const endpoint = "/api/v1/beers/" + id;
    //   let stringIngredient = [];

    //   api
    //     .get(endpoint, { headers: this.headers })
    //     .then((response) => {
    //       const beer = response.data[0];
    //       for (const ingredient in beer.ingredients) {
    //         if (typeof beer.ingredients[ingredient] === "string") {
    //           stringIngredient.push(
    //             `${ingredient.toUpperCase()}: ${
    //               beer.ingredients[ingredient]
    //             }`
    //           );
    //         } else {
    //           const desc = beer.ingredients[ingredient].map((value) => {
    //             return `${value.name} - ${value.amount.value} ${value.amount.unit}`;
    //           });
    //           stringIngredient.push(`${ingredient.toUpperCase()}: ${desc}`);
    //         }
    //       }

    // this.$modal.show(ModalCustom, {
    //   name: beer.name,
    //   tagline: beer.tagline,
    //   description: beer.description,
    //   image_url: !beer.image_url
    //     ? require("../assets/images/img.png")
    //     : beer.image_url,
    //   volume: beer.volume,
    //   ingredients: stringIngredient,
    //   food_pairing: beer.food_pairing.join(),
    // });
    //     }).catch((error) => {
    //       console.warn("Error", error);
    //     });
    // },
    getRandomBeer() {
      const endpoint = "/api/v1/beers/random";
      api.get(endpoint, { headers: this.headers }).then((response) => {
        // this.showDynamicComponentModal(response.data[0].id);
        this.descriptionModal(response.data[0].id);
      });
    },
    getBeerName() {
      const name = this.pesquisa;
      const endpoint = `/api/v1/beers?beer_name=${name}`;
      api.get(endpoint, { headers: this.headers }).then((response) => {
        this.$nextTick(function () {
          this.beers = response.data;
          this.beers = this.beers.map((value) => {
            const {
              name,
              first_brewed,
              abv,
              ibu,
              ph,
              attenuation_level,
              id,
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
              description: id,
              // image: `<img src="${image_url}" height="100" />`,
            };
          });
        });
      });
    },
    teor(valor) {
      let teorBusca = "lt";

      if (valor.target.value[0] === "1") {
        teorBusca = "gt";
      }

      const endpoint = `/api/v1/beers?abv_${teorBusca}=10`;
      api.get(endpoint, { headers: this.headers }).then((response) => {
        this.$nextTick(function () {
          this.beers = response.data;
          this.beers = this.beers.map((value) => {
            const { name, first_brewed, abv, ibu, ph, attenuation_level, id } =
              value;
            console.log("RESPONSE DATA: ", value);
            return {
              name,
              first_brewed,
              abv,
              ibu,
              ph,
              attenuation_level,
              description: id,
            };
          });
        });
      });
    },
    async descriptionModal(id) {
      console.log("ID PARA MODAL: ", id);
      const endpoint = "/api/v1/beers/" + id;
      // let stringIngredient = [];

      await api.get(endpoint, { headers: this.headers }).then((response) => {
        const beer = response.data[0];
        this.beer = beer;
        console.log("BEER INGREDIENTES: ", beer.ingredients);
        this.beer.ingredients_malt = beer.ingredients.malt;
        this.beer.ingredients_hops = beer.ingredients.hops;
        this.beer.ingredients_yeast = beer.ingredients.yeast;
        //   for (const ingredient in beer.ingredients) {
        //     if (typeof beer.ingredients[ingredient] === "string") {
        //       stringIngredient.push(
        //         `${ingredient.toUpperCase()}: ${beer.ingredients[ingredient]}`
        //       );
        //     } else {
        //       const desc = beer.ingredients[ingredient].map((value) => {
        //         return `${value.name} - ${value.amount.value} ${value.amount.unit}`;
        //       });
        //       stringIngredient.push(`${ingredient.toUpperCase()}: ${desc}`);
        //     }
        //   }
      });
      this.$bvModal.show("modal-1");
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

.beer-propriedades {
  width: 80%;
}
.propriedade {
  display: flex;
  justify-content: space-between;
}

.beer-propriedades-main {
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

.beers {
  display: flex;
}
.beer {
  display: flex;
  justify-content: center;
  margin: 30px 40px;
  width: 340px;
  height: 160px;
  background: white;
  border-radius: 4px;
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.5);
}

.beer-container {
  margin: 10px 0;
  width: 82%;
}
.beer img {
  width: 30%;
}

@media (min-width: 700px) {
  .beers {
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

.table-container {
  display: flex;
  justify-content: center;
  margin-top: 18px;
}

.table-width {
  width: 80%;
}
</style> 
