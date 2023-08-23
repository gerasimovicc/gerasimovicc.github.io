window.addEventListener('scroll', function () {
	var navbar = document.getElementById('navbar');
	if (window.scrollY == 0) {
		navbar.classList.remove('z-depth-1');
		navbar.classList.add('z-depth-0');
	} else {
		navbar.classList.remove('z-depth-0');
		navbar.classList.add('z-depth-1');
	}

	var rows = document.getElementsByClassName('row');
	for (var i = 0; i < rows.length; ++i) {
		if (isVisible(rows[i])) {
			rows[i].classList.remove('hidden');
			rows[i].classList.add('showing');
		}
	}
});

/*var advantages = document.getElementById('advantages');
if (isVisible(advantages)) {
	advantages.classList.remove('hidden');
	advantages.classList.add('showing');
}*/

var isVisible = function (target) {
	var targetPosition = {
			top: window.scrollY + target.getBoundingClientRect().top,
			left: window.scrollX + target.getBoundingClientRect().left,
			right: window.scrollX + target.getBoundingClientRect().right,
			bottom: window.scrollY + target.getBoundingClientRect().bottom,
		},
		windowPosition = {
			top: window.scrollY,
			left: window.scrollX,
			right: window.scrollX + document.documentElement.clientWidth,
			bottom: window.scrollY + document.documentElement.clientHeight,
		};

	if (
		targetPosition.bottom > windowPosition.top &&
		targetPosition.top < windowPosition.bottom &&
		targetPosition.right > windowPosition.left &&
		targetPosition.left < windowPosition.right
	) {
		return true;
	} else {
		return false;
	}
};
