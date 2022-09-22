<template>
  <nav>
    <router-link to="/" class="link">Home</router-link>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins.scss';

nav {
  @include background;
  display: flex;
  align-items: center;
  justify-content: center;
}
.link {
  padding: 10px 0;
  text-decoration: none;
  color: white;
  transition: all ease-in-out .4s;
  &:hover {
    text-decoration: underline;
  }
}
</style>
