const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}));

document.getElementById('chat-button').addEventListener('click', function() {
  Intercom('show');
});

document.getElementById('chat-nav').addEventListener('click', function() {
  Intercom('show');
});


// Intercom code
var APP_ID = "jnaiconv";
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
