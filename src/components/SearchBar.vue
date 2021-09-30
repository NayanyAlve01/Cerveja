<template>
  <b-row>
    <div class="teor">
      <b-row class="ml-2">
        <b-button
          variant="outline-primary"
          class="ml-4"
          @click="teorComponent"
          name="teor"
          value="0"
        >
          0% - 10%
        </b-button>
        <b-button
          variant="outline-primary"
          class="ml-2"
          @click="teorComponent"
          name="teor"
          value="1"
          >10% - 55%
        </b-button>
      </b-row>
    </div>
    <div class="Busca">
      <b-row>
        <b-col>
          <b-form-input v-model="pesquisa" id="txtBusca"></b-form-input>
        </b-col>
        <b-button variant="outline-primary" class="mr-1" @click="buscaComponent"
          >Buscar</b-button
        >
        <b-button variant="outline-primary" @click="random"
          >Random</b-button
        >
      </b-row>
    </div>
  </b-row>
</template>
<script>
export default {
    
  name: "SearchBar",
  props: {
    teor: {
      type: Function,
    },
    busca: {
      type: Function,
    },
    random: {
        type: Function,
    },
  },
  data(){
      return{
           pesquisa: "",
           
      }
    
  },
  methods: {
    teorComponent(valor) {
      this.teor(valor);
    },
    buscaComponent(){
        this.busca(this.pesquisa)
    }
  },
};
</script>
<style scoped>
.teor {
  margin: 20px 120px;
  width: 20%;
}
.Busca {
  width: 50%;
  margin: 20px;
}
</style>