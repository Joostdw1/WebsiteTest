var logo = document.getElementById("studio");
var rob = document.getElementById("rob");
var rene = document.getElementById("rene");
var jordi = document.getElementById("jordi");
var michiel = document.getElementById("michiel");
var jandirk = document.getElementById("jandirk");
var robby = document.getElementById("robby");
var maarten = document.getElementById("maarten");

logo.addEventListener("click", piclink);
rob.addEventListener("click", piclink);
rene.addEventListener("click", piclink);
jordi.addEventListener("click", piclink);
michiel.addEventListener("click", piclink);
jandirk.addEventListener("click", piclink);
robby.addEventListener("click", piclink);
maarten.addEventListener("click", piclink);

function piclink(){
  var allImages = document.querySelectorAll("img");
  for (var i = 0;i < allImages.length; i ++){
    allImages[i].className="hide";
  }
  var picId = this.attributes["data-img"].value;
  var pic = document.getElementById(picId);
  if(pic.className === "hide"){
    pic.className = "";
  } else{
    pic.className = "hide";
  }
}
