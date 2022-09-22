import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: () => ({
    posts: [],
    user: [],
    comments: [],
    currentPost: [],
    isLoading: false,
    page: 1,
    limit: 10,
    totalPages: 0,
  }),
  getters: {
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts
    },
    setLoading(state, value) {
      state.isLoading = value
    },
    setPage(state, num) {
      state.page = num
    },
    setTotalPages(state, num) {
      state.totalPages = num
    },
    setCurrentPost(state, post) {
      state.currentPost = post
    },
    setComments(state, comments) {
      state.comments = comments
    },
    setUser(state, user) {
      state.user = user
    },
  },
  actions: {
    async fetchPosts({ state, commit }) {
      try {
        commit('setLoading', true)
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: state.page,
            _limit: state.limit,
          },
        })
        commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
        commit('setPosts', response.data)
      } catch (err) {
        console.error(err)
      } finally {
        commit('setLoading', false)
      }
    },
    async fetchPostData({ state, commit }, postId) {
      try {
        commit('setLoading', true)
        const post = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        commit('setCurrentPost', post.data)
        const comments = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        commit('setComments', comments.data)
        const user = await axios.get(`https://jsonplaceholder.typicode.com/users/${state.currentPost.userId}`)
        commit('setUser', user.data)
      } catch (err) {
        console.error(err)
      } finally {
        commit('setLoading', false)
      }
    },
  },
  modules: {
  },
});
