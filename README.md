PlainEval
======
This program is ment to be used by students and teachers in Reykjavik Univeristy.

Packages
--------
PlainEval uses AngularJS, grunt, bower. It contacts API from the RU site to get
all of its data.


Installition
------------

``` sh
npm install
bower install
```

User can run ``` grunt serve ``` to run server instance at port 9000 for testing and developing.

Run
---
Either use python to run server instance or put it at your server directory.

Running on localhost:8081
``` sh
python2.7 -m SimpleHTTPServer 8081 
or
python2.7 app/server.py  # Developing
or
python2.7 dist/server.py  # Production code
```
