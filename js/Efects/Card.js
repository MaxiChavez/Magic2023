const cards = document.querySelectorAll('.carta');

function transition() {
    if (this.classList.contains('activo')) {
        this.classList.remove('activo');
    } else {
        this.classList.add('activo');
    }
}

cards.forEach(card => card.addEventListener('click', transition));