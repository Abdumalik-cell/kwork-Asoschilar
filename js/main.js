const scriptURL =
	'https://script.google.com/macros/s/AKfycbwO_36CCfYHWyBYoFE2g-Y-s7O0PBWcktNaA2pu984VITpB7_VpKiHkGX1RlKQPxELvrA/exec';
const form = document.forms['asoschilar'];
const submitBtn = document.getElementById('submitBtn');
const btnText = document.getElementById('btnText');
const btnLoader = document.getElementById('btnLoader');

form.addEventListener('submit', e => {
	e.preventDefault();

	btnText.style.display = 'none';
	btnLoader.style.display = 'inline';

	fetch(scriptURL, { method: 'POST', body: new FormData(form) })
		.then(response => {
			form.reset();

			btnText.style.display = 'inline';
			btnLoader.style.display = 'none';

			alert("Ma'lumot muvaffaqiyatli yuborildi!");
		})
		.catch(error => {
			btnText.style.display = 'inline';
			btnLoader.style.display = 'none';
			alert('Xatolik yuz berdi: ' + error.message);
		});
});

document.addEventListener('DOMContentLoaded', function () {
	new Splide('.splide', {
		type: 'loop',
		perPage: 2,
		perMove: 1,
		autoplay: false,
		interval: 3000, // 3 seconds
		pauseOnHover: false,
		breakpoints: {
			1024: {
				perPage: 2,
			},
			640: {
				perPage: 1,
			},
		},
	}).mount();
});
