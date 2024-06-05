document.addEventListener('scroll', function() {
    const spotsContainer = document.getElementById('spots-container');
    const scrollPosition = window.scrollY;

    // Example: Fade in spots based on scroll position
    const spots = document.querySelectorAll('.spot');
    spots.forEach((spot, index) => {
        if (scrollPosition > index * 100) {
            spot.style.opacity = 1;
        }
    });
});

// Generate spots dynamically
const spotsContainer = document.getElementById('spots-container');
for (let i = 0; i < 10; i++) {
    const spot = document.createElement('div');
    spot.className = 'spot';
    spot.addEventListener('click', function() {
        window.location.href = `projects/project${i+1}.html`;
    });
    spotsContainer.appendChild(spot);
}
