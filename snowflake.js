var xbx = document.getElementById("xbox-logo");
var ssforward = document.getElementsByClassName("ssforward")[0];
var ssback = document.getElementsByClassName("ssback")[0];
var domshow = ["https://i.ytimg.com/vi/its59HmBDh4/maxresdefault.jpg", "https://i.ytimg.com/vi/DTihsaR7D7U/maxresdefault.jpg", "http://3.bp.blogspot.com/-RsQfjc4KRRc/UQay23XAfnI/AAAAAAAAHcY/PQBRrrLms_I/s1600/cast-of-teletubbies-5.jpg", "https://i.ytimg.com/vi/rMy4mgjhmn0/maxresdefault.jpg"];


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

function slideShow(element, dir, sl) {
  var image = (element.srcElement.parentElement.parentElement.children[0]).children[0];
  for(var i = 0; i < sl.length; i++) {
    if(image.src == sl[i]) {
      image.src = (i+dir > -1 && i+dir < sl.length) ? sl[i + dir] : ((i+dir >= sl.length) ? sl[0] : sl[sl.length-1]);
      return;
    }
  }
}

ssforward.addEventListener("click", (e)=>{slideShow(e, 1, domshow)});
ssback.addEventListener("click", (e)=>{slideShow(e, -1, domshow)});
xbx.addEventListener("click", (e)=>{loadscreen(e.path[0])});
