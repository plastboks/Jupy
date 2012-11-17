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
    'from' : 4,
    'to' : 'now',
    'res': 2,
    'element': 'chart1',
    'title': 'Temperatures last 4 days',
    'TDformat': '%H:%M'
  });

  drawPlot({
    'from': 14,
    'to': 'now',
    'res': 4,
    'element': 'chart2',
    'title': 'Temperatures last 14 days',
    'TDformat': '%m-%d'
  });
  
  drawPlot({
    'from': 60,
    'to': 'now',
    'res': 8,
    'element': 'chart3',
    'title': 'Temperatures 60 days',
    'TDformat': '%m-%d'
  });
  
  drawPlot({
    'from': 180,
    'to': 'now',
    'res': 16,
    'element': 'chart4',
    'title': 'Temperatures last 180 days',
    'TDformat': '%Y-%m'
  });

});
