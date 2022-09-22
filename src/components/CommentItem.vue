<template>
  <div class="comment">
    <div class="email"><strong>{{ comment.email }}</strong></div>
    <div class="content">
      <div><strong>Name:</strong> {{ comment.name }}</div>
      <p>{{ comment.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.comment {
  margin-bottom: 1.2em;
  p {
    margin-left: 10px;
  }
}
</style>
