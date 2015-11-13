/* global navigator, console */

if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/worker.js').then(function(reg) {
    console.log('ServiceWorker registered');
    console.log(reg);
  }, function(err) {
    console.log('Error happend during registering ServiceWorker');
    console.log(err);
  });
} else {
  console.log('Your browser does not support serviceWorker :(');
}