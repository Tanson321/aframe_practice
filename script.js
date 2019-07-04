//var linkElements = document.getElementsByClassName("link-object");

//for (var i = 0; i < linkElements.length; i++) {
//	linkElements[i].addEventListener('click', function() {
//		var link = this.getAttribute('data-link');
//		location.href = link;
//	}, false);
//}

var driverDone = function(){
    console.log('hey');
    var scene = document.querySelector('a-scene');
    var plane = document.createElement('a-plane');
    plane.setAttribute('position', '-1.8 0.4 0.9');
    plane.setAttribute('rotation', '-30 110 0');
    plane.setAttribute('width', '1');
    plane.setAttribute('height', '0.5');
    plane.setAttribute('color', 'white');
    plane.setAttribute('opacity', '0.4');
    scene.appendChild(plane);

    var text = document.createElement('a-text');
    text.setAttribute('position', '-1.8 0.4 0.9');
    text.setAttribute('rotation', '-30 110 0');
    text.setAttribute('value', 'Done!');
    text.setAttribute('color', 'black');
    text.setAttribute('align', 'center');
    scene.appendChild(text);
}