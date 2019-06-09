<template>
  <div id="post">
    <input type="text" name="title" v-model="title" placeholder="Title" />
    <input type="text" name="content" v-model="content" placeholder="Content" />
      <select id="subjectList" v-model="subject">
        <option v-for='subject in subjects' v-bind:value=subject.id v-bind:key=subject.id>
          {{subject.name}}
          </option>
    </select>
    <button type="button" v-on:click="onSubmit()">Share</button>
  </div>
</template>

<script>
import { createPost, getSubjects } from '@/store/actions'
import store from '@/store'

export default {
  name: 'PostForm',
  data () {
    return {
      title: '',
      content: '',
      subjects: [],
      subject: ''
    }
  },
  methods: {
    onSubmit () {
      const { title, content, subject } = this
      // eslint-disable-next-line
      const { id: user_id } = store.state.user
      createPost({
        title,
        content,
        user_id,
        subject_id: subject
      }).then(() => this.$router.push('/')).catch(err => console.log(err))
    }
  },
  created () {
    getSubjects().then(data => {
      this.subjects = data
    }).catch(err => console.log(err))
  }
}
</script>

<style scoped>
a {
  cursor: pointer;
}
</style>
