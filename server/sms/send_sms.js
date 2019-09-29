// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure

require("dotenv").config();

const accountSid = process.env.ACCOUNTSID;
const authToken = process.env.AUTHTOKEN;

const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Urgent Action Required (2x confirmed)',
     from: '+12056191477',
     to: '+13474215572'
   })
  .then(message => console.log(message.sid));

