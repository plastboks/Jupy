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
#import daemon
import database
import time

#only temporarily stored here for testing...
device = "/sys/bus/w1/devices/28-0000031e7d42/w1_slave"
dbFile = "node.db"

dName = "Home"
dLoc = "Garage"
dType = "Temperature"

t = sensor.temperature(device)

while(1):

  d = database.sqLite(dbFile)

  temp = t.parseTempData(t.getTempData())
  d.insert(dName, dLoc, dType, temp)
  d.close()
  
  time.sleep(600)

