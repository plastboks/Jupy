/**
  *
  * Javascript functions for Jupy Node 
  *
  * @name: functions.py
  * 
  * @date: 2012-11-01
  *
  * @version: 0.0.2
  *
  * @description: Javascript functions for Jupy node.
  * 
  */


function parseList(list) {
  thisList = []
  $(list).each(function(){
    data = $(this).attr("data-value");
    timestamp = $(this).attr("data-time");
    thisList.push([timestamp, parseFloat(data)]);
  });
  return thisList;
}


function getData(hours, days, months, callback) {
  $.ajax({
    url: '/get/temp',
    dataType: 'json',
    type: 'GET',
    data: {
      hours: hours,
      days: days,
      months : months
    },
    success: function(response) {
      callback(response);
    },
    error: function() {
      return false;
    }
  });
}


function drawPlot(data) {
  getData(data['hours'], data['days'], data['months'], function(json){
    $.jqplot (data['element'], [json], {
      title: data['title'],
      seriesDefaults: {showMarker:false},
      axesDefaults: {
        labelRenderer: $.jqplot.CanvasAxisLabelRenderer
      },
      axes: {
        xaxis: {
          renderer: $.jqplot.DateAxisRenderer, 
          tickOptions: {formatString: data['TDformat']},
          label: "Time",
          pad: 0
        },
        yaxis: {
          label: "Celsius"
        }
      }
    });
  });
  return false;
}
