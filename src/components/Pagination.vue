    <template>
  <div class="text-xs-center">
    <v-pagination
      v-model="page"
      :length="4"
      circle
    ></v-pagination>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        pagination: 1
      }
    }
  }
</script>