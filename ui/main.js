console.log('Loaded!');


var element = document.getElementById('personal');
element.innerHTML = 'Hi. My name is Indiana Jones. This is my webapp!';

var element = document.getElementById('prof');
element.innerHTML = 'I am professor of Archeaology';

//Move the iamge
var img= document.getElementById('madi');
img.style.marginLeft = '100px';  
var marginLeft=0;
var marginRight=0;

function moveRight() {
    marginLeft += 1;
    img.style.marginLeft = marginLeft +'px';
  }
  
  function moveLeft() {
    marginRight += 1;
    img.style.marginRight = marginRight +'px';
  }
//img.onclick = function() {
//  var interval = setInterval(moveRight,100);
//};

img.onclick = function() {
  var interval = setInterval(moveLeft,100);
};


var button = document.getElementById('counter');

button.onclick = function() {

  var request = new XMLHttpRequest();

  request.onreadystatechange = function() {
      if (request.readyState ===XMLHttpRequest.DONE) {
           if(request.status===200) {
               var counter = request.responseText;
               var span = document.getElementById('count');
               span.innerHTML = counter.toString();
               
           }
             
      }
      
  };
  request.open('GET', 'http://abhay180.imad.hasura-app.io/counter',true);
  request.send(null);
};

