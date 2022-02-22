<template>
  <div>
    <h2>Hello World</h2>
    <p>{{ counts }}</p>
    <p>{{ message }}</p>
    <el-button @click="counts += 1">
      点击+1
    </el-button>
    <el-button @click="message = message === 'hello' ? 'hi' : 'hello'">
      点击打招呼
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from '@nuxtjs/composition-api'
// your script setup
const counts = ref(0)
const message = ref<'hi' | 'hello'>('hello')
</script>

<script lang="ts">
export default {
  name: 'HelloWorld'
}
</script>
