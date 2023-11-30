
// Define the function to adjust the height
function scrollHeight() {
    var content = document.querySelector('#parchment');
    var container = document.querySelector('#contain');
    var img = document.querySelectorAll('.image img');

    // SVG feTurbulence can modify all other elements, for this reason "parchment" is in another <div> and in absolute position.
    // so for a better effect, absolute height is defined by its content.
    content.style.height = container.offsetHeight + 'px';

    // Loop through img elements and add styles
    img.forEach(function (image) {
        image.style.objectFit = 'cover';
        image.style.width = '100%';
        image.style.height = '100%';
    });
}

// Call the function when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    scrollHeight();
});

// Redraw when viewport is modified
window.addEventListener('resize', function (event) {
    scrollHeight();
});