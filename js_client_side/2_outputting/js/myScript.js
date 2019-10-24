
function myFunction() {
    var message = document.getElementById("msgBox");
    var newTitle = "*** WELCOME ***";

    try { 
        message.innerHTML = "Operation successful";
        document.title = newTitle;
    }                 
    catch(err) {
        message.innerHTML = "Error: " + err;
    }
}