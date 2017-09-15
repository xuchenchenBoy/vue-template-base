<template>
  <div class="hello">
    <h1 @click="doThing">{{ msg }}</h1>
    <h2>{{ message }}</h2>
    <h3>{{ asyncMsg }}</h3>
  </div>
</template>

<script>
export default {
  name: 'hello',
  props: ['message', 'asyncMsg'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    doThing () {
      console.log('click msg')
      this.$emit('onToggleClick', 'do doThing')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
