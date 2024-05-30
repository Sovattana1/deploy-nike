document.addEventListener('DOMContentLoaded', function() {
    // Select the carousel element
    const carousel = document.querySelector('.carousel-img');

    // Track if the user is currently dragging
    let isDragging = false;

    // Store the initial position where the drag starts
    let startPosition = 0;

    // Track the current position of the carousel
    let currentTranslate = 0;

    // Store the previous translation value before the current one
    let prevTranslate = 0;

    // Store the animation frame ID
    let animationID;

    // Get the width of the first item in the carousel
    const items = Array.from(carousel.children);
    const itemWidth = items[0].offsetWidth;
    // Add event listeners for mouse and touch events
    carousel.addEventListener('mousedown', startDrag);
    carousel.addEventListener('touchstart', startDrag, { passive: true });
    carousel.addEventListener('mouseup', endDrag);
    carousel.addEventListener('mouseleave', endDrag);
    carousel.addEventListener('touchend', endDrag, { passive: true });
    carousel.addEventListener('mousemove', drag);
    carousel.addEventListener('touchmove', drag, { passive: true });

    // Select the left and right buttons
    const leftButton = document.getElementById('left');
    const rightButton = document.getElementById('right');

    // Add click event listeners to the left and right buttons
    leftButton.addEventListener('click', scrollLeft);
    rightButton.addEventListener('click', scrollRight);

    // Function to handle the start of the dragging
    function startDrag(event) {
        if (event.type === 'touchstart') {
            // Set the start position to the touch clientX
            startPosition = event.touches[0].clientX;
        } else {
            // Set the start position to the mouse clientX
            startPosition = event.clientX;
            // Set isDragging to true to indicate the dragging has started
            isDragging = true;
        }
        // Store the current translate value as the previous one
        prevTranslate = currentTranslate;

        // Disable transition during drag
        carousel.style.transition = 'none';
    }

    // Function to handle the dragging motion
    function drag(event) {
        if (isDragging) {
            // Determine the current position (touch or mouse)
            const currentPosition = event.type === 'touchmove' ? event.touches[0].clientX : event.clientX;
            // Calculate the difference between the current and start positions
            const diff = currentPosition - startPosition;
            // Update the current translate value
            currentTranslate = prevTranslate + diff;
            // Apply the translation to the carousel
            carousel.style.transform = `translateX(${currentTranslate}px)`;
        }
    }

    // Function to handle the end of the dragging
    function endDrag() {
        // Set isDragging to false to indicate the dragging has ended
        isDragging = false;

        // Enable transition after drag
        carousel.style.transition = 'transform 0.3s ease-out';

        // Snap to the nearest item
        const offset = currentTranslate % itemWidth;
        if (Math.abs(offset) > itemWidth / 2) {
            currentTranslate -= (itemWidth - Math.abs(offset)) * Math.sign(offset);
        } else {
            currentTranslate -= offset;
        }

        // Limit the translate value to prevent excessive scrolling
        currentTranslate = Math.max(currentTranslate, -carousel.scrollWidth + carousel.offsetWidth);
        currentTranslate = Math.min(currentTranslate, 0);

        // Apply the final translation to the carousel
        carousel.style.transform = `translateX(${currentTranslate}px)`;
    }

    // Function to scroll to the left
    function scrollLeft() {
        currentTranslate += itemWidth;
        endDrag();
    }

    // Function to scroll to the right
    function scrollRight() {
        currentTranslate -= itemWidth;
        endDrag();
    }
});
