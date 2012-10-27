Jupy
====

Jupy is a temprature logger project using Raspberry PI and DS18B20 temprature sensor.


Node
====

This is the data collecting unit. It includes a Raspberry and a sensor of some sort.
The sqlite database included is setup with the following tables:
"""create table node(id INTEGER PRIMARY KEY, timestamp datetime default current_timestamp, name TEXT, loc TEXT, type TEXT, data double);"""