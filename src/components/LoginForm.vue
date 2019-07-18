<template>
  <div id="login">
    <h1>Login</h1>
    <el-form :label-position="labelPosition" status-icon :rules="rules" label-width="180px" ref="formLogin" :model="formLogin">
      <el-form-item label="Email" prop="email">
        <el-input v-model="formLogin.email" />
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input type="password" v-model="formLogin.password" show-password />
      </el-form-item>
      <el-button type="primary" @click="onSubmit('formLogin')">Login</el-button>
    </el-form>
  </div>
</template>

<script>
import { login } from '@/store/actions'

export default {
  name: 'Login',
  data () {
    return {
      labelPosition: 'left',
      formLogin: {
        email: '',
        password: ''
      },

      rules: {
        email: [
          { required: true, message: 'Please input an email address', trigger: 'blur' },
          { type: 'email', message: 'Please input a correct email address', trigger: ['blur', 'change'] }
        ],
        password: [
          { required: true, message: 'Please input a password', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit (formInput) {
      const {
        email,
        password
      } = this.formLogin

      this.$refs[formInput].validate((valid) => {
        if (valid) {
          login({ email, password }).then(() => this.$router.push('/')).catch(err => console.log(err))
        } else {
          return false
        }
      })
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
