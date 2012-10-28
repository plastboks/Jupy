/* Common javascript for Jupy Node */

$(document).ready(function(){

  var values = []
  $("#lastDayTemps li").each(function(){
    data = $(this).attr("data-value");
    values.push(parseFloat(data));
  });

  var plot1 = $.jqplot ('chart1', [values], {
      title: 'Temperatures last 24 hours',
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