// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
//  Team: Madeline, Vandana, Dhruv, Priya
// configuration file with the config for URL
export interface EnvironmentInterface {
  production: boolean;
  apiUrl: string;
}
export const environment: EnvironmentInterface = {
  production: false,
  apiUrl: 'http://3.210.201.242:31859/SurveyApp/survey',
  // apiUrl: "http://localhost:8080/SurveyApp/survey"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
