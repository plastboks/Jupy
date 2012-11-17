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
import datetime
import time


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
    inputTF = '%Y-%m-%dT%H:%M:%S.%fZ'
    outputTF = '%Y-%m-%d %H:%M:%S'
    i = web.input(dateFrom=0, dateTo=0, res=1)

    fd = datetime.datetime.fromtimestamp(time.mktime(time.strptime(i.dateFrom, inputTF)))
    td = datetime.datetime.fromtimestamp(time.mktime(time.strptime(i.dateTo, inputTF)))
    fromDate = fd.strftime(outputTF)
    toDate = td.strftime(outputTF)

    query = db.query('SELECT datetime(timestamp, "localtime") AS "t", data AS "d" FROM node WHERE timestamp BETWEEN $fd AND $td AND id % $res = 0 ORDER BY id DESC', vars = {"fd": fromDate, "td" : toDate, "res" : int(i.res)}).list()
    
    output = json.dumps([[r.t, r.d] for r in query[::-1]]) 
    return output 


if __name__ == "__main__":
  app = web.application(urls, globals())
  app.run()

