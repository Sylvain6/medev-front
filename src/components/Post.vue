<template>
<div>
          <b-card no-body
                  :img-src="item.subject.icon"
                  img-height="200"
                  img-width="200"
                  img-alt="Card image"
                  img-left class="mb-3"
                  :sub-title="`Subject : ${item.subject.name}`"
                  style="margin-top:23px" >
              <p></p>
              <b-card-body :title="item.title">
          <b-card-text>
           <p> <i>Subject : {{item.subject.name}}, Weather : </i><img :src="imgLink" width="20" height="20" /></p>
            {{ item.content.substring(0,85) + '...' }}
            <b-link class="card-link" v-on:click="handleRedirection()">
              See more</b-link>
          </b-card-text>
          <b-card-text>
              <b-button squared variant="info" v-on:click="postDegree('negative', item.id)">-</b-button>
                {{ degree }}°
              <b-button squared variant="info" v-on:click="postDegree('positive', item.id)">+</b-button>
          </b-card-text>
          <b-card-text>
            <i>Authored by {{item.user.name}} <timeago :datetime="item.created_at" :auto-update="10"></timeago></i>
          </b-card-text>
        </b-card-body>

          </b-card>
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

</style>
