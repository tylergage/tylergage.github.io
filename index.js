document.getElementById('chat-button').addEventListener('click', function() {
  Intercom('show');
});

document.getElementById('chat-nav').addEventListener('click', function() {
  Intercom('show');
});

//Insert Basic JS code here
//Set your APP_ID
var APP_ID = "jnaiconv";

// Set Show Event to be false initiall
var SHOW_EVENT = false;

window.intercomSettings = {
    app_id: APP_ID
  };
(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function")
{ic('reattach_activator');ic('update',intercomSettings);}else
{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args)
{i.q.push(args)};w.Intercom=i;function l()
{var s=d.createElement('script');s.type='text/javascript';s.async=true;
s.src='https://widget.intercom.io/widget/' + APP_ID;
var x=d.getElementsByTagName('script')
[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent)
{w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()


function messenger(display) {
  //Insert sign out code here
  Intercom(display)
  return(true) //check to see if code was correctly copied
}