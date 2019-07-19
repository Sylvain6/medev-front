<template>
<div>
    <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="limit">
      <div v-if="items.length > 0">
      <div v-for="item in items" :key="item.id" >
        <PostComponent :item=item></PostComponent>
  </div>
      </div>
    <div v-else class="text-center">
      <b-spinner variant="primary" label="Text Centered"></b-spinner>
    </div>
 </div>
</div>
</template>

<script>
import Vue from 'vue'
import { posts } from '@/store/actions'
import PostComponent from './Post'
import infiniteScroll from 'vue-infinite-scroll'
import store from '@/store'

Vue.use(infiniteScroll)

export default {
  name: 'PostList',
  data () {
    return {
      items: [],
      subjects: [],
      busy: false,
      limit: 20
    }
  },
  methods: {
    goTo (id) {
      this.$router.push({ name: 'post', params: { id: id } })
    },
    loadMore: function () {
      this.busy = true
      const append = store.state.posts.slice(this.items.length, this.items.length + this.limit)
      this.items = this.items.concat(append)
      this.busy = false
    },
    loadPosts () {
      posts().then(() => {
        this.loadMore()
      }).catch(err => { throw new Error('Getting posts failed', err) })
    }
  },
  created () {
    store.state.postLoad
      ? this.loadMore()
      : this.loadPosts()
  },
  components: { PostComponent }
}
</script>

<style scoped>
</style>
