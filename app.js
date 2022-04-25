
const navSlide = () => {
    let menu = document.querySelector('.menu');
    let navBar = document.querySelector('.nav-links');
    let navLinks = document.querySelectorAll('.nav-links li')

    menu.addEventListener('click', () => {
    //Toggle Nav-active class to nav-links
        navBar.classList.toggle('nav-active');

        //Animate
        navLinks.forEach((link, index) => {

            //If there is an animation
            if(link.style.animation) {
                link.style.animation = "";  //no animation
            //other
            } else {
                link.style.animation = `
                navAnimation 0.2s ease forwards ${index / 5 + 0.38}s
                `
                //5 + .38s = for delay animation
            }

        });

        //add class to menu
        menu.classList.toggle('toggle');
    });    
}

navSlide();