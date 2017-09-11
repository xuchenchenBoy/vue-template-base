<template>
  <div>
    <div class="header">
      header
      <hello></hello>
    </div>
    <div>
      content
    </div>
    <div>
      footer
    </div>
  </div>
</template>


<script>
import Hello from '../components/Hello.vue'

export default {
  components: {
    Hello
  }
}
</script>

<style scoped>
  .header {
    padding: 5px
  }
</style>