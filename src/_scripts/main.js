// 'use strict';

var fiveDaysContainer = document.getElementById('fiveDaysContainer'); 
var elements = document.querySelectorAll('.temperature-daytime');
var tabs = document.querySelectorAll('.tab');

// fiveDaysContainer.onclick = function(event) { 
//   if (event.target.className === 'next') { 
//     showNext() 
//   }
//   if (event.target.className === 'prev') { 
//     showPrev() 
//   } 
//   if (event.target.classList.contains('tab')) { 
//     showDay(event.target)
//   }
// } 


if(fiveDaysContainer) fiveDaysContainer.addEventListener('click', function(event) { 
  if (event.target.className === 'next') { 
    showNext() 
  }
  if (event.target.className === 'prev') { 
    showPrev() 
  } 
  if (event.target.classList.contains('tab')) { 
    showDay(event.target)
  }
});

function showNext() { 
  var current = document.querySelector('.temperature-daytime.active');
  var currentIndex = Array.prototype.slice.call(current.parentNode.children).indexOf(current);
  var id = currentIndex + 1 > elements.length - 1 ? 0 : currentIndex + 1;
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove('active');
    tabs[i].classList.remove('tabact');
  }
  elements[parseInt(id)].classList.add('active');
  tabs[parseInt(id)].classList.add('tabact');
}

function showPrev() { 
  var current = document.querySelector('.temperature-daytime.active');
  var currentIndex = Array.prototype.slice.call(current.parentNode.children).indexOf(current);
  var id = currentIndex - 1 < 0 ? elements.length - 1 : currentIndex - 1;
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove('active');
    tabs[i].classList.remove('tabact');
  }  
  elements[id].classList.add('active');
  tabs[id].classList.add('tabact');  
}

function showDay(target) { 
  var id = target.dataset.id;
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove('active');
    tabs[i].classList.remove('tabact');
  }
  if (id !== undefined) {
    elements[parseInt(id) - 1].classList.add('active');
    target.classList.add('tabact');
  }
}

//////////////////
var weatherTabs = document.getElementById('weatherTabs'); 
var elem = document.querySelectorAll('.diagram-wrapper');
var knob = document.querySelectorAll('.knob');

if(weatherTabs) weatherTabs.addEventListener('click', function(event) { 
  if (event.target.classList.contains('knob')) { 
    showWeather(event.target)
  }
});

function showWeather(target) { 
  var id2 = target.dataset.id2;
  for (var i = 0; i < elem.length; i++) {
    elem[i].classList.remove('active');
    knob[i].classList.remove('active');
  }
  if (id2 !== undefined) {
    elem[parseInt(id2) - 1].classList.add('active');
    target.classList.add('active');
  }
}