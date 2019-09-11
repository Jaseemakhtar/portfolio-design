console.log("connected");
var ff = document.getElementsByTagName('form')[0];
var bb = document.getElementById('btn-submit');
var cc = document.getElementById('chkbox');

cc.addEventListener('change', function(){
    if(cc.checked){
        bb.disabled = false;
    }else{
        bb.disabled = true;
    }
});

bb.addEventListener('click', function(){

});

