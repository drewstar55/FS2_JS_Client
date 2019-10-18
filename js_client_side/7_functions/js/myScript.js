// convert Celsius to Fahrenheit
function cToF(celsius) {
  if (celsius == "") {
      alert("Enter a value.");
  } else {
      var cTemp = celsius;
      var cToFahr = Math.round(cTemp * 9 / 5 + 32);
      document.getElementById("txtOutput").innerHTML = cTemp + "&#8451; is " + cToFahr + "&#8457;";
      displayAlert();
  }
}

// convert Fahrenheit to Celsius
function fToC(fahrenheit) {
    if (fahrenheit == "") {
        alert("Enter a value.");
    } else {
        var fTemp = fahrenheit;
        var fToCel = Math.round((fTemp - 32) * 5 / 9);
        document.getElementById("txtOutput").innerHTML = fTemp + "&#8457; is " + fToCel + "&#8451;";
        displayAlert();
    }
} 

// reverse an input string
function reverseString(inpStr) {
  if (inpStr == "") {
    alert("Enter a value.");
  } else {  
    var i = inpStr.length - 1;
    var reversedWords=""; 
    for (x = i; x >= 0; x--) {
        reversedWords +=(inpStr.charAt(x));
    }
    //console.log(reversedWords);
    document.getElementById("txtOutput").innerHTML = "Reversed input string is: " + reversedWords;
    displayAlert();
  }
}

// error handler
function displayAlert() {
    var message;
    message = document.getElementById("msgBox");
                    
    try { 
        message.innerHTML = "OK";
    }
    catch(err) {
        message.innerHTML = "Error: " + err;
        //console.log("Error" + err);
    }
    finally {
        message.innerHTML = "Excecuted successfully";
    }
} 