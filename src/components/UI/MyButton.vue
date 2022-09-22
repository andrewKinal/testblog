<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'MyButton',
  props: {
    color: {
      type: String,
      default: 'white',
    },
  },
}
</script>

<style lang="scss" scoped>
button {
  outline: none;
  background: transparent;
  border: 1px solid transparent;
  padding: 5px 10px;
  transition: all ease-in-out .2s;

  &:hover {
    cursor: pointer;
    color: white;
    border: 1px solid white;
  }
}
.current-page {
  border-color: red;
}
</style>
