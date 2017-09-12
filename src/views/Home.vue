<template>
  <div>
    <div class="header">
      header
      <hello message="xuchenchen" :asyncMsg="asyncMsg"></hello>
    </div>
    <div>
      {{`content:${content}`}}
    </div>
    <div>
      footer
    </div>
  </div>
</template>


<script>
import Hello from '../components/Hello.vue'

export default {
  data () {
    return {
      asyncMsg: 'hell0!',
      content: 'my profile'
    }
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