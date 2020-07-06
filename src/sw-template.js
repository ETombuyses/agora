// ERROR: cannot use import statement outside a module
// import { apiUrl } from './tools/apiConfig'

if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  )
  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded')
    workbox.core.skipWaiting()

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute(self.__WB_MANIFEST)

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    )
    // -----------------------------------------------
    // // ERROR: cannot use import statement outside a module@
    // var apiUrlRegex = new RegExp('#apiUrl#', 'g')
    // var toSaveRequest = '#apiUrl#/(.*)'
    // var output = toSaveRequest.replace(apiUrlRegex, apiUrl)

    // -----------------------------------------------

    // cach réponses API
    workbox.routing.registerRoute(
      // TODO: replace static url by variable
      new RegExp('http://192.168.1.15:8000/(.*)'),
      new workbox.strategies.NetworkFirst({
        cacheName: 'apiRequests',
        method: 'GET',
        cacheableResponse: { statuses: [0, 200] },
      })
    )
  } else {
    console.log('Workbox could not be loaded. No Offline support')
  }
}
