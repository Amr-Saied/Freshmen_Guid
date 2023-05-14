var adminAccName = "Admin";
var adminAccPass = "006";
var Admin = false;
var names = new Array();
var arrpass = new Array();
var cn ;

if(localStorage.getItem("counter") == null)
{
    cn = 0 ;
}else{
    cn = localStorage.getItem("counter") ;

}

for(let i = 0 ; i < cn ; i++)
{
    names[i] = localStorage.getItem("names_" + i) ;
    arrpass[i] = localStorage.getItem("pass_" + i) ;

}

function transHome() {
    document.location.href = "home.html";

}
function transAdmin() {
    document.location.href = "Admin.html";
}

function search(name, pass) {
    var find = false;
    for (var i = 0; i <= cn; i++) {
        if (names[i] == name && arrpass[i] == pass) {
            find = true;
            localStorage.setItem('cnNow',i) ;
            break;
        }

    }
    return find;
}



function login() {
    document.getElementById("backcolor").style.margin = "0px";
    document.getElementById("loginbox").style.left = "0px";
    document.getElementById("loginform").style.left = "0px";
    document.getElementById("registerbox").style.left = "450px";
    document.getElementById("registerform").style.left = "450px";
}

function register() {
    document.getElementById("backcolor").style.margin = "0px 0px 0px 65px";
    document.getElementById("registerbox").style.left = "0px";
    document.getElementById("registerform").style.left = "0px";
    document.getElementById("loginbox").style.left = "450px";
    document.getElementById("loginform").style.left = "450px";
}

function loginBtn() {

    var name = document.getElementById("N").value
    var pass = document.getElementById("P").value
    var email = document.getElementById('E').value
    if (name == "" || pass == "") {
        alert('fill all inputs')
    }
    else if (name == adminAccName && pass == adminAccPass) {
        alert('Welcome Dear Admin ')
        transHome();
        Admin = true;
    } else {
        if (search(name, pass)) {
            alert('Welcome Dear ' + name);
            transHome();
        } else {
            alert('the name or the pass is wrong');
        }

    }
    sessionStorage.setItem("Admin", Admin);
    document.getElementById('N').value = '';
    document.getElementById('P').value = '';
    localStorage.setItem('nameNow',name) ;
    localStorage.setItem('passNow',pass) ;
    


}

function registerBtn() {
    var name = document.getElementById("Ng").value
    var pas = document.getElementById("Pg").value
    var email = document.getElementById("E").value

    if (name == "" || pas == "") {
        alert('fill all inputs')
    } else {
        names[cn] = name ;
        arrpass[cn] = pas ;
        localStorage.setItem("names_"+ cn , name) ;
        localStorage.setItem("pass_"+ cn , pas) ;
        alert('Saved successfully ! ' + name + ' ' + pas )
    }


    
    cn++ ;
    localStorage.setItem("counter", JSON.parse(cn)) ;
    document.getElementById('Ng').value = '';
    document.getElementById('Pg').value = '';
    document.getElementById('E').value = '';

}

function emailCheck() {
    //document.body.style.backgroundImage = "url('friends9.jpg')";
    var email = document.getElementById("E").value
    var found = false;
    var found1 = false;
    if (document.getElementById('E').value == '') {
  

        
    } else {
        for (let i = 0; i < email.length; i++) {
            if (email.charAt(i) == '@') {
                found = true;
                
            }
            if (email.charAt(i) == '.') {
                found1 = true;

            }
        }
        if (!found || !found1) {
            alert('Invalid E-mail');
            document.getElementById('E').value = '';
        }
    }


}

function passCheck() {
    //document.body.style.backgroundImage = "url('friends11.jpg')";
    var pas = document.getElementById("Pg").value
    var charFound = false;
    var length = 8;

    if (document.getElementById('Pg').value != '') {
        for (let i = 0; i < pas.length; i++) {
            if ((pas.charAt(i) > ' ' && pas.charAt(i) < '0') || (pas.charAt(i) > '9' && pas.charAt(i) < 'A')) {
                charFound = true;
            }


        }

    }
    if (!charFound && pas.length < length) {
        alert('Too Short ! And you should use special characters')
        document.getElementById('Pg').value = '';
    }
    else if (pas.length < length) {
        alert('Too Short !')
        document.getElementById('Pg').value = '';
    }
    else if (!charFound) {
        alert('You should use special characters')
        document.getElementById('Pg').value = '';
    }

}
function e(){
    //document.body.style.backgroundImage = "url('friends10.jpg')";
}

function a() {
    //document.body.style.backgroundImage = "url('friends3.jpg')";
}
function b() {
    //document.body.style.backgroundImage = "url('friends5.jpg')";
}
function c() {
    //document.body.style.backgroundImage = "url('friends6.jpg')";
}
function d() {
   // document.body.style.backgroundImage = "url('friends8.jpg')";
}

var mysong = document.getElementById('audio') ;


console.log(cn)