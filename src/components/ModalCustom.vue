<template>
  <div class="modal-content">
    <div class="title">
      <h2> {{ name }}</h2>
    </div>
    <div class="descriptions">
      <div class="information">
        <p>tagline: {{ tagline }}</p>
        <p>Descrição: {{ description }}</p>
        <p>Volume: {{ volume }}</p>
        <p>ingredientes: {{ ingredients }}</p>
        <p>Food Pairing: {{ food_pairing }}</p>
      </div>
      <div class="description-img">
        <p>Imagem: {{ image_url }}</p>
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
.modal-content {
  border: 1px solid red;

  /* display: flex;
    justify-content: center;
    align-items: center; */
}
</style>

