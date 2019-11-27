# Personalyze App

A simple fitness/ ecommerce/ social app template all packaged into one. built on Ionic 4, Angular 7 and uses SCSS for styling.
The app uses firebase to persist data and authenticate users unto the platform. to use the app you will have to set-up your own firebase instance via the firebase console [here](https://firebase.google.com/).

## App Setup

1. Download Zip file **personalyze_app**
2. Extract project from the zip file.
3. If you havent aleady done this, you need to install angular-cli and ionic unto your machine

- to download **ionic-cli**, check out how [here](https://ionicframework.com/docs/installation/cli)
- to download **angular-cli**, check out how [here](https://angular.io/cli)

4. If you have both angular and ionic cli installed, open the project in terminal/console
5. Run **npm install**
6. When complete, run **ionic serve**
   NB You might have some issues as a firebase service will not be connected to the app at this stage, so lets head on to the firebase setup section.

## Firebase Setup

1. create a firebase account and login to the console, here
2. click on start new project and enter a project name.
3. click on the web icon **</>** icon under 'Get started by adding Firebase to your app' section.
4. register a new app by entering app nickname, ignore firebase hosting for now and click the register app button.
5. copy ther parameters from add firebase sdk section into the environments file within the app project files (located at src/environments/enviroment.ts)
6. once done navigate to project dashboard. select authentication to setup authentication method.
7. the app uses Email/Password, facebook and google out of the box, but you can add or remove as you please. [tutorial available here](https://angularfirebase.com/lessons/angular-firebase-authentication-tutorial-oauth/)
8. set up Database by selecting the database link in the left menu under develop.
9. click create database, use Start in test mode for now as app uses test mode but you can update to suit your preference.
10. set up Storage by selecting the database link in the left menu under develop.
    click get started, and then got it.
11. remember to disable any security rules while in dev mode.
12. Now, in the app, run **ionic serve** and enjoy.
13. firebase will automatically be populated with data when you run the app. you can go ahead and delete the data from firebase console if not needed.


## App Details
### File structure
1. **app** folder contains config files, login guard and app component
2. **assets** contains icons, images, data files that is used to populate an empty firebase database.
3. **pages** contains actual app pages as modules amd thier subpages.
4. **environments** conatins files to setup dev and prod environment variables. firebase config data is stored here
5. **shared** contains contains shared components, directives and pipes used accross the app.

### Pages
- Auth
  - login
  - register
- intro
- Blogs
  * blog list
  * blog detail
  * add blog
  * blog comments
- gym
  * gym list
  * gym detail
-trainers
  * trainer list
  * trainer detail
    * trainer schdeule/ appointments
    * trainer reviews
  * trainer chat
- notifications
- profile
  * edit profile
  * add measurements
- Schedule
- Shop
  * shop profile
  * shop list
  * shop detail
  * basket
  * checkout
  * pay complete
- Settings
- Walkthrough

