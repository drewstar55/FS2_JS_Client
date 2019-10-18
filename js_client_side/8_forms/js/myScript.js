// get name fields
function processName() {
   
    var txtFirstName = inputForm.elements["txtFirstName"].value;
    var txtSurname = inputForm.elements["txtSurname"].value;
    var name = "";
    
    if (txtFirstName == "" || txtSurname == "") {
        alert("Please enter the client first and last name.");
    } else {
        name = txtFirstName + " " + txtSurname;
        document.getElementById("txtOutput").innerHTML = "Client name entered.<br><br>Thank you.<br><br><u>" + name + "</u>";
        displayAlert();
    }
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