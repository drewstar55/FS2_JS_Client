//console.log("called");

function displayResults() {

    var wordArray = ["badgers", "tigers", "bears"];
    var numArray = [100, 311, 749];
    const letter = "b";
    const num = 300;
    outStr = "";
    outLessThan = "";
    outGreaterThan = "";

    // find words beginning with a particular letter
    for (i=0; i < wordArray.length; i++) {
        if (wordArray[i].charAt(0) == letter) {
            outStr = outStr + wordArray[i] + " ";
        };
        
        // find numbers < and numbers > a particular number
        if (numArray[i] < num) {
            outLessThan = outLessThan + numArray[i].toString() + " ";
        } else if (numArray[i] > num) {
            outGreaterThan = outGreaterThan + numArray[i].toString() + " ";
        }
        document.getElementById("txtOutput").innerHTML = "Number(s) < " + num + " are: " + outLessThan
                                                      + "<br>Number(s) > " + num + " are: " + outGreaterThan
                                                      + "<br>Word(s) beginning with the letter " + letter + " are: " + outStr;
    }

    //console.log(outStr);
    displayAlert();   
}

function displayAlert() {
  var message;
  message = document.getElementById("msgBox");
                   
  try { 
      message.innerHTML = "OK";
      //console.log("OK");
      
  }
  catch(err) {
      message.innerHTML = "Error: " + err;
      //console.log("Error" + err);
  }
  finally {
      message.innerHTML = "Executed successfully";
      //console.log("All good");
      
  }
} 