<template>
  <el-container>
    <el-main>
      <PostsList />
    </el-main>
  </el-container>
</template>

<script>
// @ is an alias to /src
import PostsList from '@/components/PostsList.vue'

export default {
  name: 'home',
  components: {
    PostsList
  }
}
</script>
