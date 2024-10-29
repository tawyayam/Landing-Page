// TODO: Select Elements
const header = document.querySelector("header");
const sections = document.querySelectorAll("section");
const mainNav = document.getElementById("navbar_list");

// TODO: Craeting Navbar
sections.forEach((sec, index) => {
  // Create li + put className to all li for style
  const list = document.createElement("li");
  list.className = "list";
  // Add Active class on fist li
  if (index === 0) list.classList.add("active");
  // Create anchor tag
  const a = document.createElement("a");
  const wordToUpper = `${sec.id.charAt(0).toUpperCase()}${sec.id.slice(1)}`;

  a.href = `#${sec.id}`;
  a.innerHTML = wordToUpper;
  // Append a tag to li
  list.appendChild(a);

  // Append li to main navbar[ul]
  mainNav.appendChild(list);
});

// TODO: Add active class to current li link
// Brings all lists from main ul
let navLists = document.querySelectorAll("#navbar_list li");
navLists.forEach((list) => {
  list.addEventListener("click", (e) => {
    navLists.forEach((li) => {
      li.classList.remove("active");
      e.currentTarget.classList.add("active");
    });
  });
});

// TODO: Add Active Class On Navbar Based On Section + Highlighted Section
window.addEventListener("scroll", navActive);

function navActive() {
  sections.forEach((section) => {
    if (section.getBoundingClientRect().top < 70) {
      section.classList.add("highlighted");
      navLists.forEach((li) => {
        if (section.id == li.textContent.toLowerCase()) {
          navLists.forEach((link) => {
            link.classList.remove("active");
            li.classList.add("active");
          });
        }
      });
    } else if (section.getBoundingClientRect().top > 550) {
      section.classList.remove("highlighted");
    }
  });
}

// TODO: Add backgroung color to navbar when scrolling
document.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});
