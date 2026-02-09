document.addEventListener("DOMContentLoaded", function() {
    const faders = document.querySelectorAll(".fade-in");

    const appearOptions = {
        threshold: 0.3, // частина блоку, яка має з'явитися
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("show");
            observer.unobserve(entry.target); // з’являється лише один раз
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});
