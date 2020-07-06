const workboxBuild = require('workbox-build')

const buildSW = () => {
  workboxBuild
    .injectManifest({
      swSrc: 'src/sw-template.js', // sw template file
      swDest: 'build/service-worker.js', // file created in the build step
      globDirectory: 'build',
      globPatterns: ['**/*.{js,css,html,png,svg}'], // precaching files
    })
    .then(({ count, size, warnings }) => {
      // Optionally, log any warnings and details.
      warnings.forEach(console.warn)
      console.log(`${count} files will be precached, totaling ${size} bytes.`)
    })
    .catch(console.error)
}
buildSW()
