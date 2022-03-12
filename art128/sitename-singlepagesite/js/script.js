document.addEventListener('DOMContentLoaded', function() {

    //TOGGLE NAV MOBILE MENU FOR SMALL SCREENS
    const menubutton = document.querySelector('.menu-button');
    const menunav = document.querySelector('.toggle-nav');
    menubutton.addEventListener('click', function() {
        if (menunav.getAttribute('data-navstate') === 'open') {
            menunav.setAttribute('data-navstate', 'closed');
        } else {
            menunav.setAttribute('data-navstate', 'open');
        };
    });

    //STICKY NAV - REMOVE EXPANSION FOR MOBILE ON SINGLE-PAGE SITE
    const stickynavlinks = document.querySelectorAll('.sticky nav a');
    for (let i = 0; i < stickynavlinks.length; i++) {
        stickynavlinks[i].onclick = function () {
            menunav.setAttribute('data-navstate', 'closed');
        }
    };  
    
    //SITE ID - REMOVE EXPANSION FOR MOBILE ON SINGLE-PAGE SITE
    const stickyidlink = document.querySelector('.sticky .site-id a');
    stickyidlink.onclick = function () {
        menunav.setAttribute('data-navstate', 'closed');
    };  

});






