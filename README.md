# Cart with Apollo

## Description
Cart has been implemented with React and Apollo. In the side of the client, the code has been divided into components. Each of the components has its own structure and its own style, using CSSModules. Tests have been implemented, including snapshots and test for the used methods to check its functionality. The state of the application has been managed using `Context`, which contains a main `state` and a method `onData` in charge of updating this state.


## Getting started

You just need these packages as global environment:

```
node@10.15.0

brew install yarn
```

It is time to get all the dependencies using our package.json for both folders, client and server.
```
yarn install
```
### Web environment
Then, if you wanna use any of the environment just type:
```
yarn start
```
### Production environment
To generate a directory with a production build:
```
yarn build
```

### Test and Lint your code
A linter has been used, you should execute the task:
```
yarn lint
```

JEST has been used to test the app, using also its sanpshots feature:
```
yarn test
```

If the snapshot has change, you should update your snapshot typing:
```
yarn test -u
```