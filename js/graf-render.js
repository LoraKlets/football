'use strict';
window.grafRender = (function () {
  var tableDiv = document.querySelector('.table');

  return function (club) {

    var matches = [];
    matches = club.matches;
    var containerGrafik = document.querySelector('#container').id;

    var idClicked ='#team-' + club.club ;
    var trClicked = document.querySelector(idClicked);
    var nameClub = trClicked.children[1].innerText;
    var textTitle = 'Диаграмма результатов' + nameClub;
    var markerS = function () {
      return 'marker: { fillColor:r}';
    };

    matches.forEach(function(item, i, matches) {
      switch (item.result) {
        case 'won':
          item.result = 'green';
          break;
        case 'drawn':
          item.result = 'orange';
          break;
        case 'lost':
          item.result = 'red';
          break;
      };
});

    var options = {
    chart: {
        renderTo: containerGrafik
       },
      title: {text: textTitle},
      legend: {enabled: false},
       tooltip: {
           headerFormat: '<small>тур  {point.key}</small><br>',
          pointFormat: '{series.name}: <b>{point.y}</b><br/>',
           footerFormat: 'результат матча',
          valueSuffix: ' '

      },
      yAxis: {
        title: {text: 'Позиция' },
        labels: {step: 1},
        softMax: 16,
        tickPositions: [1,3,5,8,10,13,16],
        reversed: true
      },
      xAxis: {
          title: {
              text: 'Сыгранные матчи'
          },
          labels: {step: 1},
          allowDecimals:false
      },
      series: [{
          name: 'МЕСТО',
         // animation: false,
          marker: {
              symbol: 'circle',
              radius: 8
          },
         data: [
           {x:matches[0].tour, y: matches[0].pos, marker: { fillColor:matches[0].result} },
           {x:matches[1].tour, y: matches[1].pos, marker: { fillColor:matches[1].result} },
           {x:matches[2].tour, y: matches[2].pos, marker: { fillColor:matches[2].result} },
           {x:matches[3].tour, y: matches[3].pos, marker: { fillColor:matches[3].result} },
           {x:matches[4].tour, y: matches[4].pos, marker: { fillColor:matches[4].result} },
           {x:matches[5].tour, y: matches[5].pos, marker: { fillColor:matches[5].result} },
           {x:matches[6].tour, y: matches[6].pos, marker: { fillColor:matches[6].result} },
           {x:matches[7].tour, y: matches[7].pos, marker: { fillColor:matches[7].result} },
           {x:matches[8].tour, y: matches[8].pos, marker: { fillColor:matches[8].result} }
         ]
      }]
    };
    var chartClub = new Highcharts.Chart(options);
    return chartClub;
  };
})();
