#!/usr/bin/python
# -*- coding: utf-8 -*-


#
# Temperature class for communication with temperature hardware.
#
# @name: temp.py
# 
# @date: 2012-10-25
#
# @version: 0.0.1
#
# @description: Temperature class for communication with temperature hardware.
#
# @extra: For this to work the kernel modules you have to modprobe w1-gpio, and w1-therm


import sys

class temperature():

  def __init__(self, device):
    self.device = device

  def getTempData(self):
    try:
      f = open(self.device)
    except Exception as e:
      print(e)
      sys.exit()
    data = f.readlines()
    f.close()
    return data


  def parseTempData(self, data):
    status = data[0].split(' ')[-1].rstrip()
    if (status == "YES"):
      try: 
        value = float(data[1].split('=', 1)[1].rstrip()) / 1000
      except Exception as e:
        return e
      return value
    else:
      return "Could not parse data"


