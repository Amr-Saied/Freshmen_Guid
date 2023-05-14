var Admin = sessionStorage.getItem("Admin");

console.log(Admin)
var text = document.getElementById('1');

var welcome = document.getElementById('wel') ;

welcome.textContent = localStorage.getItem('nameNow') ;



if(localStorage.getItem('area') != null){
text.value = localStorage.getItem('area') ;
}


if (Admin == "true") {
  
    document.getElementById("1").readOnly = false;
}

function save(){
    var check = confirm('Wanna save this change ?') ;
    if(Admin == "true" && check )
    {

        localStorage.setItem('area',text.value) ;
        text.value = localStorage.getItem('area') ;
    }
}

function transAbout() {
    document.location.href = "About.html";
}

function transHome() {
    document.location.href = "home.html";
}
function transACM() {
    document.location.href = "ACM.html";
}
function transSupport() {
    document.location.href = "Support.html";
}
function transRobotech() {
    document.location.href = "Robotech.html";
}
function transMSP() {
    document.location.href = "MSP.html";
}
function transApplAi() {
    document.location.href = "ApplAi.html";
}
function transOSC() {
    document.location.href = "OSC.html";
}

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    }
    
    function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    }



