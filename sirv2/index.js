console.log("connected");

var ff = document.getElementsByTagName('form')[0];
var bb = document.getElementById('btn-submit');
var cc = document.getElementById('chkbox');

bb.disabled = true;

cc.addEventListener('change', function(){
    if(cc.checked){
        bb.disabled = false;
    }else{
        bb.disabled = true;
    }
    bb.classList.toggle('btn-sub-disabled');
    bb.classList.toggle('btn-sub');
});

bb.addEventListener('click', function(e){
    e.preventDefault();
    var regex = /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/;
    var email = document.getElementById('inputEmail').value;
    var name = document.getElementById('inputName').value;

    if(email.search(regex) >= 0){
        console.log("email is correct");
        post('submit.php', 'name=' + name + '&email=' + email + '&add=Submit');    
    }
});

function post(url, params){
    var http = new XMLHttpRequest();
    http.open('POST', url, true);

    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) {
            var res = JSON.parse(http.responseText);
            if(res.status == 'success'){
                alert(res.data);
            }else if(data.status == 'error'){
                alert(res.data);
            }
        }
    }
    http.send(params);
}



document.getElementsByTagName('body')[0].onscroll = function(e) {
    console.log("scrolling body");
    
};

document.getElementsByClassName('container')[0].addEventListener('scroll', function(e){
    console.log('scrolling container');
});

function scrollToId(id){
    document.getElementById(id).scrollIntoView({ 
        behavior: 'smooth' 
    });
}

window.addEventListener("wheel", event => {
    const delta = Math.sign(event.deltaY);
    console.info(delta);
    if(event.deltaY < 0){

    }else{
        
    }
});