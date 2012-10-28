#!/usr/bin/python
# -*- coding: utf-8 -*-


#
# Launcher for node system.
#
# @name: temp.py
# 
# @date: 2012-10-25
#
# @version: 0.0.1
#
# @description: Launcher for node system.
#

import sensor
import database
import time
import config

c = config.config("config.json")
c.read()


while(1):

  d = database.sqLite(c.data['config']['database']['file'])

  for s in c.data['config']['sensor']:
    t = sensor.temperature(s['device'])
    temp = t.parseTempData(t.getTempData())
    d.insert(s['name'], s['loc'], s['type'], temp)

  d.close()
  time.sleep(c.data['config']['options']['interval'])

