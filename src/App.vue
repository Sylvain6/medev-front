<template>
  <div id="app">
      <div class="container">
        <Header />
        <Body />
      </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Body from '@/components/Body'

export default {
  name: 'App',
  components: {
    Body,
    Header
  }
}
</script>

<style>
  @import './assets/sass/_styles.sass';

  *{
    box-sizing: border-box;
  }
#app {
  font-family: 'Circular Std Book', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

.container {
  display: flex;
  justify-content: center;
  max-width: 66.7%;
  flex-direction: column;
  margin-left: 325px;
}

</style>
