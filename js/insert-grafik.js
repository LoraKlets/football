'use strict';
window.insertGrafik = (function() {
  return function(evt) {
    var elementClicked = evt.target;
    var blockBefore;
    var teamId;
    var trClicked ;
    var imageClicked = evt.target;
    if (evt.target.nodeName === 'TD') {
      trClicked = evt.target.parentElement;
      imageClicked = trClicked.children[0].children[0];
    } else {
      trClicked = evt.target.parentElement.parentElement;
    };
    teamId = trClicked.id;
    blockBefore = trClicked.nextElementSibling;
    var widgetGrafik = document.querySelector('.container-layout');
    var ariaDiagram = document.querySelector('#aria-diagram');
    if (widgetGrafik.classList.contains('invisible')) {
      widgetGrafik.classList.remove('invisible');
      imageClicked.src='up-arrow.png';
      var tbodyAria = document.querySelector('.tbody-class');
      if (blockBefore) {
       tbodyAria.insertBefore(ariaDiagram, blockBefore);
     } else {
       tbodyAria.appendChild(ariaDiagram);
     };
      window.diagramClub(teamId);
    } else {
     widgetGrafik.classList.add('invisible');
     imageClicked.src='down.png';
   }
  };
})();
