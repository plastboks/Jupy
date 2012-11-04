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
import timezone

c = config.config('config.json')
c.read()
t = timezone.convert()

render = web.template.render('templates/', base='wrapper')
db = web.database(dbn="sqlite", db=c.data['config']['database']['file'])

urls = (
  '/', 'index',
  '/get/(.*)', 'gettemp'
)


class index:

  def GET(self):
    tConfig = c.data['config']['options']['timezone']
    
    currentTemp = db.select('node', limit=1, order="id DESC").list()[0]
    currentTemp['timestamp'] = t.hours(currentTemp['timestamp'], tConfig)
    return render.index(currentTemp)


class gettemp:
 
  def GET(self, name):
    if name == 'temp':
      web.header('Content-Type', 'application/json')
      return self.temp()

  def temp(self):
    interval = c.data['config']['options']['interval']
    tConfig = c.data['config']['options']['timezone']
    i = web.input(hours=0, days=0, months=0, res=1)

    try:
      count = ((int(i.hours) * 3600) / interval) + ((int(i.days) * (24 * 3600)) / interval) + ((int(i.months) * ((24 * 3600) * (31))) / interval)
    except ValueError as e:
      print(e)
      return False
    
    query = db.query('SELECT datetime(timestamp, "localtime") AS "t", data AS "d" FROM node WHERE id % $res = 0 ORDER BY id DESC LIMIT $lim', vars={"res": int(i.res), "lim": count} ).list();
    output = json.dumps([[r.t, r.d] for r in query[::-1]]) 
    return output 


if __name__ == "__main__":
  app = web.application(urls, globals())
  app.run()

