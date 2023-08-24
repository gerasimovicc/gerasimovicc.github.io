document.getElementById('faq').addEventListener('click', function () {
	fetch('partial/faq.html')
		.then(response => response.text())
		.then(data => {
			a = document.getElementById('content');
			a.innerHTML = data;
		});
});
