// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  azureBlob: {
    url: "https://smartinsurehmlstg.blob.core.windows.net/assets",
    access:
      "?sp=racwdli&st=2022-09-12T15:55:36Z&se=2025-01-01T23:55:36Z&sv=2021-06-08&sr=c&sig=uyvt0nefee9o8TSMx1rBsCZlSGBhr31KjERLORXNtGI%3D",
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
