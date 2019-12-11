// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

const request = require('request');
request('http://www.google.com', function (error, response, body) {
    // Affiche la page d'accueil de Google dans l'application
    document.querySelector('body').innerHTML = body; 
});
