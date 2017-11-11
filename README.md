Example for firebase-js-sdk issue #315 : https://github.com/firebase/firebase-js-sdk/issues/315

# Problem

Accessing firestore through jest returns the following error:

`npm run test src/tasks.spec.js`

returns

```
 FAIL  src/Tasks.spec.js
  ● Test suite failed to run

    Cannot find module 'grpc' from 'grpc_connection.js'
```

while running

`npm start`

works as expect and is able to to write to Firestore (see you console)

```
Document written with ID: S9VhxjAd9y2SdQynfwNu
```
