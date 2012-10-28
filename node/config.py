#!/usr/bin/python
# -*- coding: utf-8 -*-


#
# Config app for node.
#
# @name: temp.py
# 
# @date: 2012-10-25
#
# @version: 0.0.1
#
# @description: Config app for node.
#

import os
import json
import sys
import re

class config:

  def __init__(self, file):
    try:
      self.f = open(file, "r")
    except Exception as e:
      print("Error: %s" % e)
      sys.exit()


  def read(self):
    jsonData = re.sub(r'\s', '', ' '.join(self.f.readlines()))
    try:
      self.data = json.loads(jsonData)
    except Exception as e:
      print("Error %s" % e)
      self.f.close()
      sys.exit()

    self.f.close()

