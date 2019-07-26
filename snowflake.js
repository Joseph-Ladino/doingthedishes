var xbtn = document.getElementById("xbox-logo");
function loadscreen() {
  if(!document.getElementsByClassName("loader")[0]){
    var el = document.createElement("div");
    el.className = "loader";
    document.body.appendChild(el);
    setTimeout(()=>{
      document.getElementsByClassName("loader")[0].remove();
      notify("#DomIsMySnowflake ☃");
    }, 2019);
  }
}

function notify(msg) {
  var toast = document.createElement("span");
  toast.innerHTML = msg;
  toast.className += " notif";
  document.body.insertBefore(toast, document.body.firstChild);

  setTimeout(()=>{document.body.firstChild.remove()}, 2500);
}

xbtn.addEventListener("click", (e)=>{loadscreen(e.path[0])});
