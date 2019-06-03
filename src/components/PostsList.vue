<template>
  <div id="posts" :v-if=posts>
    <h1>Posts</h1>
    <div :key="index" v-loading="isLoading" v-for="(post, index) in posts">
        <Post :title="post.title" :content="post.content"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import store from '@/store.js'
import Post from './Post'

export default {
  name: 'PostsList',
  components: {
    Post
  },
  store,
  data () {
    return {
      errors: [],
      isLoading: false
    }
  },

  computed: {
    ...mapGetters(['posts'])
  },

  mounted () {
    this.$store.dispatch('post')
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
