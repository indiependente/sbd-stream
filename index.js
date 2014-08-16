var sbd = require('sbd');
var tr = require('through');

module.exports = tr(
	function write(data){
		var sentences = sbd.sentences(data.toString());
		for (var i = 0; i < sentences.length; i++) {
			this.queue(new Buffer(sentences[i]));
		}
	},
	function end(data){
		if(arguments.length)
			write(data);
		this.queue(null);
	}
);