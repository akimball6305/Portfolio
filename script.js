function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

// Featured Projects Carousel
let currentSlide = 0;
let autoRotateInterval;

function initCarousel() {
    const showcaseItems = document.querySelectorAll('#showcase .details-container');
    
    if (showcaseItems.length === 0) return;
    
    // Position all slides initially
    updateSlidePositions();
    
    // Create indicators
    createIndicators(showcaseItems.length);
    
    // Start auto-rotation
    startAutoRotate();
}

function updateSlidePositions() {
    const showcaseItems = document.querySelectorAll('#showcase .details-container');
    const total = showcaseItems.length;
    
    showcaseItems.forEach((item, index) => {
        // Remove all position classes
        item.classList.remove('prev', 'active', 'next');
        
        // Calculate position relative to current slide
        let position = index - currentSlide;
        
        // Normalize position for circular behavior
        if (position < -1) position = total + position;
        if (position > 1) position = position - total;
        
        // Apply appropriate class
        if (position === -1) {
            item.classList.add('prev');
        } else if (position === 0) {
            item.classList.add('active');
        } else if (position === 1) {
            item.classList.add('next');
        }
        // Items further away remain hidden (no class)
    });
}

function createIndicators(count) {
    const navContainer = document.querySelector('.carousel-nav');
    if (!navContainer) return;
    
    const indicatorsContainer = navContainer.querySelector('.carousel-indicators');
    if (!indicatorsContainer) return;
    
    indicatorsContainer.innerHTML = '';
    
    for (let i = 0; i < count; i++) {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        if (i === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => goToSlide(i));
        indicatorsContainer.appendChild(indicator);
    }
}

function showSlide(index) {
    const showcaseItems = document.querySelectorAll('#showcase .details-container');
    const indicators = document.querySelectorAll('.indicator');
    
    if (showcaseItems.length === 0) return;
    
    // Wrap around
    if (index >= showcaseItems.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = showcaseItems.length - 1;
    } else {
        currentSlide = index;
    }
    
    // Update slide positions
    updateSlidePositions();
    
    // Update indicators
    indicators.forEach((indicator, i) => {
        indicator.classList.remove('active');
        if (i === currentSlide) {
            indicator.classList.add('active');
        }
    });
}

function nextSlide() {
    showSlide(currentSlide + 1);
    resetAutoRotate();
}

function prevSlide() {
    showSlide(currentSlide - 1);
    resetAutoRotate();
}

function goToSlide(index) {
    showSlide(index);
    resetAutoRotate();
}

function startAutoRotate() {
    autoRotateInterval = setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000); // Rotate every 5 seconds
}

function resetAutoRotate() {
    clearInterval(autoRotateInterval);
    startAutoRotate();
}

// Initialize carousel when page loads
document.addEventListener('DOMContentLoaded', initCarousel);