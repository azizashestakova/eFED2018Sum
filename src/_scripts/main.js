// 'use strict';

var fiveDaysContainer = document.getElementById('fiveDaysContainer'); 
var elements = document.querySelectorAll('.temperature-daytime');
var tabs = document.querySelectorAll('.tab'); 
// var nextTable = document.getElementsByClassName('temperature-daytime'); 

fiveDaysContainer.onclick = function(event) { 
  if (event.target.className === 'next') { 
    showNext() 
  }
  if (event.target.className === 'prev') { 
    showPrev() 
  } 
  if (event.target.className === 'tab') { 
    showDay()
  }
} 

function showNext() { 
  for (var i = 0; i < elements.length; i++) { 
    if (elements[i].classList.contains('active')) { 
      elements[i].classList.remove('active') 

      if (i === elements.length - 1) { 
        elements[0].classList.add('active') 
        break 
      } 

      elements[i + 1].classList.add('active') 
      break 
    } 
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

function showDay() { 
  for (var i = 0; i < elements.length; i++) { 
    if (elements[i].classList.contains('active')) { 
      elements[i].classList.remove('active') 

      // if (i === elements.length - 1) { 
      //   elements[0].classList.add('active') 
      //   break 
      // } 

      // if (i === elements.length - 1) { 
      //   elements[0].classList.add('active') 
      //   break 
      // } 

      // if(i === elements[i]) {
      //   elements[3].classList.add('active')
      //   break
      // }

      elements[i + 1].classList.add('active') 
      break 
    } 
  } 
}