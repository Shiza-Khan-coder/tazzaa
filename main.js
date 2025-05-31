let nav = document.querySelector("header");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 50){
        nav.classList.add("header-scrolled");
    }
    else{
        nav.classList.remove("header-scrolled");
    }

}

let navbar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navbar.forEach(function(e){
    e.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})

/*abhi tk bs header ka code likha hai*/