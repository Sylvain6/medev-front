<template>
<div id="postList">
  <el-row :gutter="23">
    <el-col :span="18"> <h1>Posts</h1></el-col>
    <el-col :span="5">
      <div v-if=userToken>
        <PostForm />
      </div>
    </el-col>
  </el-row>
    <el-row :gutter="20">
      <el-col>
        <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="limit">
          <div v-if="items.length > 0">
            <div v-for="item in items" :key="item.id" >
              <PostComponent :item=item />
            </div>
          </div>
          <div v-else v-loading="busy" class="loader"></div>
        </div>
      </el-col>
    </el-row>
</div>
</template>

<script>
import Vue from 'vue'
import { posts } from '@/store/actions'
import PostComponent from './Post'
import PostForm from '@/components/PostForm'
import infiniteScroll from 'vue-infinite-scroll'

Vue.use(infiniteScroll)

export default {
  name: 'PostList',
  data () {
    return {
      items: [],
      busy: false,
      limit: 20,
      userToken: !!localStorage.getItem('user-token')
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
  components: { PostComponent, PostForm }
}
</script>

<style scoped>
  #postList {
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
