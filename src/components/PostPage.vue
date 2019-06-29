<template>
<b-container fluid style='margin-top:10px'>
  <b-row >
    <b-col></b-col>
    <b-col cols="9" >
  <div class="home text-center" >
    <img :ref=item.subject.name :src=item.subject.icon height="100px" width="100px" />
    <h1>{{ item.title }} ({{item.degree}}°)</h1>
    <h4><i>{{ item.subject.name }}</i></h4>
  </div>
    <p>{{ item.content }}</p>
    <p>Authored by : {{ item.user.name }} <timeago :datetime="item.created_at" :auto-update="10"></timeago></p></b-col>
    <b-col></b-col>
  </b-row>
</b-container>
</template>

<script>
import getPost from '@/store/actions/getPost'

export default {
  name: 'PostPage',
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
