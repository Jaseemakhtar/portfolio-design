//window.onload = (wE) => {
    var mainSection = document.querySelector('.main');
    var navButtons = document.querySelectorAll('.nav-buttons');
    var navToggle = document.querySelector('#nav-toggle');
    var sections = document.querySelectorAll('.main > div');
    var dataSet = document.querySelector('#pop-dataset');


    var btnSubmit = document.querySelector('#btn-dataset-submit');
    var checkBox = document.querySelector('#chkbox');

    var navState = false;
    var closeModal = document.querySelector('.close-modal');

    var navMenu;
    navMenu = document.querySelector('.nav-items > ul');

    checkBox.addEventListener('change', (cS) => {
        btnSubmit.disabled = !checkBox.checked;
        btnSubmit.classList.toggle('btn-sub-disabled');
        btnSubmit.classList.toggle('btn-sub');
    });
    
    
    closeModal.addEventListener('click', onDatasetClicked);

    function onNavButtonClicked(e, name){
        mainSection.scrollTop = '0';
        let element = e.target;
        console.log(name);
        console.log(element);
        
        if(element.tagName.toLowerCase() == 'i' || element.tagName.toLowerCase() == 'span'){
            element = e.target.parentNode;
        }

        for(var i = 0; i < navButtons.length; i++){
            navButtons[i].classList.remove('selected');
        }

        element.classList.add('selected');

        for(var i = 0; i < sections.length; i++){
            sections[i].classList = '';
            sections[i].classList.add('hide');
        }
        var sectionId = '#sec-' + name;
        var sectionClass = 'section-' + name;
        var section = document.querySelector(sectionId);
        section.classList.remove('hide');
        section.classList.add(sectionClass);
        navigationToggleIfOpen();
    }

    function onDatasetClicked(e){
        dataSet.classList.toggle('hide');
        dataSet.classList.toggle('dataset-modal');
        navigationToggleIfOpen();
    }

    navToggle.addEventListener('click', navigationToggle);

    function navigationToggle(){
        if (window.innerWidth < 767) {
            navToggleMobile();
        }else{
            navToggleDesktop();
        }
    }

    function navigationToggleIfOpen(){
        if(navState)
            navigationToggle();
    }


    function navToggleMobile(){
        if(navState){
            navMenu.style.maxHeight = '0';
            navState = false;
        }else{
            navMenu.style.maxHeight = '500px';
            navState = true;
        } 
        navToggle.querySelector('a > i').classList.toggle('fa-bars');
        navToggle.querySelector('a > i').classList.toggle('fa-times');
    }

    function navToggleDesktop(){
        navToggle.querySelector('a > i').classList.toggle('fa-bars');
        navToggle.querySelector('a > i').classList.toggle('fa-times');
        if(navState){
            navState = false;
            navButtons.forEach((navButton) => {
                navButton.querySelector('.nav-text').style.maxWidth = '0';
                navButton.querySelector('.nav-text').style.maxHeight = '0';
            });
            document.querySelector('.footer > p').style.maxWidth = '0';
            document.querySelector('.footer > p').style.maxHeight = '0';
        }else{
            navState = true;
            navButtons.forEach((navButton) => {
                navButton.querySelector('.nav-text').style.maxWidth = '500px';
                navButton.querySelector('.nav-text').style.maxHeight = '500px';
            });
            document.querySelector('.footer > p').style.maxWidth = '500px';
            document.querySelector('.footer > p').style.maxHeight = '500px';
        }
    }

//}