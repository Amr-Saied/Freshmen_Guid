
var realfile = document.getElementById('real-file') ;
var customefile = document.getElementById('custom') ;
var image = document.getElementById('img') ;

let namenow = document.getElementById('N');
let pass = document.getElementById('P');


namenow.value = localStorage.getItem('nameNow');
pass.value = localStorage.getItem('passNow') ;

customefile.addEventListener("click",function(){
    realfile.click() ;
});

realfile.addEventListener("change" , function(){

    if(realfile.value){
        document.getElementById("img").src = realfile.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1]; 
    }

});

var save = document.getElementById('save'); 

save.addEventListener("click" , function(){
    var cn = localStorage.getItem('cnNow') ;
    localStorage.setItem('nameNow', namenow.value) ;
    localStorage.setItem('passNow', pass.value) ;
    localStorage.setItem('names_'+cn, namenow.value) ;
    localStorage.setItem('pass_'+cn, pass.value) ;
    alert('Saved !') ;

})

