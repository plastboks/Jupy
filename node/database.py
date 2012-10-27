#!/usr/bin/python
# -*- coding: utf-8 -*-


#
# Database communication
#
# @name: database.py
# 
# @date: 2012-10-26
#
# @version: 0.0.1
#
# @description: Database communication
#

import sqlite3
import sys
from datetime import datetime

class sqLite():

  def __init__(self, database):
    self.sqlite = sqlite3
    self.dbFile = database
    self.open()

  def open(self):
    try:
      self.con = self.sqlite.connect(self.dbFile)
      cur = self.con.cursor()
    except Exception as e:
      print("Error %s" % e.args[0])
      sys.exit()


  def close(self):
    self.con.close()


  def insert(self, dName, dLoc, dType, dData):
    try:
      cur = self.con.cursor()
      cur.execute("insert into node (name, loc, type, data) values ('%s', '%s', '%s', %.3f)" % (dName, dLoc, dType, dData))
      self.con.commit()
    except Exception as e:
      print("Error %s" % e.args[0])
      sys.exit()


  def select(self):
    try:
      cur = self.con.cursor()
      cur.execute("select * from node limit 100")
      return cur.fetchall()
    except Exception as e:
      print("Error %s" % e.args[0])
