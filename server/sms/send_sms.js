// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure

require("dotenv").config();

const accountSid = 'AC527c6cf0845429276f3072186dbe8bd7';
const authToken = '939b9f625c41bbad6a12ef2af9bee203';

const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Urgent Action Required (2x confirmed)',
     from: '+12056191477',
     to: '+13474215572'
   })
  .then(message => console.log(message.sid));

