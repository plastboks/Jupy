/* Common javascript for Jupy Node */

$(document).ready(function(){

  function parseList(list) {
    thisList = []
    $(list).each(function(){
      data = $(this).attr("data-value");
      timestamp = $(this).attr("data-time");
      thisList.push(parseFloat(data));
    });
    return thisList;
  }

  function parseListDate(list) {
    thisList = []
    $(list).each(function(){
      data = $(this).attr("data-value");
      timestamp = $(this).attr("data-time");
      thisList.push([timestamp, parseFloat(data)]);
    });
    return thisList;
  }

  var last8HTemps = parseListDate("#last8HTemps li");
  var last48HTemps = parseListDate("#last48HTemps li");
  var lastWeekVaues = parseListDate("#lastWeekTemps li");

  var plot0 = $.jqplot ('chart0', [last8HTemps], {
    title: 'Temperatures last 8 hours',
    seriesDefaults: {showMarker:false},
    axesDefaults: {
      labelRenderer: $.jqplot.CanvasAxisLabelRenderer
    },
    axes: {
      xaxis: {
        renderer: $.jqplot.DateAxisRenderer, 
        tickOptions: {formatString: '%H:%M'},
        label: "Time",
        pad: 0
      },
      yaxis: {
        label: "Temperature"
      }
    }
  });

  var plot1 = $.jqplot ('chart1', [last48HTemps], {
    title: 'Temperatures last 48 hours',
    seriesDefaults: {showMarker:false},
    axesDefaults: {
      labelRenderer: $.jqplot.CanvasAxisLabelRenderer
    },
    axes: {
      xaxis: {
        renderer: $.jqplot.DateAxisRenderer, 
        tickOptions: {formatString: '%H:%M'},
        label: "Time",
        pad: 0
      },
      yaxis: {
        label: "Temperature"
      }
    }
  });

  var plot2 = $.jqplot ('chart2', [lastWeekVaues], {
    title: 'Temperatures last week',
    seriesDefaults: {showMarker:false},
    axesDefaults: {
      labelRenderer: $.jqplot.CanvasAxisLabelRenderer
    },
    axes: {
      xaxis: {
        renderer: $.jqplot.DateAxisRenderer, 
        tickOptions: {formatString: '%y-%m-%d'},
        label: "Time",
        pad: 0
      },
      yaxis: {
        label: "Temperature"
      }
    }
  });
});
