//= require ./intlTelInput
//= require ./intlTelInput-jquery
//= require ./utils
//= require_self

$(document).ready(function(){
  $("#phoneX").intlTelInput({
    formatOnInit: true,
    separateDialCode: true
  });
});
