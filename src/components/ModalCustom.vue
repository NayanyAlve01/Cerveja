<template>
  <div class="modal-content">
    <div class="title">
      <h2>{{ name }}</h2>
    </div>
    <div class="descriptions">
      <div class="information">
        <p><strong>Tagline: </strong> {{ tagline }}</p>
        <p><strong>Descrição:</strong> {{ description }}</p>
        <p><strong>Volume:</strong> {{ volume.value + " " + volume.unit }}</p>
        <strong >Ingredientes: </strong>  
        <div v-for="(ingredient, index) in ingredients" :key="index"> {{ ingredient }}</div>
        <p><strong>Food Pairing: </strong>{{ food_pairing }}</p>
      </div>
      <div class="description-img">
        <img :src="image_url" width="50%" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "name",
    "tagline",
    "description",
    "image_url",
    "volume",
    "ingredients",
    "food_pairing",
  ],
};
</script>
<style scoped>
.description-img {
  max-width: 60%;
  display: flex;
  align-items: center;
}

.descriptions {
  display: flex;
}

.title {
  display: flex;
  justify-content: center;
}
.information {
  font-size: 10.5px;
  min-width: 50%;
}
</style>

