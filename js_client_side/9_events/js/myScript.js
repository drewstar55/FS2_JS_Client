//
// process recipe and language selection
//
function selection(pgName) {
   
    var lang = "";

    var radios = document.getElementsByName('optionsRadios');
    if (radios[0].checked) {
        lang = "E";
    } else {
        lang = "I";
    }
     
    window.open(pgName + ".html?" + lang, '_top');
    
        
} 

// error handler
function displayAlert() {
  var message;
  message = document.getElementById("msgBox");
                   
  try { 
      message.innerHTML = "OK";
      console.log("OK");
  }
  catch(err) {
      message.innerHTML = "Error: " + err;
      console.log("Error" + err);
  }
  finally {
      message.innerHTML = "Operation successful";
      console.log("Operation successful");
  }
} 