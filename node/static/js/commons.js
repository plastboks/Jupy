/**
  *
  * Javascript commons for Jupy Node 
  *
  * @name: commons.py
  * 
  * @date: 2012-10-26
  *
  * @version: 0.0.2
  *
  * @description: Javascript commons for Jupy Node.
  * 
  */


$(document).ready(function(){

  drawPlot({
    'from' : 1,
    'to' : 'now',
    'res': 1,
    'element': 'chart0',
    'title': 'Temperatures last day',
    'TDformat': '%H:%M'
  });

  drawPlot({
    'from' : 7,
    'to' : 'now',
    'res': 4,
    'element': 'chart1',
    'title': 'Temperatures last 7 days',
    'TDformat': '%H:%M'
  });

  drawPlot({
    'from': 28,
    'to': 'now',
    'res': 10,
    'element': 'chart2',
    'title': 'Temperatures last 28 days',
    'TDformat': '%m-%d'
  });
  
});
