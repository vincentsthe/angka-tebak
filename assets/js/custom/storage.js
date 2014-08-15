define([], function() {
	var storage = {
		init: function() {
			if(!(localStorage.subtask1)) {
				localStorage.subtask1 = "false";
			};
			if(!(localStorage.subtask2)) {
				localStorage.subtask2 = "false";
			};
		},
		setTrue: function(n) {
			if(n === 1) {
				localStorage.subtask1 = "true";
			} else if(n === 2) {
				localStorage.subtask2 = "true";
			}
		},
		isTrue: function(n) {
			if(n == 1) {
				return (localStorage.subtask1 === "true");
			} else if(n == 2) {
				return (localStorage.subtask2 === "true");
			}
		}
	};
	return storage;
});