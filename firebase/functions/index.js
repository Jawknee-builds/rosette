const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.calculateRiskScore = functions.firestore
  .document('users/{uid}/symptoms/{symptomId}')
  .onWrite((change, context) => {
    // calculate risk level stub
    const uid = context.params.uid;
    console.log(`Recalculating risk score for user: ${uid}`);
    
    // In a real implementation we'd read all symptoms and user profile
    // Here we just write 'medium' risk to the user doc
    return admin.firestore().collection('users').doc(uid).set({
      risk_level: 'medium',
      last_risk_assessment: admin.firestore.FieldValue.serverTimestamp()
    }, { merge: true });
  });

exports.scheduleReminders = functions.pubsub.schedule('every 24 hours').onRun((context) => {
    console.log('Running daily reminder scheduler');
    // Implement sending push notifications here
    return null;
});
