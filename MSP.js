
var Admin = sessionStorage.getItem("Admin");

function transHome() {
    document.location.href = "home.html";
}

function transSupport()
{
    document.location.href="Support.html";
}
function transRobotech()
{
    document.location.href="Robotech.html";
}
function transACM()
{
    document.location.href="ACM.html";
}
function transApplAi()
{
    document.location.href="ApplAi.html";
}
function transOSC()
{
    document.location.href="OSC.html";
}

function transLogout()
{
    document.location.href="loginPage.html";
}

window.addEventListener('scroll', reveal);




console.log(Admin) ;

if (Admin == "true") {
    document.getElementById("p1").readOnly = false;
    document.getElementById("p2").readOnly = false;
    document.getElementById("p3").readOnly = false;
    document.getElementById("p4").readOnly = false;
   
    
}




function reveal()
{
    var reveals = document.querySelectorAll('.reveal');
    for(var i = 0; i < reveals.length; i++)
    {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;
        if(revealtop < windowheight - revealpoint)
        {
            reveals[i].classList.add('active');
        }else{
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

    function scrollToTop() {

        $('html, body').animate({ scrollTop: 0 }, 'slow');
    
    }
    
    function check1(){
        var amr = confirm('Wanna save this change ?');
        var text = document.getElementById('p1') ;
        console.log(amr)
        if(amr)
        {
            
            localStorage.setItem('mspArea1', text.value)  ;          
            
        }
    }
    function check2(){
        var amr = confirm('Wanna save this change ?');
        var text = document.getElementById('p2') ;
        console.log(amr)
        if(amr)
        {
            
            localStorage.setItem('mspArea2', text.value)  ;          
            
        }
    }
    function check3(){
        var amr = confirm('Wanna save this change ?');
        var text = document.getElementById('p3') ;
        console.log(amr)
        if(amr)
        {
            
            localStorage.setItem('mspArea3', text.value)  ;          
            
        }
    }
    function check4(){
        var amr = confirm('Wanna save this change ?');
        var text = document.getElementById('p4') ;
        console.log(amr)
        if(amr)
        {
            
            localStorage.setItem('mspArea4', text.value)  ;          
            
        }
    }
    
    
if(localStorage.getItem('mspArea1') !== null)
{
    document.getElementById('p1').value = localStorage.getItem('mspArea1') ;
}
if(localStorage.getItem('mspArea2') !== null)
{
    document.getElementById('p2').value = localStorage.getItem('mspArea2') ;
}
if(localStorage.getItem('mspArea3') !== null)
{
    document.getElementById('p3').value = localStorage.getItem('mspArea3') ;
}
if(localStorage.getItem('mspArea4') !== null)
{
    document.getElementById('p4').value = localStorage.getItem('mspArea4') ;
}

