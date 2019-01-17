<template>
  <div>
    <div class="header">
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
      click here to request status: {{status}}
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions, mapState, mapGetters, } = createNamespacedHelpers('homeVuex')

export default {
  computed: {
    ...mapState({
      count: (state) => state.count,
      status: (state) => state.status
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
