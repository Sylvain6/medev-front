<template>
  <div id="login">
    <h1>Register</h1>
    <input type="text" name="name" v-model="name" placeholder="Name" />
    <input type="text" name="username" v-model="username" placeholder="Username" />
    <input type="text" name="email" v-model="email" placeholder="Email" />
    <input type="password" name="password" v-model="password" placeholder="Password" />
    <input type="password" name="password_confirmation" v-model="password_confirmation" placeholder="Password Confirmation" />
    <button type="button" v-on:click="onSubmit()">Register</button>
  </div>
</template>

<script>
import { register } from '@/store/actions'

export default {
  name: 'HelloWorld',
  data () {
    return {
      name: '',
      username: '',
      email: '',
      password: '',
      password_confirmation: ''
    }
  },
  methods: {
    onSubmit () {
      const { name,
        username,
        email,
        password, // eslint-disable-next-line
        password_confirmation } = this

      register({ name,
        username,
        email,
        password,
        password_confirmation }).then(() => this.$router.push('/login')).catch(err => console.log(err))
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
