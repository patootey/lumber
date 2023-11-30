// Define the function to adjust the height
function scrollHeight() {
    var content = document.querySelector('#parchment');
    var container = document.querySelector('#contain');
    // SVG feTurbulence can modify all other elements, for this reason "parchment" is in another <div> and in absolute position.
    // so for a better effect, absolute height is defined by its content.
    content.style.height = container.offsetHeight + 'px';
}

// Call the function after the page is fully loaded
window.onload = function () {
    scrollHeight();
};

// Redraw when viewport is modified
window.addEventListener('resize', function (event) {
    scrollHeight();
});