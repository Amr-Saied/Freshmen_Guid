
var Admin = sessionStorage.getItem("Admin");

console.log(Admin)

if (Admin == "true") {
    document.getElementById("1").readOnly = false;
    document.getElementById("2").readOnly = false;
    document.getElementById("3").readOnly = false;
    document.getElementById("4").readOnly = false;
    document.getElementById("5").readOnly = false;

}

function scrollToTop() {

    $('html, body').animate({ scrollTop: 0 }, 'slow');

}
function scrollEvent() {

    var scrollDiv = document.getElementById("e").offsetTop;
    window.scrollTo({ top: scrollDiv, behavior: 'smooth' });


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

window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;
        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}


let add = () => {
    let name = document.querySelector('.container #name');
    let comment = document.querySelector('.container #comment');

    if (name.value !== "" && comment.value != "") {

    let list = document.querySelector('.list');
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    let now = h + " : " + m + " : " + s;
    let list_item = document.createElement ("l1");

    list_item.innerHTML = `
    <span>
    <p>${name.value} ${now}</p>
    </span>
    <p>${comment.value}</p>
    `;
    list.append(list_item);
    }

    if (name.value == "" || comment.value == "") {
    let list = document.querySelector('.list');
    let list_item = document.createElement ("l2");
    var warn = 'Please enter name & comment!';
    list_item.innerHTML = `
    <span>
    <p>${warn}</p>
    </span>
    `;
    list.append(list_item);
     }
    name.value=comment.value = "";
    }

    
    function check1(){
        var amr = confirm('Wanna save this change ?');
        var text = document.getElementById('1') ;
        console.log(amr)
        if(amr)
        {
            
            localStorage.setItem('acmArea1', text.value)  ;          
            
        }
    }
    function check2(){
        var amr = confirm('Wanna save this change ?');
        var text = document.getElementById('5') ;
        console.log(amr)
        if(amr)
        {
            
            localStorage.setItem('acmArea2', text.value)  ;          
            
        }
    }
    function check3(){
        var amr = confirm('Wanna save this change ?');
        var text = document.getElementById('2') ;
        console.log(amr)
        if(amr)
        {
            
            localStorage.setItem('acmArea3', text.value)  ;          
            
        }
    }
    function check4(){
        var amr = confirm('Wanna save this change ?');
        var text = document.getElementById('3') ;
        console.log(amr)
        if(amr)
        {
            
            localStorage.setItem('acmArea4', text.value)  ;          
            
        }
    }
    function check5(){
        var amr = confirm('Wanna save this change ?');
        var text = document.getElementById('4') ;
        console.log(amr)
        if(amr)
        {
            
            localStorage.setItem('acmArea5', text.value)  ;          
            
        }
    }
 
if(localStorage.getItem('acmArea1') !== null)
{
    document.getElementById('1').value = localStorage.getItem('acmArea1') ;
}
if(localStorage.getItem('acmArea5') !== null)
{
    document.getElementById('4').value = localStorage.getItem('acmArea5') ;
}
if(localStorage.getItem('acmArea3') !== null)
{
    document.getElementById('2').value = localStorage.getItem('acmArea3') ;
}
if(localStorage.getItem('acmArea4') !== null)
{
    document.getElementById('3').value = localStorage.getItem('acmArea4') ;
}
if(localStorage.getItem('acmArea2') !== null)
{
    document.getElementById('5').value = localStorage.getItem('acmArea2') ;
}
