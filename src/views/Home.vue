<template>
  <el-container>
    <el-main>
      <PostList />
    </el-main>
  </el-container>
</template>

<script>
import PostList from '@/components/PostList'

export default {
  name: 'home',
  components: { PostList }
}
</script>
 <style scoped>
   .postList {
     max-width: 1025px;
   }
</style>
