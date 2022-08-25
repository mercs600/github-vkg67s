

export const useHelloPlugin = () => {
    const { $hello } = useNuxtApp()

    const doSomething = async () => {
        console.log('calling from composable', $hello)
        const data = await $fetch.raw('https://api.t3pwa.com/404')
        return data
    }
    return {
        doSomething
    }
}