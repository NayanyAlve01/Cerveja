<template>
  <main>
    <p>
      Pesquisa

      <input type="text" v-model="pesquisa" />
    </p>
    <section class="container">
      <h1>Produtos</h1>

      <section class="Produtos">
        <div v-for="(produto, index) in produtos" class="produto" :key="index">
          <!-- <a class="produto" :href="produto.beers" target="_blank">
            <img :src="produto.thumb" alt="produto.title" />
          </a>
          <div class="produto-link">{{ produto.beers }}</div> -->
          {{
              produto.name
              
          }}
          <img :src="produto.image_url" alt="produto.name" />
          {{
              produto.tagline
          
          }}
          
        </div>
      </section>
    </section>
  </main>
</template>

<script>
import api from "@/services/api.js";
export default {
  name: "Produtos",
  data() {
    return {
      produtos: [],
      pesquisa: "",
    };
  },
  beforeMount() {
    const token = "Bearer " + localStorage.getItem("token");
    const headers = {
      authorization: token,
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
}
.produto img {
  width: 100%;
}

.produto a {
  color: var(--color-text-dark);
  font-weight: 600;
  text-align: center;
}

@media (min-width: 700px) {
  .produtos {
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
  }
}
.produto {
  margin-right: 30px;
  width: 300px;
}
</style> 