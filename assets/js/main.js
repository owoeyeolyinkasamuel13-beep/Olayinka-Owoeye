/* ==========================================
   TYPING EFFECT
========================================== */

const titles = [

    "Cybersecurity Engineer",

    "AI Security Researcher",

    "Network Security Enthusiast",

    "Problem Solver"

];

const typingText = document.getElementById("typing-text");

let currentTitle = 0;

function changeTitle() {

    typingText.textContent = titles[currentTitle];

    currentTitle++;

    if (currentTitle >= titles.length) {

        currentTitle = 0;

    }

}

changeTitle();

setInterval(changeTitle, 2500);


/* ==========================================
   PROJECT CAROUSELS
========================================== */

document.querySelectorAll("[data-carousel]").forEach((carousel) => {

    const track = carousel.querySelector(".carousel-track");
    const slides = carousel.querySelectorAll(".carousel-slide");
    const previousButton = carousel.querySelector(".carousel-prev");
    const nextButton = carousel.querySelector(".carousel-next");
    const dots = carousel.querySelectorAll(".carousel-dot");

    let currentSlide = 0;
    let autoSlide;

    function showSlide(index) {

        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }

        track.style.transform = `translateX(-${currentSlide * 100}%)`;

        dots.forEach((dot, dotIndex) => {

            dot.classList.toggle(
                "active",
                dotIndex === currentSlide
            );

        });

    }


    function nextSlide() {

        showSlide(currentSlide + 1);

    }


    function previousSlide() {

        showSlide(currentSlide - 1);

    }


    function startAutoSlide() {

        autoSlide = setInterval(nextSlide, 5000);

    }


    function resetAutoSlide() {

        clearInterval(autoSlide);

        startAutoSlide();

    }


    nextButton.addEventListener("click", () => {

        nextSlide();

        resetAutoSlide();

    });


    previousButton.addEventListener("click", () => {

        previousSlide();

        resetAutoSlide();

    });


    dots.forEach((dot, index) => {

        dot.addEventListener("click", () => {

            showSlide(index);

            resetAutoSlide();

        });

    });


    carousel.addEventListener("mouseenter", () => {

        clearInterval(autoSlide);

    });


    carousel.addEventListener("mouseleave", () => {

        startAutoSlide();

    });


    showSlide(0);

    startAutoSlide();

});

// ==========================================
// MOBILE NAVIGATION
// ==========================================

const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

if (menuBtn && navLinks) {

    menuBtn.addEventListener('click', () => {

        navLinks.classList.toggle('active');

    });


    navLinks.querySelectorAll('a').forEach(link => {

        link.addEventListener('click', () => {

            navLinks.classList.remove('active');

        });

    });

}


// ==========================================
// ACTIVE NAVIGATION ON SCROLL
// ==========================================

const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

function updateActiveNav() {

    let currentSection = '';

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute('id');

        }

    });

    navItems.forEach(link => {

        link.classList.remove('active');

        if (link.getAttribute('href') === `#${currentSection}`) {

            link.classList.add('active');

        }

    });

}

window.addEventListener('scroll', updateActiveNav);

updateActiveNav();