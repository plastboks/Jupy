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


function getData(hours, days, months, res, callback) {
  $.ajax({
    url: '/get/temp',
    dataType: 'json',
    type: 'GET',
    data: {
      hours: hours,
      days: days,
      months : months,
      res: res
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
  getData(data['hours'], data['days'], data['months'], data['res'], function(json){
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
