<template>
  <div>
    <h2>Hello World</h2>
    <p>{{ counts }}</p>
    <p>{{ message }}</p>
    <button @click="counts += 1">
      点击+1
    </button>
    <button @click="message = message === 'hello' ? 'hi' : 'hello'">
      点击打招呼
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from '@nuxtjs/composition-api'
// your script setup
const counts = ref(0)
const message = ref<'' | 'hi' | 'hello'>('')
</script>

<script lang="ts">
export default {
  name: 'HelloWorld'
}
</script>
