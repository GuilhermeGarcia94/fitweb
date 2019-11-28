# Webfit App

A simple fitness/ ecommerce/ social app template all packaged into one. built on Ionic 4, Angular 7 and uses SCSS for styling.
The app uses firebase to persist data and authenticate users unto the platform. to use the app you will have to set-up your own firebase instance via the firebase console [here](https://firebase.google.com/).

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

