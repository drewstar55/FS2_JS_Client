// get name fields
function processName() {
    var message = document.getElementById("msgBox");
    try {        
        var txtFirstName = inputForm.elements["txtFirstName"].value;
        var txtSurname = inputForm.elements["txtSurname"].value;
        var name = "";
        if (txtFirstName == "" || txtSurname == "") {
            alert("Please enter the client first and last name.");
        } else {
            name = txtFirstName + " " + txtSurname;
            document.getElementById("txtOutput").innerHTML = "Client name entered.<br><br>Thank you.<br><br><u>" + name + "</u>";
            message.innerHTML = "OK";
        }
    }
    catch(err) {
        message.innerHTML = "Error: " + err;
    }
} 


  
                   
 