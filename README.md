# Gotax Library

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## How to use

Import the module to your Module and provide the service urls:

```
import {GotaxModule} from "gotax"

@NgModule({

  imports: [
      GotaxModule.forRoot(
        userServiceUrl = 'https://someurl.com/';
        organizationServiceUrl = 'https://someurl.com/';
        servieServiceUrl = 'https://someurl.com/';
    )
  ],

})


```

Import services into your component

```
import {AuthenticationService} from "gotax"


export class SomeClass(){
    constructor(private authService:AuthenticationService){

    }

    someFunction(){
        authservice.login(userName, password);
    }
}

```

<!-- ## Code scaffolding

Run `ng generate component component-name --project gotax` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project gotax`.
> Note: Don't forget to add `--project gotax` or else it will be added to the default project in your `angular.json` file.

## Build

Run `ng build gotax` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build gotax`, go to the dist folder `cd dist/gotax` and run `npm publish`.

## Running unit tests

Run `ng test gotax` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md). -->
