import './modules'

// http://stackoverflow.com/questions/37478122/velocity-is-not-a-function-materialize-showing-error-in-meteor
// window.$ = window.jQuery = require('materialize-css/node_modules/jquery/dist/jquery.js');
// window.$ = window.jQuery = require('jQuery');

// materialize needs to have jQuery, rather than jquery
window.jQuery = require('jQuery');
require('jQuery');
require('materialize-css');
// require('materialize-css/sass/materialize.scss')

// require("materialize-loader");
// require("materialize-css");

// $("#convert-button").hide()

// import 'materialize'

// console.log(`app.js has loaded!`)

// function convert() {
//     var input = document.getElementById('pattern').value;
//     var out = log4jpatternlayout.parse(input);
//     document.getElementById('grok_pattern').value = out;
//     Materialize.updateTextFields();
// }