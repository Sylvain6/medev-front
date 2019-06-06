<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>{{ item.title }}</h1>
        {{ item.content }}
  </div>
</template>

<script>
import getPost from '@/store/actions/getPost'

export default {
  name: 'test',
  props: {
    id: {
      type: [Number, String],
      required: true
    }
  },
  created () {
    this.item = getPost(this.id).then(data => data).catch(err => { throw new Error('This post doesn\'t exist', err) })
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
