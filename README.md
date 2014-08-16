sbd-stream
==========

Node.js Sentence Boundary Detection Stream

sbd-stream is based on https://www.npmjs.org/package/sbd

##Usage
Pipe text into it and it will stream out sentences.

```javascript
var sbdStream = require('sbd-stream');

streamA.pipe(sbdStream).pipe(streamB);
```

##License
####MIT
