# kaid

UI Components for KaiOS 2.5, react version

## Components
Curren support components:
- [x] header 
- [x] empty
- [x] dialog
- [x] menu
- [x] softkey
- [x] list
- [x] list-item
- [x] service
- [x] simple-navigation-helper
- [ ] search header
- [ ] tab bar
- [ ] read more
- [ ] seperator
- [ ] progress
- [ ] slider
- [ ] button
- [ ] input
- [ ] toast
- [ ] date picker
- [ ] time picker
- [ ] loading

## Site
use [webpack-dev-server](https://webpack.js.org/configuration/dev-server/) as the quickly develop basic of kaid components.

1. run `yarn start` to start server
2. use Firefox or Chrome open http://localhost:8001/ ; or if this port has been occupied, modify the port in `webpack.config.js`


## Test
use test framework [Jest](https://jestjs.io/en/) & [enzyme](https://airbnb.io/enzyme/)

1. run `yarn test` to test 
2. use `yarn test -u` if need update snapshot
