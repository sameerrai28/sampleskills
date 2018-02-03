module.change_code = 1;
'use strict';
var mqtt = require('mqtt'); 
var Promise = require('promise'); 

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
	  //**** Connect to mqtt server and publish msg
	    var mqttpromise = new Promise( function(resolve,reject){ 
		var mqtt_url = 'm12.cloudmqtt.com'; 
		var client = mqtt.connect({port:18653,host:mqtt_url,username:"qushspoh",password:"Mi8Xy5a_fl-n"});		 
		client.on('connect', function() { // When connected 
		    // publish a message to a topic 
		    client.publish('device_control', 'Aryan 1 off', function() { 
			console.log("Message is published"); 
			client.end();  
			resolve('Done Sending'); 
		    }); 
		}); 
	    }) ; 
         mqttpromise.then( 
           function(data) { 
             console.log('Function called succesfully:', data); 
             //var speechOutput = "The light is now ON"; 
             //response.tellWithCard(speechOutput, "Node Light", speechOutput); 
			 response.say("The light is now ON");
           }, function(err) { 
             console.log('An error occurred:', err); 
           }); 
       //} 
       //else { 
       //  response.say("Sorry, I didn't catch what you saidXX"); 
       //}			
	  //************
		//response.say("Right now it is 12:30 PM");
  }
);

module.exports = app;
