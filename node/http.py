#!/usr/bin/python
# -*- coding: utf-8 -*-


#
# Webserver for generating a webinterface for temperature data.
#
# @name: http.py
# 
# @date: 2012-10-26
#
# @version: 0.0.1
#
# @description: Webserver for generating a webinterface for temperature data.
#


import web
import config

c = config.config('config.json')
c.read()

render = web.template.render('templates/', base='wrapper')
db = web.database(dbn="sqlite", db=c.data['config']['database']['file'])


urls = (
  '/', 'index' 
)

class index:

  def GET(self):
    currentTemp = db.select('node', limit=1, order="id DESC").list()
    last8HTemps = db.select('node', limit=48, order="id DESC").list()
    last48HTemps = db.select('node', limit=288, order="id DESC").list()
    lastWeekTemps = db.select('node', limit=1008, order="id DESC").list()
    
    for i, row in enumerate(last8HTemps):
      last8HTemps[i]['timestamp'] = ':'.join(row['timestamp'].split(' ')[1].split(':')[:2])
    
    return render.index(currentTemp[0], last8HTemps[::-1], last48HTemps[::-1], lastWeekTemps[::-1])


if __name__ == "__main__":
  app = web.application(urls, globals())
  app.run()

