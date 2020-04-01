// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCQ-0pEb_TEKE6oTgFFMMIdsiSktnZtxM0",
    authDomain: "contentful-angular-blog.firebaseapp.com",
    databaseURL: "https://contentful-angular-blog.firebaseio.com",
    projectId: "contentful-angular-blog",
    storageBucket: "contentful-angular-blog.appspot.com",
    messagingSenderId: "1089846297065",
    appId: "1:1089846297065:web:20c41165464c5e6cb4cb78",
    measurementId: "G-0FCW1CMPMT"
  },
  contentful: {
    space: "kn33bkhab8tl",
    accessToken: "t75ExREYp9Y8UFPb94lzZcfgHfY2p3Pq9fNEc6e-kK8"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
