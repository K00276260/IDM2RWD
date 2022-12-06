"use strict";
$(document).ready( () => {

    // move focus to first text box
    $("#email").focus();
    
    // the handler for the click event of the submit button
    $("#signupForm").submit( event => {
        let isValid = true;
        
        // validate the email entry with a regular expression
        const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
        const email = $("#email").val().trim();
        if (email == "") { 
            $("#email").next().text("This field is required.");
            isValid = false;
        } else if ( !emailPattern.test(email) ) {
            $("#emailmsg").next().text("Must be a valid email address.");
            isValid = false;
        } else {
            $("#email").next().text("");
        }
        $("#email").val(email);
            
        // validate the password entry
        const password = $("#password").val().trim();
        if ( password.length < 8) {
            $("#passwordmsg").text("Must be 8 or more characters.");
            isValid = false;
        } else {
            $("#password").next().text("");
        }
        $("#password").val(password);
        
        // validate the verify entry
        const verify = $("#verify").val().trim();
        if (verify == "") { 
            $("#verify").next().text("This field is required.");
            isValid = false; 
        } else if (verify !== password) { 
            $("#verify").next().text("Must match first password entry.");
            isValid = false;
        } else {
            $("#verify").next().text("");
        }
        $("#verify").val(verify);
         // prevent the submission of the form if any entries are invalid 
        if (isValid == false) {
            event.preventDefault();                
        }
    });

});

