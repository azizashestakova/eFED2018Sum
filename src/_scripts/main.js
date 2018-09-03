'use strict';

var fiveDaysContainer = document.getElementById('fiveDaysContainer'); 
var elements = document.querySelectorAll('.temperature-daytime');
var tabs = document.querySelectorAll('.tab');

fiveDaysContainer.onclick = function(event) { 
  if (event.target.className === 'next') { 
    showNext() 
  }
  if (event.target.className === 'prev') { 
    showPrev() 
  } 
  if (event.target.classList.contains('tab')) { 
    showDay(event.target)
  }
} 

function showNext() { 
  var current = document.querySelector('.temperature-daytime.active');
  var currentIndex = Array.prototype.slice.call(current.parentNode.children).indexOf(current);
  var id = currentIndex + 1 < elements.length ? currentIndex + 1 : elements.length - 1;
  console.log(currentIndex, id);
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove('active');
    tabs[i].classList.remove('tabact');
  }
  if (id) {
    elements[parseInt(id)].classList.add('active')
    tabs[parseInt(id)].classList.add('tabact')
  }
}

function showPrev() { 
  for (var i = 0; i < elements.length; i++) { 
    if (elements[i].classList.contains('active')) { 
      elements[i].classList.remove('active') 

      if (i === 0) { 
        elements[elements.length - 1].classList.add('active') 
        break 
      } 

      elements[i - 1].classList.add('active') 
      break 
    } 
  } 
}

function showDay(target) { 
  var id = target.dataset.id;
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove('active');
    tabs[i].classList.remove('tabact');

  }

  if (id) {
    elements[parseInt(id) - 1].classList.add('active')
    target.classList.add('tabact')
  }
}