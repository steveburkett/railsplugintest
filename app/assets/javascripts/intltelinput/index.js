//= require ./intlTelInput
//= require ./intlTelInput-jquery
//= require ./utils
//= require_self

$(document).ready(function(){
  //this is the jquery way to initialize.  this plugin offers both a
  //jquery way and a non-jquery way.
  $("#phoneX").intlTelInput({
    formatOnInit: true,
    separateDialCode: true
  });
});
