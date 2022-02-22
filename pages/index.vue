<template>
  <div>
    <svg-icon name="dayu" />
    <HelloWorld />
    <CountNumber :number="12" :multiple="20" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage'
})
</script>
