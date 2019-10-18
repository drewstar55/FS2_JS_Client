//
var newTitle = "*** WELCOME ***";

function myFunction() {
  var message;
  message = document.getElementById("msgBox");
  //console.log(message);
                 
  try { 
      message.innerHTML = "OK";
      document.title = newTitle;
  }
  catch(err) {
      message.innerHTML = "Error: " + err + ".";
  }
  finally {
      message.innerHTML = "Operation successful";
      document.title = newTitle;
  }
} 