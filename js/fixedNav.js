// console.log("Hello WOrld");

const fixedNavbar = document.querySelector(".fixed-navbar-section");
// console.log(fixedNavbar); //debugs fixedNavbar null error

window.onscroll = function() {
    let top = window.scrollY;
    // console.log(top); //180 is where I want the style change to happen

    if (top >= 180) { 
        fixedNavbar.classList.add('active');
    } else {
        fixedNavbar.classList.remove('active');
    }
}
