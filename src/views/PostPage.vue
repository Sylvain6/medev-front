<template>
  <PostPage :id=id />
</template>

<script>
import PostPage from '../components/PostPage'
export default {
  name: 'PostView',
  components: { PostPage },
  data () {
    return {
      id: this.$route.params.id
    }
  }
}
</script>

<style scoped>

</style>
