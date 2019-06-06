<template>
  <thePost :id=id />
</template>

<script>
import thePost from '../components/Post'
export default {
  name: 'Post',
  components: { thePost },
  data () {
    return {
      id: this.$route.params.id
    }
  }
}
</script>

<style scoped>

</style>
