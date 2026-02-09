document.addEventListener("DOMContentLoaded", function() {
    let viewport = document.querySelector('meta[name="viewport"]');
    
    if (!viewport) {
        viewport = document.createElement('meta');
        viewport.name = "viewport";
        document.head.appendChild(viewport);
    }
    
    if (window.innerWidth <= 480) {
        // Задаємо масштаб 50%
        viewport.content = "width=device-width, initial-scale=0.5, maximum-scale=0.5, user-scalable=no";
    } else {
        viewport.content = "width=device-width, initial-scale=0.5";
    }
});
