const scriptURL =
	'https://script.google.com/macros/s/AKfycbwO_36CCfYHWyBYoFE2g-Y-s7O0PBWcktNaA2pu984VITpB7_VpKiHkGX1RlKQPxELvrA/exec';
const form = document.forms['asoschilar'];
const submitBtn = document.getElementById('submitBtn');
const btnText = document.getElementById('btnText');
const btnLoader = document.getElementById('btnLoader');

form.addEventListener('submit', e => {
	e.preventDefault();

	// Tugmada yuklanmoqda animatsiyasi
	btnText.style.display = 'none';
	btnLoader.style.display = 'inline';

	fetch(scriptURL, { method: 'POST', body: new FormData(form) })
		.then(response => {
			// Formani tozalash
			form.reset();

			// Tugma holatini qayta tiklash
			btnText.style.display = 'inline';
			btnLoader.style.display = 'none';

			// Xabar chiqarish (oddiy alert, xohlasangiz modal qilish mumkin)
			alert("Ma'lumot muvaffaqiyatli yuborildi!");
		})
		.catch(error => {
			btnText.style.display = 'inline';
			btnLoader.style.display = 'none';
			alert('Xatolik yuz berdi: ' + error.message);
		});
});
