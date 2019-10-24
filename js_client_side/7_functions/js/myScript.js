// convert Celsius to Fahrenheit
function cToF(celsius) {
    var message = document.getElementById("msgBox");
    try {
        if (celsius == "") {
            alert("Enter a value.");
        } else {
            var cTemp = celsius;
            var cToFahr = Math.round(cTemp * 9 / 5 + 32);
            document.getElementById("txtOutput").innerHTML = cTemp + "&#8451; is " + cToFahr + "&#8457;";
            message.innerHTML = 'OK';
        }
    }
    catch(err) {
        message.innerHTML = "Error: " + err;
    }
}

// convert Fahrenheit to Celsius
function fToC(fahrenheit) {
    var message = document.getElementById("msgBox");
    try {
        if (fahrenheit == "") {
            alert("Enter a value.");
        } else {
            var fTemp = fahrenheit;
            var fToCel = Math.round((fTemp - 32) * 5 / 9);
            document.getElementById("txtOutput").innerHTML = fTemp + "&#8457; is " + fToCel + "&#8451;";
            message.innerHTML = "OK";
        }
    }
    catch(err) {
        message.innerHTML = "Error: " + err;
    } 
} 

// reverse an input string
function reverseString(inpStr) {
    var message = document.getElementById("msgBox");
    try {
        if (inpStr == "") {
            alert("Enter a value.");
        } else {  
            var i = inpStr.length - 1;
            var reversedWords=""; 
            for (x = i; x >= 0; x--) {
                reversedWords +=(inpStr.charAt(x));
            }
            document.getElementById("txtOutput").innerHTML = "Reversed input string is: " + reversedWords;
            message.innerHTML = 'OK';
        }
    }
    catch(err) {
        message.innerHTML = "Error: " + err;
    }    
}