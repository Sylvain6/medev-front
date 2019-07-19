<template>
<div>
  <el-card>
    <el-row :gutter="20">
      <el-col :span="4">
        <img :src="item.subject.icon" class="image" alt="Card image">
      </el-col>
      <el-col :span="16">
        <h4>{{item.title}}</h4>
        <p>
          <i>Subject : {{item.subject.name}}, </i>
          <i class="icon-newline"> Weather : </i>
          <img :src="imgLink" width="20" height="20" />
        </p>
          {{ item.content.substring(0,85) + '...' }}
        <el-link class="link-post" @click="handleRedirection()">
          See more
        </el-link>
        <p class="degrees">
          <el-button type="primary" icon="el-icon-minus" @click="postDegree('negative', item.id)" circle></el-button>
          {{ degree }}
          <el-button type="primary" icon="el-icon-plus" @click="postDegree('positive', item.id)" circle></el-button>
        </p>
        <p>
          <i>Authored by {{item.user.name}} <timeago :datetime="item.created_at" :auto-update="10"></timeago></i>
        </p>
      </el-col>
    </el-row>
  </el-card>
</div>
</template>

<script>
import { addDegree, post, getSubject } from '@/store/actions'
import getSubjectWeather from '@/Utils/getSubjectWeather'
import store from '@/store'

export default {
  name: 'PostComponent',
  data () {
    return {
      degree: this.item.degree,
      imgLink: ''
    }
  },
  props: {
    item: {
      required: true
    }
  },
  methods: {
    postDegree (increment, postId) {
      // eslint-disable-next-line
      const { id: user_id } = store.state.user
      addDegree({
        positive: increment,
        user_id,
        post_id: postId
      }).then(res => {
        post(this.item.id).then(data => {
          this.degree = data.degree
        }).catch(err => console.log(err))
      }).catch(err => console.log(err))
    },
    handleRedirection () {
      this.$router.push({ name: 'post', params: { id: this.item.id } })
    } },
  created () {
    getSubject(this.item.subject.id)
      .then(res => { this.imgLink = require('../assets/weather/' + getSubjectWeather(res.degree_total) + '.svg') })
      .catch(err => { console.error(err) })
  }
}
</script>

<style scoped>
.image {
  display: block;
  width: 150px;
  height: 150px
}
.link-post{
  color: #1E88DE !important;
  font-size: 16px
}
.degrees {
  padding: 10px 0 10px
}
.icon-newline {
  white-space:nowrap;
}
</style>
