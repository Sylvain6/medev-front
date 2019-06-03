<template>
  <div id="login">
    <h1>Register</h1>
    <el-form :label-position="labelPosition" status-icon :rules="rules" label-width="180px" ref="formRegister" :model="formRegister">
      <el-form-item label="Name" prop="name">
        <el-input name="name" v-model="formRegister.name"></el-input>
      </el-form-item>
      <el-form-item label="Username" prop="username">
        <el-input v-model="formRegister.username"></el-input>
      </el-form-item>
      <el-form-item label="Email" prop="email">
        <el-input v-model="formRegister.email"></el-input>
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input type="password" v-model="formRegister.password" show-password></el-input>
      </el-form-item>
      <el-form-item label="Password Confirmation" prop="password_confirmation">
        <el-input type="password" v-model="formRegister.password_confirmation" show-password></el-input>
      </el-form-item>
      <el-button type="primary" @click="onSubmit('formRegister')">Register</el-button>
    </el-form>
  </div>
</template>

<script>

export default {
  name: 'Register',
  data () {
    let validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password'))
      } else {
        if (this.formRegister.password_confirmation !== '') {
          this.$refs.formRegister.validateField('password_confirmation')
        }
        callback()
      }
    }
    let validatorConfirmPassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password again'))
      } else if (value !== this.formRegister.password) {
        callback(new Error('Two inputs don\'t match!'))
      } else {
        callback()
      }
    }
    return {
      labelPosition: 'left',
      formRegister: {
        name: '',
        username: '',
        email: '',
        password: '',
        password_confirmation: ''
      },
      rules: {
        name: [
          { required: true, message: 'Please input a name', trigger: 'blur' }
        ],
        username: [
          { required: true, message: 'Please input a username', trigger: 'blur' }
        ],
        email: [
          { required: true, message: 'Please input an email address', trigger: 'blur' },
          { type: 'email', message: 'Please input a correct email address', trigger: ['blur', 'change'] }
        ],
        password: [
          { validator: validatePassword, required: true, trigger: 'blur' }
        ],
        password_confirmation: [
          { validator: validatorConfirmPassword, required: true, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit (formInput) {
      this.$refs[formInput].validate((valid) => {
        if (valid) {
          this.$store.dispatch('register', this.formRegister)
            .then(res => console.log(res)/* this.$router.push('/login') */)
            .catch(err => console.log(err))
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  a {
    color: #42b983;
  }

  label {
    width: auto;
  }

  .el-input {
    max-width: 25%;
  }
</style>
