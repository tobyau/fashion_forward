// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure

require("dotenv").config();

const accountSid = process.env.ACCOUNTSID;
const authToken = process.env.AUTHTOKEN;

module.exports = (data) => {

const client = require('twilio')(accountSid, authToken);

if( priority === 0 ){

client.messages
  .create({
     body: `911: ${data.name} requires immediate assistance at ${data.address}`,
     from: '+12056191477',
     to: '+18057171455'
   })
  .then(message => console.log(message.sid));

} else if ( priority === 1 ) {

client.messages
  .create({
     body: `Police: ${data.name} needs a discreet door knock at ${data.address}`,
     from: '+12056191477',
     to: '+18057171455'
   })
  .then(message => console.log(message.sid));

} else if ( priority === 2 ) {

client.messages
  .create({
     body: `Police: ${data.name} may need assistance at ${data.address}`,
     from: '+12056191477',
     to: '+18057171455'
   })
  .then(message => console.log(message.sid));

} else {

client.messages
  .create({
     body: `False Alarm`,
     from: '+12056191477',
     to: '+18057171455'
   })
  .then(message => console.log(message.sid));

}}

