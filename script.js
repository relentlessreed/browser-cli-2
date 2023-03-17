const cliOutput = document.querySelector('.cli-output');
const cliInput = document.querySelector('#cli-input');

function handleCommand() {
  const command = cliInput.value;
  cliInput.value = '';
  cliOutput.innerHTML += `<p>${command}</p>`;
}

cliInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    handleCommand();
  }
});

// Service Worker registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('sw.js').then(function(registration) {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
