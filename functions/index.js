const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();
const db = admin.database();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  db.ref(`reports`).push({
    error: request.body.error,
    timestamp: request.body.timestamp,
    store: request.body.store,
  });
  response.status(200).send("Abdo mlp success");
  return;
});
