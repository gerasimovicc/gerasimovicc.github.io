window.addEventListener('scroll', function () {
	var navbar = document.getElementById('navbar');
	if (window.scrollY == 0) {
		navbar.classList.remove('z-depth-1');
		navbar.classList.add('z-depth-0');
	} else {
		navbar.classList.remove('z-depth-0');
		navbar.classList.add('z-depth-1');
	}
});
