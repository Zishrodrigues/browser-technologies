if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js', {
  //scope is for the files you want the SW to be active for
  }).catch(function(error) {
  console.log('boo:', error);
  });
}
