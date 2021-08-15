<template>
    <main>
       <p>
            Pesquisa
            
            <input type="text" v-model="pesquisa">
            </p>
        <section class="container">
            <h1>Produtos</h1>

        <section class="Produtos">
           <div v-for="(produtor, index) in produtor" class="produto" :key="index">
            <a class="produto" :href="produtor.beers" target="_blank">
                <img :src="produto.thumb" alt="produto.title">
                </a>
 <div class="produtos-link">{{produtos.beers}}
     </div>
 </div>
        </section>
        </section>
    </main>
</template>

<script>
import api from '@/services/api.js';
export default {
    name: 'Produtos',
    data(){
        return {
            produtos: [],
            pesquisa: ''
        
        }
    },
 mounted(){
     api.get('/api/v1/beers/1').then(response => {
         this.produtos = response.data;
     });
 }
}
</script>

<style scoped>

main{

    align-items: center;
}

.produtos {
    display: flex;
    flex-direction: column;
    align-items: center;

}
 .produto{
     width: 80%;
     margin-bottom: 30px;
 }
.produto img{
    width: 100%;

    
}

.produto a{
    color: var(--color-text-dark);
    font-weight: 600;
    text-align: center;
}

@media (min-width:700px){
    .produtos
   { flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    }
}
.produto{
    margin-right: 30px;
    width: 300px;
}
</style> 