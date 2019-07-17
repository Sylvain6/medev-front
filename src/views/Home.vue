<template>
  <el-container>
    <el-main>
      <div v-if=userToken><PostForm /></div>
      <PostList />
    </el-main>
  </el-container>
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
 <style scoped>
</style>
