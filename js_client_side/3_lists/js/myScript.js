function displayList() {

    var ul = document.getElementsByTagName('ul');
    //console.log(ul);
    var array = new Array();
    for (i=0; i<3; i++) {
        var li = ul[i].getElementsByTagName('li');
        //console.log(li);
        for (var j = 0; j < li.length; j++) {
            array.push("\n" + li[j].innerText);
        }
    }
    // display array elements in a popup
    alert (array);
    // eroor handling
    displayAlert();
    
}

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
      console.log("All good");
      
  }
} 