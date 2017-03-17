'use strict';
window.diagramClub = (function(clubSelected) {
  window.load(function(data) {

    var pos = clubSelected.indexOf('team-') + 5;
    var clubNumber = clubSelected.slice(pos);

    var indObj = -1;
    for (var i = 0; i < data.length; i++) {
      if (data[i].club === clubNumber) {
        indObj = i;
        break;
      }
    };
    if (indObj > -1) {
      window.grafRender(data[indObj]);
    };
});
});
