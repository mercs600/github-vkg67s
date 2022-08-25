
import { isEqual } from 'ufo'
import { useHelloPlugin } from '~~/composables/useHelloPlugin'

export default defineNuxtRouteMiddleware(async (to, from) => {
    
    const router = useRouter()
    const { doSomething } = useHelloPlugin()

    router.onError((err) => {
        return createError({
            statusCode: 404,
            statusMessage: 'Page Not Found',
            fatal: true
          })
    })


    // if (process.server) {
    //     await doSomething()
    // }
        
    
    if (process.server) {
        console.log('should call once for ssr')
        await doSomething()
    }
    
    
  })
  
  