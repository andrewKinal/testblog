<template>
  <div class="author">
    Author: <MyButton @click="showUserInfo">{{ user.name }}</MyButton>
  </div>
  <MyDialog v-model:show="dialogVisible">
    <UserInfoItem :content="user" />
  </MyDialog>
</template>

<script>
import UserInfoItem from './UserInfoItem.vue'

export default {
  components: {
    UserInfoItem,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      dialogVisible: false,
    }
  },
  methods: {
    showUserInfo() {
      this.dialogVisible = true
    },
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/styles/mixins.scss';
.author {
  @include background;
  padding: 10px;
}
</style>
