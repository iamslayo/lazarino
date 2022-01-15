console.log("2018200105");

//sticky header i promena id-a i klase
var logo = document.getElementById("logo");
var logof
var logoc = logo;

var headerh = document.getElementById("headerh");
var headerhc = headerh;
var headerhf

$(window).scroll(function(){
    if ($(window).scrollTop() > 340) {
        $('header').addClass('fixed-header');
		$('nav').addClass('fixed-nav');
		logoc.setAttribute("id", "logof");
		headerhc.setAttribute("id", "headerhf");
    }
    else {
        $('header').removeClass('fixed-header');
		$('nav').removeClass('fixed-nav');
		logoc.setAttribute("id","logo");
		headerhc.setAttribute("id","headerh");
    }
});



// aktivan link u nav baru
var mynavv = document.getElementById("mynav");
var mynavbars = mynavv.getElementsByClassName("mynavbar");
for (var i = 0; i < mynavbars.length; i++) {
  mynavbars[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("act");
  current[0].className = current[0].className.replace(" act", "");
  this.className += " act";
  });
}



//Upozorenje (alert) za link portfolio
 window.onload = function() {
        var anchors = document.getElementsByClassName('mynavbar portfolio');
        for(var i = 0; i < anchors.length; i++) {
            var anchor = anchors[i];
            anchor.onclick = function() {
                alert('Portfolio will be uploaded soon. Thank you!');
            }
        }
    }



//Navigacija za mobilni
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}