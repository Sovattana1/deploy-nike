var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}


const featuredHomepage = document.getElementById('featured-on-homepage-hover');

function handleMouseEnter() {
    this.style.maxHeight = '400px'; // Adjust the maximum height as needed
}

function handleMouseLeave() {
    this.style.maxHeight = '150px'; // Adjust the initial maximum height as needed
}

function addEventListeners() {
    featuredHomepage.addEventListener('mouseenter', handleMouseEnter);
    featuredHomepage.addEventListener('mouseleave', handleMouseLeave);
}

function removeEventListeners() {
    featuredHomepage.removeEventListener('mouseenter', handleMouseEnter);
    featuredHomepage.removeEventListener('mouseleave', handleMouseLeave);
}

function handleWindowResize() {
    if (window.innerWidth >= 768) {
        addEventListeners();
    } else {
        removeEventListeners();
    }
}

// Initial setup
handleWindowResize();

// Listen for window resize events
window.addEventListener('resize', handleWindowResize);
