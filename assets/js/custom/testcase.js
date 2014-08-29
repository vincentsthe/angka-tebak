define([], function() {
	var tc = [];
	tc[1] = [31, 4];
	tc[2] = [127, 4];
	header = ["", ".1....", "..2..."];

	var answer = [
		"",
		"TERLALU BESAR\\nTERLALU BESAR\\nTERLALU BESAR\\nTERLALU BESAR\\n",
		"TERLALU BESAR\\nTERLALU BESAR\\nTERLALU BESAR\\nTERLALU BESAR\\nTERLALU BESAR\\nTERLALU BESAR\\n"
	];

	var testcase = {
		getNVariable: function(numTC) {
			return tc[numTC][0];
		},
		getQVariable: function(numTC) {
			return tc[numTC][1];
		},
		getHeader: function(numTC) {
			return header[numTC];
		},
		getAnswer: function(numTC) {
			return answer[numTC];
		}
	};

	return testcase;
});