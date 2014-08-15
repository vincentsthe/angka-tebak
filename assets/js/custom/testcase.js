define([], function() {
	var tc = [];
	tc[1] = [15, 3];
	tc[2] = [31, 4];
	var testcase = {
		getNVariable: function(numTC) {
			return tc[numTC][0];
		},
		getQVariable: function(numTC) {
			return tc[numTC][1];
		},
	};

	return testcase;
});