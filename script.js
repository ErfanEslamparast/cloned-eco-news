document.addEventListener("DOMContentLoaded", function () {

// showing dropdown-menu by click
document.querySelectorAll('.dropdown-menu').forEach(item => {
    
    item.addEventListener('click', function (e) {
        const menu = this.nextElementSibling;
        
        if (menu.classList.contains('show')) {
            menu.classList.remove('show');
        } else {
            document.querySelectorAll('.dropdown-menu').forEach(subMenu => subMenu.classList.remove('show'));
            menu.classList.add('show');
        }
    });
});

  // sliding categoreisby click

const scrollContainer = document.querySelector('.scroll-navbar');
    const scrollLeftBtn = document.querySelector('.scroll-btn.left');
    const scrollRightBtn = document.querySelector('.scroll-btn.right');

    scrollLeftBtn.addEventListener('click', () => {
        scrollContainer.scrollBy({
            left: -100,
            behavior: 'smooth'
        });
    });

    scrollRightBtn.addEventListener('click', () => {
        scrollContainer.scrollBy({
            left: 100,
            behavior: 'smooth'
        });
    });

    // show section bottom of the header

    // const header = document.querySelector('.header');
    // const navbarToggler = document.querySelector('.navbar-toggler');
    // const newsSection = document.querySelector('.news');

    // function updateSectionMargin() {
    //     const headerHeight = header.offsetHeight; // header height calculating
    //     newsSection.style.marginTop = `${headerHeight}px`; // add a space to section same by header height
    // }
    // updateSectionMargin()
    // navbarToggler.addEventListener('click',updateSectionMargin)
    // window.addEventListener('resize',updateSectionMargin)



  
    //set unique color for each boxes in category and special news sections
  function setUniqueColor(target) {
    document.querySelectorAll(target).forEach(section => {
        let color = section.getAttribute('data-color');
        section.style.setProperty('--main-color', color);
    });
  }
    setUniqueColor('.special-news')
    setUniqueColor('.category-item')
    setUniqueColor('.small-news-box')
    setUniqueColor('.news-subjects .menu-item')
    setUniqueColor('.news .carousel-item')
    

//    my codes 👇


    // add an active class to the menu-item that selected
//     const menuItems = document.querySelectorAll('.menu-item')
//      menuItems.forEach(item=>{
//         item.addEventListener('click',function(){
//             menuItems.forEach(i=>i.classList.remove('active'))
//         item.classList.add('active')
//         car_indMatcher('.menu-item','.carousel-item')
//         }
//         )    
//     })


//     function car_indMatcher (targets,desTargets){
//         const activeCarousel = [...document.querySelectorAll(targets)].find(trg => trg.classList.contains('active'));
//         let activeCarouselDataColor = activeCarousel.getAttribute('data-color');

      

//         document.querySelectorAll(desTargets).forEach(trg=>{
            
//             if(trg.getAttribute('data-color') == activeCarouselDataColor){
//                 trg.classList.add('active')
//             }
//             else{
//                 trg.classList.remove('active')
//             }
//         })

//         //select carousel and create an instance of sliders
//         let myCarousel = document.querySelector("#carouselExampleIndicators");
//         let carouselInstance = bootstrap.Carousel.getOrCreateInstance(myCarousel);

//         if(targets === '.menu-item'){
//             document.querySelectorAll(".menu-item").forEach(button => {
//                 button.addEventListener("click", function () {
//                     let slideIndex = this.getAttribute("data-slide-to");                    
//                     carouselInstance.to(slideIndex);
//                 });
//             });
//         }
        
//     }
// car_indMatcher('.carousel-item','.menu-item')

// document.querySelector('#carouselExampleIndicators').addEventListener("slid.bs.carousel",()=>car_indMatcher('.carousel-item','.menu-item'))


// chatGPT codes that optimized my codes 👇



    const menuItems = document.querySelectorAll(".menu-item");
    const carouselElement = document.querySelector("#carouselExampleIndicators");
    const carouselInstance = bootstrap.Carousel.getOrCreateInstance(carouselElement);

    menuItems.forEach((item, index) => {
        item.addEventListener("click", function () {
            menuItems.forEach(i => i.classList.remove("active"));
            item.classList.add("active");
            carouselInstance.to(index);
        });
    });

    carouselElement.addEventListener("slid.bs.carousel", function () {
        const activeIndex = document.querySelector(".carousel-item.active").getAttribute("data-bs-slide-to");
        menuItems.forEach(i => i.classList.remove("active"));
        menuItems[activeIndex].classList.add("active");
    });



 // vertical slide for News Section
new Swiper(".myNewsSwiper", {
    direction: "vertical",
    loop: true,
    autoplay: {
        delay: 3000,
    },
    height:'26',
    speed: 800,
});

});