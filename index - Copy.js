module.change_code = 1;
'use strict';

var alexa = require( 'alexa-app' );
var app = new alexa.app( 'myskill' );


app.launch( function( request, response ) {
        response.say( 'Welcome to Alexa World' ).reprompt( 'Ask Something.' ).shouldEndSession( false );
} );


app.error = function( exception, request, response ) {
 response.say( 'Sorry some error occured ' + error.message);
};

app.intent('sayHello',
  {
 "utterances":[ 
  "say Hello",
  "Hello alexa",
  "What's up",
  "Hey alexa"]
  },
  function(request,response) {
    response.say("Hello, Welcome to alexa world.");
  }
);

app.intent('sayTime',
  {
 "utterances":[ 
  "say Time",
  "Time alexa",
  "What time",
  "Hey alexa what is time"]
  },
  function(request,response) {
    response.say("Right now it is 12:30 PM");
  }
);

module.exports = app;
