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

    // ----------------------------------------------- test to use a api url base on environment variable
    // var apiUrlRegex = new RegExp('#apiUrl#', 'g')
    // var toSaveRequest = '#apiUrl#/(.*)'
    // var output = toSaveRequest.replace(apiUrlRegex, apiUrl)
    // -----------------------------------------------

    /* cache API calls */
    workbox.routing.registerRoute(
      new RegExp('https://agora-api-hetic.herokuapp.com/(.*)'),
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
