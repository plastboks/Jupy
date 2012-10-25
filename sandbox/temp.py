#!/usr/bin/python
# -*- coding: utf-8 -*-


#
# Temperature sensor DS18B20 proof of concept on Raspberry PI
#
# @name: temp.py
# 
# @date: 2012-10-25
#
# @version: 0.0.1
#
# @description: Proof of concept DS18B20
#
# @extra: For this to work the kernel modules you have to modprobe w1-gpio, and w1-therm

import sys

sensor = "/sys/bus/w1/devices/28-0000031e7d42/w1_slave"

def getTempData(device):
  try:
    f = open(device)
  except Exception as e:
    print(e)
    sys.exit()

  data = f.readlines()
  f.close()
  return data


def parseTempData(data):
  status = data[0].split(' ')[-1].rstrip()
  if (status == "YES"):
    return int(data[1].split('=', 1)[1].rstrip()) / 1000
  else:
    return "Could not parse data"

temp = getTempData(sensor)
celcius = parseTempData(temp)

print("Celcius:", celcius)
print("Fahrenheit:", (celcius * (9/5)) + 32)