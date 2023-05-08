const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-list');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-open');

        burger.classList.toggle('toggle');
    });
}

navSlide();

const navList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-list li a');

navLinks.forEach(link => {
  link.addEventListener('click', function() {
    // Remove active class from all links
    navLinks.forEach(link => link.classList.remove('active'));

    // Add active class to the clicked link
    this.classList.add('active');
  });
});