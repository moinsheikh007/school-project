document.querySelector('.pages').addEventListener('mousemove', parallax);

function parallax (event) {
    this.querySelectorAll('.leyar').forEach(leyar => {
        const speed = leyar.getAttribute('data-speed');
        const x = (window.innerWidth - event.pageX*speed)/100;
        const y = (window.innerHeight - event.pageY*speed)/100;
        leyar.style.transform = `translateX(${x}px) translateY(${y}px)`
    });
}