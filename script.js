// Toggle menu
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("show");
}

// About Section
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top <= window.innerHeight && rect.bottom >= 0;
}

// Animation when scroll
function handleScrollAnimation() {
  const aboutText = document.getElementById("aboutText");
  const aboutImage = document.getElementById("aboutImage");

  if (isInViewport(aboutText)) {
    aboutText.classList.add("show-text");
  }
  if (isInViewport(aboutImage)) {
    aboutImage.classList.add("show-image");
  }
}

// Trigger on scroll
window.addEventListener("scroll", handleScrollAnimation);
window.addEventListener("load", handleScrollAnimation);

// Projects
function animateCards() {
  const cards = document.querySelectorAll(".project-card");
  cards.forEach((card) => {
    if (isInViewport(card)) {
      card.classList.add("show");
    }
  });
}

window.addEventListener("scroll", animateCards);
window.addEventListener("load", animateCards);

// Contacts
function animateContact() {
  const contactSection = document.querySelector(".contact");
  if (isInViewport(contactSection)) {
    contactSection.classList.add("show");
  }
}

window.addEventListener("scroll", animateContact);
window.addEventListener("load", animateContact);
