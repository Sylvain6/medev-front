<template>
<div>
    <h1>Voici les posts de bg</h1>
    <ul>
    <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="limit">
      <li v-for="item in items" :key="item.id">
        <a v-on:click="goTo(item.id)" ><b>TITLE : </b>{{ item.title }}</a>
        <p><b>CONTENT : </b>{{ item.content }}
        <img :ref=item.subject.name :src=item.subject.icon height="20px" width="20px" /></p>
      </li>
  </div>
    </ul>
    </div>
</template>

<script>
import Vue from 'vue'
import getPosts from '@/store/actions/getPosts'
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
      getPosts().then(res => {
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
  }
}
</script>

<style scoped>
a {
  cursor: pointer;
}
</style>
