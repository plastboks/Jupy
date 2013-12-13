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


function dateCalc(from, to) {
  if (to == 'now') {
    var now = new Date();
    var dayOfThisMonth = now.getDate();
    var toDate = now.toJSON();
    var fd = new Date(now.setDate(dayOfThisMonth - from));
    var fromDate = fd.toJSON();
    return [fromDate, toDate];
  } else {
    fd = new Date(from);
    fromDate = fd.toJSON();
    td = new Date(to);
    toDate = td.toJSON();
    return [fromData, toDate];
  }
}



function getData(from, to, res, callback) {
  $.ajax({
    url: '/get/temp',
    dataType: 'json',
    type: 'GET',
    data: {
      dateFrom : from,
      dateTo : to,
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
  dates = dateCalc(data['from'], data['to']);
  getData(dates[0], dates[1], data['res'], function(json){
    $.jqplot (data['element'], [json], {
      title: data['title'],
      seriesDefaults: {showMarker:false},
      axesDefaults: {
        labelRenderer: $.jqplot.CanvasAxisLabelRenderer
      },
      series:[
         {color: '#FFA347',
          lineWidth: 2,
          label:'good line'
         }
      ],
      canvasOverlay: {
        show: true,
        objects: [
          {horizontalLine: {
            name: '0 mark',
            y: 0,
            lineWidth: 1,
            color: 'rgb(140, 150, 255)',
            shadow: false
          }}
        ]
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
