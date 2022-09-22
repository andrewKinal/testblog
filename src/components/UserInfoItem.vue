<template>
  <div class="content">
    <div
      class="content-item"
      v-for="(value, i) in content"
      :key="i"
    >
      <template v-if="!checkValueType(value)">
        <strong>{{i}}</strong>: {{value}}
      </template>
      <template v-else>
        <strong>{{i}}:</strong>
        <userInfoItem :content="value" />
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserInfoItem',
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
  methods: {
    checkValueType(v) {
      return typeof v === 'object'
    },
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/styles/mixins.scss';
.content {
  padding: 5px 10px;
}
</style>
