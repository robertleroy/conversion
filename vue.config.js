module.exports = {
  // ...other vue-cli plugin options...
  pwa: {
    name: 'My App',
    themeColor: '#000000',
    msTileColor: '#ffffff',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // configure the workbox plugin
    // workboxPluginMode: 'InjectManifest',
    // workboxOptions: {
    //   // swSrc is required in InjectManifest mode.
    //   swSrc: 'dev/sw.js',
    //   // ...other Workbox options...
    // },
    manifestOptions: {
      background_color: "#000000"
    }
  }
}

// module.exports = {
//   // ...other vue-cli plugin options...
//   pwa: {
//     name: 'Conversion',
//     themeColor: '#000000',
//     msTileColor: '#ffffff',
//     appleMobileWebAppCapable: 'yes',
//     appleMobileWebAppStatusBarStyle: 'black',

//     // configure the workbox plugin
//     workboxPluginMode: 'InjectManifest',
//     workboxOptions: {
//       // swSrc is required in InjectManifest mode.
//       swSrc: 'dev/sw.js',
//       // ...other Workbox options...
//     },
//     manifestOptions: {
//       name: pwa.name,
//       short_name: pwa.name,
//       start_url: '.',
//       display: 'standalone',
//       theme_color: pwa.themeColor,
//       background_color: pwa.themeColor,
      
//     },
//     iconPaths: {
//       favicon32: 'img/icons/favicon-32x32.png',
//       favicon16: 'img/icons/favicon-16x16.png',
//       appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
//       maskIcon: 'img/icons/safari-pinned-tab.svg',
//       msTileImage: 'img/icons/msapplication-icon-144x144.png'
//     }
//   }
// }