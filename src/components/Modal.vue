<template>
  <b-modal id="modal-1" :title="name">
    <div>
      <div>
        <p><strong>Tagline: </strong> Nordic </p>
        <p><strong>Descrição:</strong> Cloudberry</p>
        <p><strong>Volume:</strong> 20 litres</p>
        <strong>Ingredientes: </strong>
        Malt: Extra pale - 4.25 Kg
        <p><strong>Food Pairing: </strong>Warms goats</p>
      </div>
      <!-- <div class="description-img"> -->
        <!-- <img :src="image_url" width="50%" /> -->
      <!-- </div> -->
    </div>
  </b-modal>
</template>

<script>
export default {
  name: "modal",
  props: ['name']
};
</script>
