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

render = web.template.render('templates/', base='wrapper')
db = web.database(dbn="sqlite", db="../node.db")


urls = (
  '/', 'index' 
)


class index:

  def GET(self):
    temps = db.select('node')
    return render.index(temps)


if __name__ == "__main__":
  app = web.application(urls, globals())
  app.run()

