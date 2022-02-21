<template>
  <div>
    <p>{{ number }}</p>
    <p>{{ multiple }}</p>
  </div>
</template>

<script setup lang="ts">

defineProps({
  number: {
    type: Number,
    default: 0
  },
  multiple: {
    type: Number,
    default: 0
  }
})
</script>
