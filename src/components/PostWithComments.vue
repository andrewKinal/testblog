<template>
  <div v-if="!isLoading">
    <div class="post-item" >
      <h2>{{ currentPost.title }}</h2>
      <p>{{ currentPost.body }}</p>
      <UserInfo :user="user" />
    </div>
    <CommentItem
      v-for="comment of comments"
      :key="comment.id"
      :comment="comment"
    />
  </div>
  <MyPreloader v-else />
</template>

<script>
import { mapState, mapActions } from 'vuex'

import UserInfo from './UserInfo.vue'
import CommentItem from './CommentItem.vue'

export default {
  components: {
    UserInfo,
    CommentItem,
  },
  methods: {
    ...mapActions({
      fetchPostData: 'fetchPostData',
    }),
  },
  computed: {
    ...mapState({
      currentPost: (state) => state.currentPost,
      user: (state) => state.user,
      comments: (state) => state.comments,
      isLoading: (state) => state.isLoading,
    }),
  },
  mounted() {
    this.fetchPostData(this.$route.params.id)
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.post-item {
  margin: 20px 0;
  border: 1px solid $darker-blue-color;
  h2, p {
    padding: 10px;
  }
}
</style>
