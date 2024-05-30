




//  Nav Bar Position Fixed
let lastScrollY = window.scrollY;
        const navBar = document.getElementById('nav-bar');
        let scrollDirection = '';
    
        window.addEventListener('scroll', () => {
            if (window.scrollY > lastScrollY) {
                // Scrolling down
                if (scrollDirection !== 'down') {
                    navBar.style.top = '-60px'; // Hide the nav bar
                    scrollDirection = 'down';
                }
                navBar.classList.remove('active'); // Remove the active class when scrolling down
            } else {
                // Scrolling up
                if (scrollDirection !== 'up') {
                    navBar.style.top = '0'; // Show the nav bar
                    scrollDirection = 'up';
                }
                if (window.scrollY === 0) {
                    navBar.classList.remove('active'); // Remove the active class when at the top
                } else {
                    navBar.classList.add('active'); // Add the active class when scrolling up
                }
            }
            lastScrollY = window.scrollY;
        });






// // hover dropdown

const newAndFeature = document.getElementById('featured-hover');
const subFeature = document.querySelector('.nav-hover-content');

// Function to show the collapse on hover
function showCollapseHover() {
    subFeature.classList.add('active');
}
// Function to hide the collapse when not hovered
function hideCollapseHover() {
    subFeature.classList.remove('active');
}

// Add event listeners for mouse enter and mouse leave
newAndFeature.addEventListener('mouseenter', showCollapseHover);
newAndFeature.addEventListener('mouseleave', hideCollapseHover);






const menHover = document.getElementById('men-hover');
const subMen = document.querySelector('.nav-hover-content-men');

function showMenCollapse() {
    subMen.classList.add('active');
}

function hideMenCollapse() {
    subMen.classList.remove('active');
}

menHover.addEventListener('mouseenter', showMenCollapse);
menHover.addEventListener('mouseleave', hideMenCollapse);

// For hideOnMobilewomen
const hideOnMobilewomen = document.getElementById('hideOnMobilewomen');
const subWomen = document.querySelector('.nav-hover-content-women');

function showWomenCollapse() {
    subWomen.classList.add('active');
}

function hideWomenCollapse() {
    subWomen.classList.remove('active');
}

hideOnMobilewomen.addEventListener('mouseenter', showWomenCollapse);
hideOnMobilewomen.addEventListener('mouseleave', hideWomenCollapse);

// For hideOnMobilekids
const hideOnMobilekids = document.getElementById('hideOnMobilekids');
const subKids = document.querySelector('.nav-hover-content-kids');

function showKidsCollapse() {
    subKids.classList.add('active');
}

function hideKidsCollapse() {
    subKids.classList.remove('active');
}

hideOnMobilekids.addEventListener('mouseenter', showKidsCollapse);
hideOnMobilekids.addEventListener('mouseleave', hideKidsCollapse);

// For hideOnMobileAccessories
const hideOnMobileAccessories = document.getElementById('hideOnMobileAccessories');
const subAccessories = document.querySelector('.nav-hover-content-accessories');

function showAccessoriesCollapse() {
    subAccessories.classList.add('active');
}

function hideAccessoriesCollapse() {
    subAccessories.classList.remove('active');
}

hideOnMobileAccessories.addEventListener('mouseenter', showAccessoriesCollapse);
hideOnMobileAccessories.addEventListener('mouseleave', hideAccessoriesCollapse);

// For hideOnMobileSale
const hideOnMobileSale = document.getElementById('hideOnMobileSale');
const subSale = document.querySelector('.nav-hover-content-sale');

function showSaleCollapse() {
    subSale.classList.add('active');
}

function hideSaleCollapse() {
    subSale.classList.remove('active');
}

hideOnMobileSale.addEventListener('mouseenter', showSaleCollapse);
hideOnMobileSale.addEventListener('mouseleave', hideSaleCollapse);








// side bar



function showSidebar(){
    const sidebar = document.querySelector('.side-bar')
    sidebar.style.display = 'flex'
}

function closeSidebar () {
    const closebar = document.querySelector('.side-bar')
    closebar.style.display= 'none'
}

function toggleSidebar() {
    const sidebar = document.querySelector('.side-bar');
    // Toggle the display property
    sidebar.style.display = sidebar.style.display === 'flex' ? 'none' : 'flex';
}

// Attach this toggleSidebar function to the menu icon click event
const menuIcon = document.querySelector('.menu-icon');
// menuIcon.addEventListener('click', toggleSidebar);
