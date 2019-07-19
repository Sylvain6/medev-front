<template>
  <div id="app">
    <div class="container">
      <template>
        <el-header>
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1">
              <router-link to="/">Home</router-link>
            </el-menu-item>
            <el-menu-item v-if="!isLoggedIn" index="2">
              <router-link to="/login">Login</router-link>
            </el-menu-item>
            <el-menu-item v-if="!isLoggedIn" index="3">
              <router-link to="/register">Register</router-link>
            </el-menu-item>
            <el-menu-item v-if="isLoggedIn" index="4">
              <div @click="logout()">Logout</div>
            </el-menu-item>
          </el-menu>
        </el-header>
      </template>
      <router-view />
    </div>
  </div>
</template>

<script>
import { logout } from '@/store/actions'

export default {
  name: 'App',
  data () {
    return {
      activeIndex: '1',
      isLoggedIn: this.$store.state.isLoggedIn
    }
  },
  methods: {
    logout () {
      const isLoggedIn = this.$store.state.isLoggedIn
      if (isLoggedIn) {
        logout()
        this.$router.push('/login')
        location.reload()
      }
    }
  }
}
</script>

<style>
  @import './assets/sass/_styles.sass';

  * {
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
