<template>
  <div>
    <h2>Hello World AAA</h2>
    <p>{{ counts }}</p>
    <button @click="counts += 1">
      点击+1
    </button>
  </div>
</template>

<script setup>
import { ref } from '@nuxtjs/composition-api'
// your script setup
const counts = ref(0)
</script>

<script>
export default {
  name: 'HelloWorld'
}
</script>
