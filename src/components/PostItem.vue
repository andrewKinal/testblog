<template>
  <div class="post_item">
    <h2>{{ upperCaseTitle }}</h2>
    <p>{{ cuttedBody }}</p>
    <MyButton @click="selectPost(post.id)">Read More</MyButton>
  </div>
</template>

<script>
import firstLetterToUpperCase from '@/utils'

export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      upperCaseTitle: firstLetterToUpperCase(this.post.title),
      cuttedBody: `${firstLetterToUpperCase(this.post.body.slice(0, 80))}...`,
    }
  },
  methods: {
    selectPost(id) {
      this.$router.push(`/post/${id}`)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins.scss';

.post_item {
  @include background;
  margin: 20px 0;
  border: 1px solid #999;
  padding: 10px;
}
</style>
