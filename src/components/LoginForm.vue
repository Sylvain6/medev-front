<template>
  <div id="login">
    <h1>Login</h1>
    <input type="text" name="email" v-model="email" placeholder="Email" />
    <input type="password" name="password" v-model="password" placeholder="Password" />
    <button type="button" v-on:click="onSubmit()">Login</button>
  </div>
</template>

<script>
import { login } from '@/store/actions'

export default {
  name: 'HelloWorld',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    onSubmit () {
      const { email, password } = this
      login({ email, password }).then(() => this.$router.push('/')).catch(err => console.log(err))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
