document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll for nav links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const openPopupButton = document.getElementById('openPopupButton');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('closePopup');

    // Function to open the popup
    openPopupButton.addEventListener('click', () => {
        popup.style.display = 'flex';
    });

    // Function to close the popup
    closePopup.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    


    // Carousel functionality
    let slideIndex = 0;
    const slides = document.querySelectorAll('.carousel-inner img');
    const totalSlides = slides.length;

    function showSlides(n) {
        if (n >= totalSlides) {
            slideIndex = 0;
        } else if (n < 0) {
            slideIndex = totalSlides - 1;
        } else {
            slideIndex = n;
        }

        slides.forEach((slide, index) => {
            slide.style.display = index === slideIndex ? 'block' : 'none';
        });
    }

    function plusSlides(n) {
        showSlides(slideIndex + n);
    }

    document.querySelector('.prev').addEventListener('click', () => plusSlides(-1));
    document.querySelector('.next').addEventListener('click', () => plusSlides(1));

    // Initialize first slide
    showSlides(slideIndex);
});
