window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 80) {
    document.getElementById("nav").style.height = "100px";
    document.getElementById("nav").style.background = "#111";
    document.getElementById("logo").style.fontSize = "19pt";
  } else {
    document.getElementById("nav").style.height = "140px";
    document.getElementById("nav").style.background= "#222";
    document.getElementById("logo").style.fontSize = "23pt";
  } 
}

    if (window.innerWidth < 480){
        document.getElementById("nav").style.height = "100px";
        document.getElementById("nav").style.background = "#111";
        document.getElementById("logo").style.fontSize = "19pt";
    } else {
        document.getElementById("nav").style.height = "100px";
        document.getElementById("nav").style.background = "#111";
        document.getElementById("logo").style.fontSize = "19pt";
    }
