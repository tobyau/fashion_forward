// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure

// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure

require("dotenv").config();

const accountSid = process.env.ACCOUNTSID;
const authToken = process.env.AUTHTOKEN;

module.exports = (data) => {

  const client = require('twilio')(accountSid, authToken);

  if( data.priority === 2){
  client.messages
  .create({
      body: `911: ${data.name} requires immediate assistance at ${data.address}`,
      from: process.env.PHONE_FROM,
      to: process.env.PHONE_TO
    })
  .then(message => {
    console.log(message.sid);
    return true;
  });
  } else if ( data.priority === 1) {
  client.messages
  .create({
      body: `Police: ${data.name} needs a discreet door knock at ${data.address}`,
      from: process.env.PHONE_FROM,
      to: process.env.PHONE_TO
    })
  .then(message => {
    console.log(true);
    return message.sid;
  });
  } else if ( data.priority === 0) {

    client.messages.create({
      body: `Police: ${data.name} may need assistance at ${data.address}`,
      from: process.env.PHONE_FROM,
      to: process.env.PHONE_TO
    })
  .then(message => {
    console.log(true)
    return message.sid;
  });
    } 
    
    else {
    client.messages
    .create({
        body: "False Alarm",
        from: process.env.PHONE_FROM,
        to: process.env.PHONE_TO
      })
    .then(message => {
      console.log(true)
      return message.sid;
    });
    }

    return false;
}
