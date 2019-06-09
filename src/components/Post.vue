<template>
  <div class="home">
    <img :ref=item.subject.name :src=item.subject.icon height="100px" width="100px" />
    <h1>{{ item.title }}</h1>
    <p>{{ item.content }}</p>
  </div>
</template>

<script>
import getPost from '@/store/actions/getPost'

export default {
  name: 'Post',
  props: {
    id: {
      type: [Number, String],
      required: true
    }
  },
  created () {
    getPost(this.id).then(data => { this.item = data }).catch(err => { throw new Error('This post doesn\'t exist', err) })
  },
  data () {
    return {
      item: {}
    }
  }
}
</script>

<style scoped>
a {
  cursor: pointer;
}
</style>
