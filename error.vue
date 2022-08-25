<template>
  
    <button @click="handleError">Clear errors</button>
    
    {{ error }}

   
</template>

<script setup>
import { createCacheExpression } from '@vue/compiler-core';
import { useHelloPlugin } from '~~/composables/useHelloPlugin'
const { doSomething } = useHelloPlugin()
const props = defineProps({
  error: Object
})

const { $hello } = useNuxtApp()
if (process.server) {
console.log('calling from error page, should have $hello object', $hello)
}

// try {
//   await doSomething()
// } catch (err){}
  

const handleError = () => clearError({ redirect: '/' })
</script>