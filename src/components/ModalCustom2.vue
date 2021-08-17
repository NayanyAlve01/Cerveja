<template>
  <modal 
    name="ex-adaptive"
    :adaptive="true"
  >
    <div class="example-modal-content">
     <p> teste:{{text}}</p>
    </div>
  </modal>
</template>
<script>
export default {
  name: 'Modal_Adaptive',
  props: ['text']
}
</script>