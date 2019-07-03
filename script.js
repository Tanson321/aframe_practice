var linkElements = document.getElementsByClassName("link-object");

for (var i = 0; i < linkElements.length; i++) {
	linkElements[i].addEventListener('click', function() {
		var link = this.getAttribute('data-link');
		location.href = link;
	}, false);
}