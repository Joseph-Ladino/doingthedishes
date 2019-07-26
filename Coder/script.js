var strength = 1500;

function Decoder() {
  var text = (document.querySelectorAll("input")[2].value).split(":");
  if(text == "") return false;
  while(text[0] == " ") {
    text = text.slice(1)
  }
  var letters = [];
  for(var i = 0; i < text.length; i++) {
    letters.push(String.fromCharCode((parseInt(text[i], 32)).toString()/Store.buy("shh")));
  }
  document.getElementById("decoder").innerText = letters.join("");
}

function Coder() {
  var text = document.querySelectorAll("input")[0].value;
  if(text == "") return false;
  var letters = "";
  var code = (Store.buy("shh")) ? Store.buy("shh") : Math.round(Math.random() * strength);
  Store.sell("shh", code);
  for(var i = 0; i < text.length; i++) {
    letters += (text[i].charCodeAt() * code).toString(32); letters += (i != text.length-1) ? ":" : "";
  }
 document.getElementById("coder").innerText = letters;
}
window.onload = function() {

  document.querySelectorAll("input")[1].value = (Store.buy("shh") != "") ? Store.buy("shh") : Math.round(Math.random() * strength); Store.sell("shh", document.querySelectorAll("input")[1].value)

  document.querySelectorAll("input")[0].addEventListener("input", Coder);
  document.querySelectorAll("input")[2].addEventListener("input", Decoder);

  setInterval(()=>{
    document.querySelectorAll("input")[1].setAttribute("style", "width: " + ((document.querySelectorAll("input")[1].value).length + 1) + "em");
    if(parseInt(document.querySelectorAll("input")[1].value) <= 1 || document.querySelectorAll("input")[1].value == "") document.querySelectorAll("input")[1].value = Math.round(Math.random() * strength);
    Store.sell("shh", document.querySelectorAll("input")[1].value)
  }, 100)

};
