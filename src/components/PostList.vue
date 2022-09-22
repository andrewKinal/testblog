<template>
  <div class="posts">
    <PostItem v-for="post of posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import PostItem from './PostItem.vue'

export default {
  components: {
    PostItem,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
}
</script>
