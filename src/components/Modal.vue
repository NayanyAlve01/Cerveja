<template>

  <b-modal id="modal-1" :title="beer.name" size="xl">
    <div class="descriptions">
    
      <div>
        <p><strong>Tagline: </strong> {{ beer.tagline }}</p>
        <p><strong>Descrição:</strong> {{ beer.description }}</p>
        <p>
          <strong>Volume:</strong>
          {{ beer.volume.value + " " + beer.volume.unit }}
        </p>
        <strong>Ingredientes: </strong>
        <p>{{ beer.ingredients_yeast }}</p>
        <div style="display: flex">
          <div style="border-right: 1px solid #999; padding-right: 12px; margin-right: 12px;">
            <div
              v-for="(ingredient, index) in beer.ingredients_malt"
              :key="index"
            >
              {{ ingredient.name }} - {{ ingredient.amount.value }}
              {{ ingredient.amount.unit }}
            </div>
          </div>
          <div>
            <div
              v-for="(ingredient, index) in beer.ingredients_hops"
              :key="index"
            >
              {{ ingredient.name }} - {{ ingredient.amount.value }}
              {{ ingredient.amount.unit }}: {{ ingredient.attribute }} |
              {{ ingredient.add }}
            </div>
          </div>
        </div>
        <div>
          <strong>Food Pairing: </strong>
          <ul
            v-for="(food, index) in beer.food_pairing"
            :key="index"
            class="food"
          >
            <li>
              {{ food }}
            </li>
          </ul>
        </div>
      </div>
      <div class="description-img">
        <img :src="beer.image_url" height="500" />
      </div>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: "modal",
  props: ["beer"],
};
</script>
<style scoped>


.description-img {
  border-left: 2px solid #999;
  padding-left: 10px;
  margin-left: 10px;
}

.descriptions {
  display: flex;
  flex-direction: row;
}

.food {
  padding-left: 20px;
  margin: 0;
}
</style>
