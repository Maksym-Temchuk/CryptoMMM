document.querySelectorAll('a.scroll').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = 80;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        })
    })
})

const button = document.querySelector('.header-button');
const audio = new Audio('../audio/background.mp3');

button.addEventListener('click', function() {
      audio.play();
});