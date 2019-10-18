//console.log("called");

function displayResults() {

    var wordArray = ["badgers", "tigers", "bears"];
    var numArray = [100, 311, 749];
    const letter = "b";
    const num = 300;
    var nCount = 0;
    outStr = "";
    outLessThan = "";
    outGreaterThan = "";

    // find words beginning with a particular letter
    while (nCount < wordArray.length) {
        if (wordArray[nCount].charAt(0) == letter) {
          outStr = outStr + wordArray[nCount] + " ";
        };
        // find numbers < and numbers > a particular number
        if (numArray[nCount] < num) {
          outLessThan = outLessThan + numArray[nCount].toString() + " ";
        } else if (numArray[nCount] > num) {
          outGreaterThan = outGreaterThan + numArray[nCount].toString() + " ";
        }
        nCount++;
    }
      
    document.getElementById("txtOutput").innerHTML = "Number(s) < " + num + ": "
           + outLessThan + "<br>Number(s) > " + num + ": " + outGreaterThan
           + "<br>Word(s) beginning with the letter " + letter + ": " + outStr;

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