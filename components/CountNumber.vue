<template>
  <div>
    <p>{{ number }}</p>
    <p>{{ multiple }}</p>
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
