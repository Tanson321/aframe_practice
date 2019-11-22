var driverDone = function(){
    console.log('hey');
    var scene = document.querySelector('a-scene');
    var plane = document.createElement('a-plane');
    plane.setAttribute('position', '-1.8 1 0.9');
    plane.setAttribute('rotation', '-30 110 0');
    plane.setAttribute('width', '1');
    plane.setAttribute('height', '0.5');
    plane.setAttribute('color', 'white');
    plane.setAttribute('opacity', '0.4');
    scene.appendChild(plane);

    var text = document.createElement('a-text');
    text.setAttribute('position', '-1.8 1 0.9');
    text.setAttribute('rotation', '-30 110 0');
    text.setAttribute('value', 'YES!');
    text.setAttribute('color', 'black');
    text.setAttribute('align', 'center');
    scene.appendChild(text);

    var clear = document.getElementById('direction');
    clear.innerHTML = '<p>良くぞ見つけた！</p>';

};

const text = document.getElementById('text');

window.addEventListener('load', function(){
    text.textContent ='一番小さい椅子を探せ！';
    $('#text').css('text-align', 'center');
    $('#text').css('font-size','22px');
    $('#text').css('line-height','12vh');
});

$('.select').click(function(){
    $('.introduction').css('display', 'none');
    $('.direction').show();
});

// const ctl = document.getElementById("ctl");
// const timer = setInterval(() => {
//   const point = new THREE.Vector3(0, 0, -1);
//   ctl.object3D.localToWorld(point);
//   const worldDirection = point.sub(ctl.object3D.position);
//   txt.setAttribute("value", worldDirection.x.toFixed(2) + ", " + worldDirection.y.toFixed(2) + ", " + worldDirection.z.toFixed(2));
// }, 100);
