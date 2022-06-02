const limit_size_screen = window.matchMedia('screen and (max-width: 768px)');
const bars = document.querySelector('.barra');
const barsButton = document.querySelector('boton');

function validation(event) {
	if (event.matches) {
		boton.addEventListener('click', hideShow);
	} else {
		boton.removeEventListener('click', hideShow);
	}
}
validation(limit_size_screen);

function hideShow() {
	if (barra.classList.contains('is-active')) {
		barra.classList.remove('is-active');
	} else {
		barra.classList.add('is-active');
	}
}