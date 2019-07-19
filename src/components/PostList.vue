<template>
<div id="postList">
  <h1>Posts</h1>
    <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="limit">
      <div v-if="items.length > 0">
        <div v-for="item in items" :key="item.id" >
          <PostComponent :item=item />
        </div>
      </div>
      <div v-else v-loading="busy" class="loader"></div>
    </div>
</div>
</template>

<script>
import Vue from 'vue'
import { posts } from '@/store/actions'
import PostComponent from './Post'
import infiniteScroll from 'vue-infinite-scroll'

Vue.use(infiniteScroll)

export default {
  name: 'PostList',
  data () {
    return {
      items: [],
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
      posts().then(res => {
        const append = res.slice(this.items.length, this.items.length + this.limit)
        this.items = this.items.concat(append)
        this.busy = false
      }).catch(err => {
        this.busy = false
        throw new Error('Failed getting posts', err)
      })
    } },
  created () {
    this.loadMore()
  },
  components: { PostComponent }
}
</script>

<style scoped>
  #postList {
    max-width: 1025px;
    margin-left: auto;
    margin-right: auto;
  }

  h1 {
    margin-bottom: 25px
  }

  .loader {
    margin-top: 25px
  }
</style>
