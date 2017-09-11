<template>
  <div>
    <div class="header">
      header
      <hello message="xuchenchen" :asyncMsg="asyncMsg"></hello>
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
  data: {
    asyncMsg: 'hell0!'
  },
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