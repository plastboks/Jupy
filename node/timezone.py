#!/usr/bin/python
# -*- coding: utf-8 -*-

#
# Timezone convertions for the Jupy project.
#
# @name: timezone.py
# 
# @date: 2012-11-03
#
# @version: 0.0.1
#
# @description: Timezone convertion for the Jupy project.
#

import time
import datetime


class convert:

  def __init__(self):
    self.timeFormat = '%Y-%m-%d %H:%M:%S'


  def hours(self, string, inc):

    try: 
      ts = time.mktime(time.strptime(string, self.timeFormat))
    except Exception as e:
      print(e)

    try:
      dbTime = datetime.datetime.fromtimestamp(ts)
      addTZ = dbTime + datetime.timedelta(hours=inc)
    except Exception as e:
      print(e)

    return addTZ.strftime(self.timeFormat)
   

