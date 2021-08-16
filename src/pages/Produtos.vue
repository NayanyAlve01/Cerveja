<template>
  <main>

    <section class="container">
    {{ usurario }}
    </section>
    <p>
      Pesquisa

      <input type="text" v-model="pesquisa" />
    </p>
      <h1>Produtos</h1>

<div class='teste'>
  <h1>ABV</h1>
  <div class='tabs'>
    <div class='tab__item weak '>
      <h3>0% - 4.5%</h3>
    </div>
    <div class='tab__item medium active'>
      <h3>4.6% - 7.5%</h3>
    </div>
    <div class='tab__item strong'>
      <h3>7.6% - 50%</h3>
    </div>
  </div>
  
 
</div>
<div class='bg'></div>
      <section class="Produtos">
        <div v-for="(produto, index) in produtos" class="produto" :key="index">
          <!-- <a class="produto" :href="produto.beers" target="_blank">
            <img :src="produto.thumb" alt="produto.title" />
          </a>
          <div class="produto-link">{{ produto.beers }}</div> -->
         <p>
            {{ produto.name }}
         </p>
          <p>
          <img :src="produto.image_url" alt="produto.name" />
          </p>
          <p>
          {{ produto.tagline }}
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
  /* .produto {
  } */



@media (min-width: 700px) {
  .produtos {
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    padding-left: 15px;
    padding-right: 15px;
    
  
  }
}

/* -------------------------------- */

body {
  font-size: 14px;
  line-height: 1.462;
  font-family: Arial, sans-serif;
}
img {
  max-width: 100%;
}
.beers {
  display: grid;
  grid-template-columns: 32% 32% 32%;
  grid-gap: 18px;}

  .beer {
    background: #f9f9f9;
    padding: 7px;
    text-align: center;
    cursor: pointer;
    }

    .img {
      width: 20%;
    }
    .fa-star {
      float: right;
      color: #d6d6d6;
      cursor: pointer;
      font-size: 18px;
    }
  

.active-star {
  color: punk !important;
}
.tabs {
  display: grid;
  grid-template-columns: 32% 32% 32%;
  grid-gap: 2%;
  background: #000;
  text-align: center;
  padding: 2%;
  margin-bottom: 18px;
}
.tab__item {
  background: white;
  cursor: pointer;
  color: punk;
}
.container {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
}
.active {
  background: punk;
  color: #fff;
}
.pop-up {
  display: none;
  position: absolute;
  background: #000;
  color: #fff;
  font-size: 16px;
  transform: translate(-50%, -50%);
  left: 50%;
  padding: 3%;
  width: 55%;
  top: 100%;
  z-index: 99;
}
.fa-window-close-o {
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
}
.bg {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #00afdbd4;
  display: none;
}
.title {
  color: punk;
}
.favourites {
  display: none;
  background: punk;
  position: absolute;
  width: 100%;
  }
  img {
    width: 20%;
  }

.favourites__title {
  background: punk;
  display: inline-block;
  padding: 5px;
  color: #fff;
  margin: 0;
  cursor: pointer;
}
.favourites__item {
  text-align: center;
  display: inline-block;
  width: 20%;
}
.favourites__close {
  float: right;
  cursor: pointer;
}

</style> 