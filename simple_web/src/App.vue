<template>
  <div id="app">
    <div class="center">
      <input v-model="text"/>
      <h2>Output: {{text}}</h2>
      <div>
        <button @click="reserve()">reverse</button>
        <button @click="clickMode()">undo/redo</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      text: '',
      delay: 250,
      clicks: 0,
      timer: null,
      tmp: []
    }
  },
  methods: {
    clickMode (e) {
      this.clicks++
      if (this.clicks === 1) {
        var self = this
        this.timer = setTimeout(function () {
          self.clicks = 0
          self.undo()
        }, this.delay)
      } else {
        clearTimeout(this.timer)
        this.clicks = 0
        this.redo()
      }
    },
    undo () {
      const array = this.text.split('')
      this.tmp.push(array[array.length - 1])
      array.pop()
      this.text = array.join('')
    },
    redo () {
      const array = this.text.split('')
      array.push(this.tmp[this.tmp.length - 1])
      this.tmp.pop()
      this.text = array.join('')
    },
    reserve () {
      const array = this.text.split('')
      const arrayReserve = array.reverse()
      this.text = arrayReserve.join('')
    }
  }
}
</script>

<style lang="scss">
body{
  margin: 0
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: #282C34;
  height: 100vh;
  display: flex;
}
.center {
  margin: auto;
}
</style>
