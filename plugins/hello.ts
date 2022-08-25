export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.provide('hello',  (msg: string) => `Hello ${msg}!`)
  })