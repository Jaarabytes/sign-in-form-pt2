$(document).ready(function(){
    $(document).on("click", "input", function() {
        $(this).css("border", "3px solid powderblue");
      }); 
      
        // Target the password input field
  var passwordInput = $('#password');

  // Hide the password when typing
  passwordInput.on('input', function() {
    var passwordValue = passwordInput.val();

    // Replace the entered characters with asterisks
    var hiddenPassword = '*'.repeat(passwordValue.length);

    // Set the hidden password as the input value
    passwordInput.val(hiddenPassword);
  });
})
