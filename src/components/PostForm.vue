<template>
<div id="post">
  <el-button @click="dialogVisible = true">Create my own Post</el-button>
  <el-dialog title="Create Post" :visible.sync="dialogVisible">
    <div>
      <el-form label-position="labelPosition" status-icon :rules="rules" label-width="180px" ref="formPost" :model="formPost">
        <el-form-item label="Title" prop="title">
          <el-input v-model="formPost.title" clearable/>
        </el-form-item>
        <el-form-item label="Content" prop="content">
          <el-input v-model="formPost.content" clearable/>
        </el-form-item>
        <el-select v-model="value" placeholder="Select">
          <el-option
            v-for='subject in subjects'
            :key="subject.id"
            :label="subject.name"
            :value="subject.id">
            {{subject.name}}
          </el-option>
        </el-select>
      </el-form>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">Annuler</el-button>
    <el-button type="primary" @click="onSubmit()">Share</el-button>
  </span>
    </div>
  </el-dialog>
</div>
</template>

<script>
import { createPost, getSubjects } from '@/store/actions'
import store from '@/store'

export default {
  name: 'PostForm',
  data () {
    return {
      formPost: {
        title: '',
        content: '',
        subjects: [],
        subject: ''
      },
      labelPosition: 'left',
      dialogVisible: false
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
