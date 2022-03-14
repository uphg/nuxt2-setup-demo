<template>
  <div>
    <p>{{ number }}</p>
    <p>{{ multiple }}</p>
    <button class="btn">普通按钮</button>
  </div>
</template>

<script setup lang="ts">
import { PropType } from '@nuxtjs/composition-api'

defineProps({
  number: {
    type: Number as PropType<number>,
    default: 0
  },
  multiple: {
    type: Number,
    default: 0
  }
})

defineEmits(['2', '3'])
</script>

<style lang="scss">
.btn {
  cursor: pointer;
  border: 0;
  color: #fff;
  padding: 8px 16px;
  background-color: #485fc7;
  &:hover, &:focus {
    background-color: #3e56c4;
  }
  &:active {
    background-color: #3a51bb;
  }
}
</style>
