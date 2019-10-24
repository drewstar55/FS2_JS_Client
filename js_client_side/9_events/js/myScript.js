//
// process recipe and language selection
//
function selection(pgName) {
   try {
        var lang = "";
        var radios = document.getElementsByName('optionsRadios');
        if (radios[0].checked) {
            lang = "E";
        } else {
            lang = "I";
        }
        
        window.open(pgName + ".html?" + lang, '_top');
        console.log("OK");
   }
   catch(err) {
        console.log("Error" + err);
   }
}