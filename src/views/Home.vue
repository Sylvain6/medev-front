<template>
<b-container fluid>
  <div v-if=userToken><PostForm /></div>
  <b-row >
    <b-col></b-col>
    <b-col cols="9"><PostList /></b-col>
    <b-col></b-col>
  </b-row>
</b-container>
</template>

<script>
import PostList from '@/components/PostList'
import PostForm from '@/components/PostForm'

export default {
  name: 'home',
  components: { PostList, PostForm },
  data () {
    return {
      userToken: !!localStorage.getItem('user-token')
    }
  }
}
</script>
 <style scoped>
</style>
