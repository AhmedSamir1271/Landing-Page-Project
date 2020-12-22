/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll("section");


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// Scroll to top useing Top Button

const topBtn = document.querySelector("button");    // Create variable to TopButton
topBtn.classList.add("topBtn");     // Add class of styles to TopButton
topBtn.addEventListener('click', function(){    // Scroll to Top when click TopButton
    window.scrollTo(0 , 0);
    const links = document.querySelectorAll("a");   // Clear active from link to start from top section again
    for(const section of sections){     // To remove active class from all sections
        section.classList.remove("your-active-class");
    }
    for(const link of links){       // Remove active class from all links
        link.classList.remove("your-active-class-a");
    }
})

// Hide the nav when scroll to top

let prevScrollPos = window.pageYOffset;     // Get the first top position for the screen
window.addEventListener('scroll', function(){
    let currentScrollPos = window.pageYOffset;  // Get the current top position for the screen after scroll
    if(prevScrollPos < currentScrollPos){   // Check if the first top position great than the current top position
        document.querySelector(".page__header").style.top = "0";    // (True) show the navbar
    }else{
        document.querySelector(".page__header").style.top = "-100px";   // (True) hide the navbar
    }
    prevScrollPos = currentScrollPos;   // To renew the first top position for the screen when scrolling stop
})

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

let d = document.createDocumentFragment();  // Create a fragment variable (d) to store all variables i need.
for(const section of sections){
    const linkText = section.getAttribute("data-nav");
    const node = document.createElement("li");  // Create li element.
    const link = document.createElement("a");   // Create a element.
    link.classList.add("menu__link");
    link.addEventListener('click', function(){  // Function to scroll to the link that was clicked
        section.scrollIntoView();
    })
    const nodeText = document.createTextNode(linkText);  // Create Text Node.
    link.appendChild(nodeText);
    node.appendChild(link);
    d.appendChild(node);
}
document.getElementById("navbar__list").appendChild(d);     // Add all variables in (d) to ul element.

// Add class 'active' to section when near top of viewport

document.addEventListener('scroll', function(){     // Function to add active class to sections and links when scrolling
    for(const section of sections){
        const position = section.getBoundingClientRect();   // To get position of section from top,bottom,left and right
        if(position.top>=0 && position.top<=150){   // To check if section near top of viewport or not
            for(const section of sections){     // To remove active class from all sections
                section.classList.remove("your-active-class");
            }
            section.classList.add("your-active-class");     // Add the active class to section
            const links = document.querySelectorAll("a");
            for(const link of links){
                if(link.innerHTML == section.getAttribute("data-nav")){     // Check if linkText equal to data-nav of section near top of viewport 
                    for(const link of links){
                        link.classList.remove("your-active-class-a");       // Remove active class from all links
                    }
                    link.classList.add("your-active-class-a");      // Add the active class to link
                }
            }
        }
    }
})

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


