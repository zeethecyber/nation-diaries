// Code for search bar toggle

const searchBtn = document.querySelector('.search-btn');
const searchNav = document.querySelector('.nav-search');
searchBtn.addEventListener('click', showSearchBar)

function showSearchBar(){
    if(searchNav.style.top!=='100%')
    {
        searchNav.style.top='100%';
        searchNav.style.opacity='1';
    }else{
        searchNav.style.top='-100%';
        searchNav.style.opacity='0';
    }
}


// Code for menu side bar toggle

const menuBtn = document.querySelector('.menu-icon');
const menuBar = document.querySelector('.nav-menu-responsive');

menuBtn.addEventListener('click', showMenuBar);

function showMenuBar(){
    if(menuBar.style.left!=='0px'){
        menuBar.style.left='0px';
    }else{
        console.log('clicked');
       menuBar.style.left='-100%';
    }
}