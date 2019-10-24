function displayArray() {
  var message = document.getElementById("msgBox");
    try {
        var array2D = [
          [1,'apples'],
          [2,'oranges'],
          [3,'pears'],
          [4,'cookies'],
          [5,'cakes'],
          [6,'coffee'],
          [7,'carrot sticks'],
          [8,'pizza']
        ];
         
        var outputList = "";
        for (i = 0; i < array2D.length; i++) {
          outputList = outputList + "<br>" + array2D[i][0] + ", " + array2D[i][1];
        }
        document.getElementById("txtOutput").innerHTML = outputList;
        message.innerHTML = "OK";
    }
    catch(err) {
        message.innerHTML = "Error: " + err;
    }
} 