//home carsouel
$('.home-carousel').owlCarousel({
    loop:true,
    margin:0,
    dots:true,
    autoplay:true,
    autoplayTimeout:7000,
    animateOut: 'fadeOut',
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
//navbar
window.addEventListener('scroll',function(){
    let navbar = document.getElementById("navbar");
    //Toggles Fixed Class In Navbar On Scroll
    navbar.classList.toggle('fixed', this.window.scrollY > 0)
})
//nav button
let menuBtn = document.querySelector ('.menu-btn');
let searchBtn = document.querySelector('.searchbtn');
let cartBtn = document.querySelector ('.cartbtn');
let darkBtn = document.querySelector ('.darkbtn'); 
let signImg = document.getElementById('signImg');


menuBtn.onclick = function(){
    // Toggles Active Class In Search Form On Click
     document.getElementById("nav-items").classList.toggle('active');
 
     //changes icon on click
     if (document.getElementById("search-form").classList.contains('active') ) {
         searchBtn.classList.remove(" bx-menu");
         searchBtn.classList.add(" bx-x");
     }
     else{
         searchBtn.classList.remove(' bx-x');
         searchBtn.classList.add(' bx-menu');
     }
 }
 
searchBtn.onclick = function(){
   // Toggles Active Class In Search Form On Click
    document.getElementById("search-form").classList.toggle('active');

    //changes icon on click
    if (document.getElementById("search-form").classList.contains('active') ) {
        searchBtn.classList.remove(" bx-search-alt-2");
        searchBtn.classList.add(" bx-x");
    }
    else{
        searchBtn.classList.remove(' bx-x');
        searchBtn.classList.add(' bx-search-alt-2');
    }
}

cartBtn.onclick = function(){
    // Toggles Active Class In Cart Form On Click
     document.getElementById("cart").classList.toggle('active');
 
     //changes icon on click
     if (document.getElementById("cart").classList.contains('active') ) {
         cartBtn.classList.remove('bx-cart');
         cartBtn.classList.add(" bx-x");
     }
     else{
         cartBtn.classList.remove(" bx-x");
         cartBtn.classList.add("bx-cart");
     }
 }
 darkBtn.onclick = function(){
    // Toggles Active Class In Cart Form On Click
     dcument.body.classList.toggle('dark-mode');
 
     //if body contain dark mode class
     if (document.body.classList.contains('dark-mode')){
         darktbn.classList.remove("bx-moon");
         darkbtn.classList.add("bx-sun");

     }
     else{
         darkBtn.classList.remove( "bx-sun");
         darkBtn.classList.add("bx-moon");
     }
     
 }
 //menu section
    let menuTabs = document.querySelector('.menu-tabs');
    menuTabs.addEventListener('click', function(e){

        //if clicked tab does not contains active class
        if (e.target.classList.contains('menu-tab-item') && !e.target.classList.contains('active')) {



            const target = e.target .getAttribute("data-target");

            //remove active class from active tab
            menuTabs.querySelector('.active').classList.remove('active');
            
            //add active class from clicked tab
            e.target.classList.add("active");

            let menuSection = document.querySelector(".menu-section");

            menuSection.querySelector(".menu-tab-content.show").classList.remove("show");

            menuSection.querySelector(target).classList.add("show");

            
        }
        //if clicked tab contains active class
        else{
            return//return nothing
        }
    })

    //events carsouel
$('.events-carousel').owlCarousel({
    loop:true,
    margin:30,
    dots:true,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        750:{
            items:2
        },
        1000:{
            items:2
        }
    }
}) 

//team carsouel
$('.team-carousel').owlCarousel({
    loop:true,
    margin:20,
    dots:true,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
}) 

//review carsouel
$('.review-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
}) 

//blog carsouel
$('.blog-carousel').owlCarousel({
    loop:true,
    margin:5,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
}) 




