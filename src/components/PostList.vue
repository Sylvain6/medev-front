<template>
<div>
    <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="limit">
      <div v-if="items.length > 0">
      <div v-for="item in items" :key="item.id" >
        <PostComponent :item=item></PostComponent>
          <!-- <b-card :img-src="item.subject.icon"
                  img-height="200"
                  img-width="200"
                  img-alt="Card image"
                  img-left class="mb-3"
                  :title="item.title"
                  :sub-title="'Subject : ' + item.subject.name"
                  style="margin-top:23px" >
            <b-card-text>{{ item.content.substring(0,85) + '...' }}
            <b-link class="card-link" v-on:click="goTo(item.id)">See more</b-link>
            </b-card-text>
            <b-card-text>
              <b-button squared variant="info" v-on:click="postDegree('negative', item.id)">-</b-button>
                {{ item.degree }}°
              <b-button squared variant="info" v-on:click="postDegree('positive', item.id)">+</b-button>
            </b-card-text>

          </b-card> -->
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
</style>
