// $(document).ready(function() {

// 	$('section figure img').on('click', function() {

// 		$(this).css.transform = 


// 	});


// });

var r = document.querySelector('section figure img'); //r pour rotation
function rotate () {

	r.style.transform = 'rotateX(360deg)';
	r.style.transformOrigin = '0 125px';

}
document.querySelector('section figure img').addEventListener('click', rotate);