console.log('Loaded!');


var element = document.getElementById('personal');
element.innerHTML = 'Hi. My name is Indiana Jones. This is my webapp!';


//Move the iamge
var img= document.getElementbyId('madi');
img.style.marginLeft = '100px';  
var marginLeft=0;
function moveRight() {
    marginLeft += 10;
    img.style.marginLeft = marginLeft +'px';
  }
img.onclick = function() {
  var interval = setInterval(moveRight,100);
};