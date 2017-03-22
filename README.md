# Angular4FirebaseStarter
 

you are in the firebase branch a project template just to get you going, basic template implementing firebase boilerplate.

# NOTE

Your own firebase configs need to to into src/app/myconf.ts file

`
export const myconfigs = {
    apiKey: '<ADD YOUR CUSTOM VALUE>',
    authDomain: '<ADD YOUR CUSTOM VALUE>',
    databaseURL: '<ADD YOUR CUSTOM VALUE>',
    storageBucket: '<ADD YOUR CUSTOM VALUE>',
    messagingSenderId: '<ADD YOUR CUSTOM VALUE>'
  };

`

the app.module.ts file already imports the values in and initializes the module
` AngularFireModule.initializeApp(myconfigs) `

# Cloning this branch directly 

git clone -b firebase https://github.com/SaabirMohamed/Angular4StarterWithFireBase.git

the above command will get you the repo which includes a base template in Angular 4 and firebase boilerplate implemented.
