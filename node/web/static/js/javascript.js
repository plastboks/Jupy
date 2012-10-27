/* Common javascript for Jupy Node */

$(document).ready(function(){

  var values = []
  $("#lastDayTemps li").each(function(){
    data = $(this).attr("data-value");
    values.push(parseFloat(data));
  });

  console.log(values);

  var plot1 = $.jqplot ('chart1', [values], {
      // Give the plot a title.
      title: 'Temperatures last 24 hours',
      // You can specify options for all axes on the plot at once with
      // the axesDefaults object.  Here, we're using a canvas renderer
      // to draw the axis label which allows rotated text.
      axesDefaults: {
        labelRenderer: $.jqplot.CanvasAxisLabelRenderer
      },
      // An axes object holds options for all axes.
      // Allowable axes are xaxis, x2axis, yaxis, y2axis, y3axis, ...
      // Up to 9 y axes are supported.
      axes: {
        // options for each axis are specified in seperate option objects.
        xaxis: {
          label: "Time",
          // Turn off "padding".  This will allow data point to lie on the
          // edges of the grid.  Default padding is 1.2 and will keep all
          // points inside the bounds of the grid.
          pad: 0
        },
        yaxis: {
          label: "Temperature"
        }
      }
    });
});