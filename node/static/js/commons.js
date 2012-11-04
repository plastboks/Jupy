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
    'hours': 12,
    'days': 0,
    'months': 0,
    'res': 1,
    'element': 'chart0',
    'title': 'Temperatures last 12 hours',
    'TDformat': '%H:%M'
  });

  drawPlot({
    'hours': 48,
    'days': 0,
    'months': 0,
    'res': 2,
    'element': 'chart1',
    'title': 'Temperatures last 48 hours',
    'TDformat': '%H:%M'
  });

  drawPlot({
    'hours': 0,
    'days': 7,
    'months': 0,
    'res': 4,
    'element': 'chart2',
    'title': 'Temperatures last 7 days',
    'TDformat': '%m-%d'
  });
  
  drawPlot({
    'hours': 0,
    'days': 0,
    'months': 1,
    'res': 8,
    'element': 'chart3',
    'title': 'Temperatures last month',
    'TDformat': '%m-%d'
  });
  
  drawPlot({
    'hours': 0,
    'days': 0,
    'months': 6,
    'res': 16,
    'element': 'chart4',
    'title': 'Temperatures last 6 months',
    'TDformat': '%Y-%m'
  });

});
