
var Admin = sessionStorage.getItem("Admin");

console.log(Admin)

var now = new Array();
var names = new Array();
var comment = new Array();
var cn ;

if(localStorage.getItem('robotArea1') !== null)
{
    document.getElementById('1').value = localStorage.getItem('robotArea1') ;
}
if(localStorage.getItem('robotArea5') !== null)
{
    document.getElementById('4').value = localStorage.getItem('robotArea5') ;
}
if(localStorage.getItem('robotArea3') !== null)
{
    document.getElementById('2').value = localStorage.getItem('robotArea3') ;
}
if(localStorage.getItem('robotArea4') !== null)
{
    document.getElementById('3').value = localStorage.getItem('robotArea4') ;
}
if(localStorage.getItem('robotArea2') !== null)
{
    document.getElementById('5').value = localStorage.getItem('robotArea2') ;
}



if(localStorage.getItem("counterComment") == null)
{
    cn = 0 ;
}else{
    cn = localStorage.getItem("counterComment") ;
}



for(let i = 0 ; i < cn ; i++)
{
    now[i] = localStorage.getItem("now_" + i) ;
    names[i] = localStorage.getItem("commentNames_" + i) ;
    comment[i] = localStorage.getItem("comment_" + i) ;


}

for(let i = 0 ; i < cn ; i++)
{
    now[i] = localStorage.getItem("now_" + i) ;
    names[i] = localStorage.getItem("commentNames_" + i) ;
    comment[i] = localStorage.getItem("comment_" + i) ;
    let list = document.querySelector('.list'); 
    let list_item = document.createElement ("l1"); 
    list_item.innerHTML = `
    <span>
    <p>${names[i]} ${now[i]}</p> 
    </span>
    <p>${comment[i]}</p>
    `;
    list.append(list_item); 

}




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
        names[cn] = name ;
        comment[cn] = comment ;
        localStorage.setItem("now_"+ cn ,JSON.stringify(now)) ;
        localStorage.setItem("commentNames_"+ cn ,JSON.stringify(name.value)) ;
        localStorage.setItem("comment_"+ cn , JSON.stringify(comment.value)) ;
        cn++;
        localStorage.setItem("counterComment",cn)
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


    function check(){
        var amr = confirm('Wanna save this change ?');
        var text = document.getElementById('1') ;
        console.log(amr)
        if(amr)
        {
            
            localStorage.setItem('robotArea1', text.value)  ;          
            
        }
    }
    function check2(){
        var amr = confirm('Wanna save this change ?');
        var text = document.getElementById('5') ;
        console.log(amr)
        if(amr)
        {
            
            localStorage.setItem('robotArea2', text.value)  ;          
            
        }
    }
    function check3(){
        var amr = confirm('Wanna save this change ?');
        var text = document.getElementById('2') ;
        console.log(amr)
        if(amr)
        {
            
            localStorage.setItem('robotArea3', text.value)  ;          
            
        }
    }
    function check4(){
        var amr = confirm('Wanna save this change ?');
        var text = document.getElementById('3') ;
        console.log(amr)
        if(amr)
        {
            
            localStorage.setItem('robotArea4', text.value)  ;          
            
        }
    }
    function check5(){
        var amr = confirm('Wanna save this change ?');
        var text = document.getElementById('4') ;
        console.log(amr)
        if(amr)
        {
            
            localStorage.setItem('robotArea5', text.value)  ;          
            
        }
    }