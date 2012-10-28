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

  var last8HTemps = parseList("#last8HTemps li");
  var last48HTemps = parseList("#last48HTemps li");
  var lastWeekVaues = parseList("#lastWeekTemps li");

  var plot0 = $.jqplot ('chart0', [last8HTemps], {
    title: 'Temperatures last 48 hours',
    seriesDefaults: {showMarker:false},
    axesDefaults: {
      labelRenderer: $.jqplot.CanvasAxisLabelRenderer
    },
    axes: {
      xaxis: {
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
        label: "Time",
        pad: 0
      },
      yaxis: {
        label: "Temperature"
      }
    }
  });
});