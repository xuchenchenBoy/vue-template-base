<template>
  <div>
    <div class="header">
      header
      <hello message="xuchenchen" :asyncMsg="asyncMsg" v-on:onToggleClick="onListenClick"></hello>
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
  created () {
    console.log('create this  = ', this)
  },
  updated () {
    console.log('updated')
  },
  destroyed () {
    console.log('destroyed')
  },
  components: {
    Hello
  },
  methods: {
    onListenClick (msg) {
      console.log('click parent = ', msg)
    }
  }
}
</script>

<style scoped>
  .header {
    padding: 5px
  }
</style>