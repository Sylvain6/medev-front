<template>
<div>
  <b-button squared variant="info" v-b-modal.modal-lg style='margin-top:10px'>Create my own Post</b-button>
  <b-modal id="modal-lg" size="lg" title="Create a post" hide-footer>
  <div id="post">
  <p>Title :<b-form-input type="text" name="title" v-model="title" placeholder="Title" /></p>
    <p>Content :<b-form-textarea type="text" name="content" v-model="content" placeholder="Content" /></p>
      <p>Subject :<b-form-select id="subjectList" v-model="subject">
        <option v-for='subject in subjects' v-bind:value=subject.id v-bind:key=subject.id>
          {{subject.name}}
          </option>
    </b-form-select></p>
  <b-button squared variant="info" v-on:click="onSubmit()">Share</b-button>
  </div>
</b-modal>
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
</style>
