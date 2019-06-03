import axios from 'axios'

const post = async ({ commit }) => {
  let url = new URL('/posts', process.env.VUE_APP_BACKEND_PROXY)
  let postData = await axios({
    method: 'get',
    headers: { 'content-type': 'application/vnd.api+json' },
    url: url.toString()
  })
  if (postData.status === 200) {
    let { data } = postData
    commit('fetch_posts', data)
  } else {
    console.log(postData)
  }
}

export default post
