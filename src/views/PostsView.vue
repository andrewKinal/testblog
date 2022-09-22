<template>
  <h1>Blog</h1>
  <PostList v-if="!isLoading" :posts="posts" />
  <MyPreloader v-else />
  <div class="pagination__wrapper" v-if="!isLoading">
    <MyButton
      v-for="pageNumber in totalPages"
      :key="pageNumber"
      class="page"
      :class="{ 'current-page': page === pageNumber }"
      @click="setPage(pageNumber)"
    >
      {{ pageNumber }}
    </MyButton>
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue'
import { mapActions, mapMutations, mapState } from 'vuex'

export default {
  components: {
    PostList,
  },
  methods: {
    ...mapActions({
      fetchPosts: 'fetchPosts',
      changePage: 'changePage',
    }),
    ...mapMutations({
      setPage: 'setPage',
    }),
  },
  mounted() {
    this.fetchPosts()
  },
  computed: {
    ...mapState({
      posts: (state) => state.posts,
      isLoading: (state) => state.isLoading,
      page: (state) => state.page,
      limit: (state) => state.limit,
      totalPages: (state) => state.totalPages,
    }),
  },
  watch: {
    page() {
      this.fetchPosts()
    },
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/styles/mixins.scss';

.pagination__wrapper {
  @include background;
  display: flex;
  margin-top: 15px;
  padding: 10px;
  justify-content: center;
}
</style>
