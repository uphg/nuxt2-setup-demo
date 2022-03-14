<template>
  <svg aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from '@nuxtjs/composition-api'
import type { PropType } from '@nuxtjs/composition-api'

const props = defineProps({
  name: {
    type: String as PropType<string>,
    default: ''
  }
})

const iconName = computed(() => `#icon-${props.name}`)
</script>
