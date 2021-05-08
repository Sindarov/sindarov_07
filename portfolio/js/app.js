window.addEventListener('DOMContentLoaded' , function (){
    window.addEventListener('scroll' , function(){
        const header = document.querySelector('header');
        header.classList.toggle('sticky'  , window.scrollY > 0);
    });

    const menuBtn = document.querySelector('.menu-btn');
    const navigation = document.querySelector('.navigation');
    const navigationItem = document.querySelectorAll('.navigation a');
    menuBtn.addEventListener('click' , function(){
        menuBtn.classList.toggle('active');
        navigation.classList.toggle('active');
    });

    navigationItem.forEach(navItem =>{
        navItem.addEventListener('click' , () =>{
            menuBtn.classList.remove('active');
            navigation.classList.remove('active');
        });
    });

    const scrollBtn = document.querySelector('.scrollTop');

    window.addEventListener('scroll' , function(){
        scrollBtn.classList.toggle('active'  , window.scrollY > 100);
    });
})