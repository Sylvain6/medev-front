<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  <div v-if=userToken><PostForm /></div>
  <PostList />
  </div>
</template>

<script>
import PostList from '@/components/PostList'
import PostForm from '@/components/PostForm'

export default {
  name: 'home',
  components: { PostList, PostForm },
  data () {
    return {
      userToken: !!localStorage.getItem('user-token')
    }
  }
}
</script>
