<template>
  <div>
    <div class="header">
      <hello></hello>
    </div>
    <div>
      count:
    </div>
    <div>
      {{count}}
    </div>
    <div>
      <span class="btn" @click="doAddAction">+</span>
      <span class="btn" @click="doDECAction">-</span>
    </div>
    <div @click="doRequest">
      request status: {{status}}
    </div>
  </div>
</template>

<script>
import Hello from '../../components/Hello.vue'
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  components: {
    Hello
  },
  computed: {
    ...mapState({
      count: (state) => state.homeVuex.count,
      status: (state) => state.homeVuex.status
    }),
    ...mapGetters(['getCount'])
  },
  methods: {
    doAddAction () {
      this.calcuateAdd()
    },
    doDECAction () {
      this.calcuateDEC()
    },
    doRequest () {
      this.requestStatus()
    },
    ...mapActions(['calcuateAdd', 'calcuateDEC', 'requestStatus'])
  }
}
</script>

<style scoped>
  .header {
    padding: 5px
  }
  .btn {
    display: inline-block;
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 3;
    cursor: pointer;
  }
</style>