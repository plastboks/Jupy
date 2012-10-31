/* Common javascript for Jupy Node */

$(document).ready(function(){

  function parseList(list) {
    thisList = []
    $(list).each(function(){
      data = $(this).attr("data-value");
      timestamp = $(this).attr("data-time");
      thisList.push([timestamp, parseFloat(data)]);
    });
    return thisList;
  }

  var last8HValues = parseList("#last8HTemps li");
  var last48HValues = parseList("#last48HTemps li");
  var lastWeekVaues = parseList("#lastWeekTemps li");
  var lastMonthValues = parseList("#lastMonthTemps li");

  var plot0 = $.jqplot ('chart0', [last8HValues], {
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
        label: "Celsius"
      }
    }
  });

  var plot1 = $.jqplot ('chart1', [last48HValues], {
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
        label: "Celsius"
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
        label: "Date",
        pad: 0
      },
      yaxis: {
        label: "Celsius"
      }
    }
  });

  var plot3 = $.jqplot ('chart3', [lastWeekVaues], {
    title: 'Temperatures last month',
    seriesDefaults: {showMarker:false},
    axesDefaults: {
      labelRenderer: $.jqplot.CanvasAxisLabelRenderer
    },
    axes: {
      xaxis: {
        renderer: $.jqplot.DateAxisRenderer, 
        tickOptions: {formatString: '%y-%m-%d'},
        label: "Date",
        pad: 0
      },
      yaxis: {
        label: "Celsius"
      }
    }
  });


});
