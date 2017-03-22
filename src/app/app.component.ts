import { Component } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Delclaring the list observable datatype for use later
  data: FirebaseListObservable<any>;
  // The actual start node of the JSON tree heirachy that will reside in firebase or your DBNAME
  private dbtree = 'YOURDBNAME';
  // Injecting Angular dependency ... should branch this all out to it's own service.
  constructor(af: AngularFire) {
    // just doing a quick query on the tree (might not exist at first)
    this.data = af.database.list(this.dbtree, {
      query: {  // can modify the result with various flags like isEqual, limitToFirst, endAt, equalTo
        limitToLast: 10
      }
    });
   }

// Sign In Methods must be prepaired and selected at firebase console first.
// ****************************************************************************
   signInEmail() {
      // 4 u TODO
   }

  signInGoogle() {
      // 4 u TODO
   }

   signInFacebook() {
      // 4 u TODO
   }

  signInGitHub() {
      // 4 u TODO
   }
// END SIGN IN Methods
// ****************************************************************************

// only need one sign in method for the email password option other methods are handeled by providers.
   signUpEmail() {
     // 4 u TODO
   }

}
