import axios from 'axios'
import login from './login'
import register from './register'
import posts from './getPosts'
import post from './getPost'
import createPost from './createPost'
import getSubjects from './getSubjects'
import getSubject from './getSubject'
import getUser from './getUser'
import addDegree from './addDegree'
import getDegree from './getDegree'
import deleteDegree from './deleteDegree'

const instance = axios.create({
  baseURL: 'http://localhost:3000'
})
const token = localStorage.getItem('user-token')
if (token) {
  instance.defaults.headers.common['Authorization'] = token
}

export default instance
export {
  login,
  register,
  posts,
  post,
  createPost,
  getSubjects,
  getSubject,
  addDegree,
  getDegree,
  deleteDegree,
  getUser
}
