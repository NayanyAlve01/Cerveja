<template>
  <div class="example-modal-content">
    <h1>This is a custom component</h1>
    <p>{{ text }}</p>
    <p>{{ name }}</p>
    <p>{{ tagline }}</p>
    <p>{{ description }}</p>
    <p>{{ imagem }}</p>
    <p>{{ volume }}</p>
    <p>{{ ingredients }}</p>
    <p>{{ food_pairing }}</p>
  </div>
</template>

<script>
export default {
  props: ['text', 'name', 'tagline', 'description', 'imagem', 'volume', 'ingredients', 'food_pairing']
}
</script>