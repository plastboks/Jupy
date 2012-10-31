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
import json

c = config.config('config.json')
c.read()

render = web.template.render('templates/', base='wrapper')
db = web.database(dbn="sqlite", db=c.data['config']['database']['file'])


urls = (
  '/', 'index',
  '/get/(.*)', 'gettemp'
)

class index:

  def GET(self):
    currentTemp = db.select('node', limit=1, order="id DESC").list()
    last8HTemps = db.select('node', limit=48, order="id DESC").list()
    last48HTemps = db.select('node', limit=288, order="id DESC").list()
    lastWeekTemps = db.select('node', limit=1008, order="id DESC").list()
    lastMonthTemps = db.select('node', limit=31248, order="id DESC").list()

    return render.index(currentTemp[0], last8HTemps[::-1], last48HTemps[::-1], lastWeekTemps[::-1], lastMonthTemps[::-1])


class gettemp:
  
  def GET(self, name):
    if name == 'temp':
      web.header('Content-Type', 'application/json')
      return self.temp()


  def temp(self):
    i = web.input(hours=0, days=0, months=0)
    interval = c.data['config']['options']['interval']

    try:
      count = ((int(i.hours) * 3600) / interval) + ((int(i.days) * (24 * 3600)) / interval) + ((int(i.months) * ((24 * 3600) * (31))) / interval)
    except ValueError as e:
      return False
 
    query = db.select('node', limit=count, order="id DESC").list()
    return json.dumps([[entry.timestamp, entry.data] for entry in query[::-1]])


if __name__ == "__main__":
  app = web.application(urls, globals())
  app.run()

