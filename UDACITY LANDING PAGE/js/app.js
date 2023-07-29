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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


// Store Sections in a Data Structure [array]
const sections = document.querySelectorAll('section');

const sectionsArray = Array.from(sections);

// Create and unordered list using the data-nav attribute

const listContainer = document.querySelectorAll('section');

const list = document.createElement('ul');

sectionsArray.forEach((section) => {
 const listItem = document.createElement('li');
 listItem.textContent = section;
 list.appendChild(listItem);
});

// Add this unordered list [ul] to the top of the page
// Create Navigation Bar 

const navBar = document.querySelector('ul');

for (let i = 0; i < sections.length; i++) {
 const section = sections[i];
 const link = document.createElement('a');
 link.setAttribute('href', '#' + section.id);
 link.textContent = section.dataset.nav; 
 const listItem = document.createElement('li');
 listItem.appendChild(link);
 navBar.appendChild(listItem);
}

navBar.addEventListener('click', (event) => {
	event.preventDefault();
	const targetId = event.target.getAttribute('href');
	const targetElement = document.querySelector(targetId);
	targetElement.scrollIntoView({ behavior: 'smooth' });
});


navBar.classList.add('menu__link');

window.addEventListener('scroll', () => {
	let activeSection = null;
	for (let i = 0; i < sections.length; i++) {
		const section = sections[i];
		const rect = section.getBoundingClientRect();
		if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
			activeSection = section;
			break;
		}
	}
	if (activeSection) {
		document.querySelector('.active').classList.add('active');
		activeSection.classList.remove('active');
	}
});


for (const index in sectionsArray) {
	console.log(sectionsArray[index]);
};

function handleIntersection(entries, observer) {
	entries.forEach(entry => {
		const sectionId = entry.target.getAttribute("id");
		if (entry.isIntersecting) {
			document.getElementById(sectionId).classList.add("active");
		} else {
			document.getElementById(sectionId).classList.remove("active");
		}
	});
}

const options = {
	root: null,
	rootMargin: "0px",
	threshold: 0.1
};

const observer = new IntersectionObserver(handleIntersection, options);


sections.forEach(section => {
	observer.observe(section);
});

// Hiding Fixed Nav Bar w/o scroll 

let prevScrollPos = window.pageYOffset; 
const menuLink = document.querySelector(".menu__link");

function handleScroll() {
	const currentScrollPos = window.pageYOffset;
	if (currentScrollPos > prevScrollPos) {
		menuLink.style.transform = "translateY(-160%)";
	} else {
		menuLink.style.transform = "translateY(0)";
	}
	prevScrollPos = currentScrollPos;
}

window.addEventListener("scroll", handleScroll);