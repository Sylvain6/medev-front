<template>
   <el-header>
     <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
       <el-menu-item index="1">
         <router-link to="/">Home</router-link>
       </el-menu-item>
       <el-menu-item index="2">
         <router-link to="/login">Login</router-link>
       </el-menu-item>
       <el-menu-item index="3">
         <router-link to="/register">Register</router-link>
       </el-menu-item>
       <el-menu-item index="4">
         <router-link v-if="isLoggedIn" to="/about">About</router-link>
       </el-menu-item>
       <el-menu-item index="5">
         <router-link v-if="isLoggedIn" @click="logout">Logout</router-link>
       </el-menu-item>
     </el-menu>
   </el-header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout').then(() => {
        this.$router.push('/login')
      })
    }
  },
  computed: {
    isLoggedIn () {
      return this.$store.getters.isLoggedIn
    }
  }
}
</script>

<style scoped>

</style>
