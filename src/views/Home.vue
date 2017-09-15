<template>
  <div>
    <div class="header">
      header
      <hello message="xuchenchen" :asyncMsg="asyncMsg" v-on:onToggleClick="onListenClick"></hello>
    </div>
    <div>
      {{`result-${content}`}}
    </div>
    <div>
      {{count}}
    </div>
    <div @click="doAction" class="tip">
      click here
    </div>
  </div>
</template>

<script>
import Hello from '../components/Hello.vue'
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      asyncMsg: 'hell0!',
      content: 'count:'
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
  computed: {
    ...mapState({
      count: (state) => state.homeVuex.count
    }),
    ...mapGetters(['getCount'])
  },
  methods: {
    doAction () {
      this.calcuate()
    },
    ...mapActions(['calcuate'])
  }
}
</script>

<style scoped>
  .header {
    padding: 5px
  }
  .tip {
    color: red;
  }
</style>