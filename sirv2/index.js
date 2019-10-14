var ff = document.getElementsByTagName('form')[0];
var bb = document.getElementById('btn-submit');
var cc = document.getElementById('chkbox');
var navItems;
var navItemsLis;
var allDisplays = document.querySelectorAll('.side-main');
var allButtons = document.querySelectorAll('.side > ul li > a');
var dataset = document.querySelector('#dataset');
var modalClose = document.querySelector('.close-modal');

function openDataset(){
    dataset.classList.toggle('hide');
};

modalClose.addEventListener('click', function(){
    dataset.classList.toggle('hide');
});

bb.disabled = true;
//setUp();

// function setUp(){
//     navItems = document.querySelectorAll('.side-nav > ul li a');
//     navItemsLis = document.querySelector('.side-nav > ul');    
//     for(var i = 0; i < navItems.length; i++){
//         navItems[i].addEventListener('click', clickOnNav);
//     }
// }

// function clickOnNav(e){
//     var removedItem;
//     for(var i = 0; i < navItems.length; i++){
//         if(navItems[i].classList.contains('selected-a')){
//             navItems[i].classList.remove('selected-a');
//         }

//         if(e.target === navItems[i]){
//             removedItem = navItemsLis.removeChild(e.target.parentNode);
//             console.log(removedItem);
//         }
//     }

//     navItemsLis.insertBefore(removedItem, navItems[0].parentNode);
//     e.target.classList.add('selected-a');
//     setUp();
// }




cc.addEventListener('change', function(){
    if(cc.checked){
        bb.disabled = false;
    }else{
        bb.disabled = true;
    }
    bb.classList.toggle('btn-sub-disabled');
    bb.classList.toggle('btn-sub');
});

// bb.addEventListener('click', function(e){
//     e.preventDefault();
//     var regex = /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/;
//     var email = document.getElementById('inputEmail').value;
//     var name = document.getElementById('inputName').value;

//     if(email.search(regex) >= 0){
//         console.log("email is correct");
//         post('submit.php', 'name=' + name + '&email=' + email + '&add=Submit');    
//     }
// });

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

function changeDisplay(pos){
    for(var i = 0; i < allDisplays.length; i++){
        if(i == pos){
            allDisplays[i].classList.remove('hide');
            allButtons[i].classList.add('selected-a');
        }else{
            allDisplays[i].classList.add('hide');
            allButtons[i].classList.remove('selected-a');
        }

        
    }
}

function smoothScrollTo(id){
    // document.getElementById(id).scrollIntoView({ 
    //     behavior: 'smooth' 
    // });

    document.getElementsByClassName(id)[0].scrollIntoView({
        behavior: 'smooth'
    })
}

// mobile version - not refactored file
var btnHamburger;
var navMenu;
var navState = false;

if (window.innerWidth < 767) {
    btnHamburger = document.getElementById('btn-ham'), 
    navMenu = document.querySelector('#nav-menu > ul');

    btnHamburger.addEventListener('click', navigationToggle);

}

function navigationToggle(e){
    if(navState){
        navMenu.style.maxHeight = '0';
        navState = false;
    }else{
        navMenu.style.maxHeight = '500px';
        navState = true;
    } 
    btnHamburger.children[0].classList.toggle('fa-bars');
    btnHamburger.children[0].classList.toggle('fa-times');
}