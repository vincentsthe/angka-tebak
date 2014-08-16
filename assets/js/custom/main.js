define(['guesser', 'storage', 'jquery', 'testcase', 'notifier', 'textarea'], 
	function(guesser, storage, $, testcase, notifier, textarea) {
	
	$(document).ready(function() {
		var done;
		var currentTC;
		var lock;

		var colorSubtask = function() {
			for(var i=1 ; i<=2 ; i++) {
				if(storage.isTrue(i)) {
					$("#tc-" + i).css("background-color", "#2ca02c");
				}
			}
		}

		var setSubtaskTrue = function(numTC) {
			storage.setTrue(numTC);
			colorSubtask();
		};

		var doNextGuess = function() {
			$("#guess").html('<i class="fa fa-spinner fa-spin"></i>');
			setTimeout(function() {
				if(guesser.isPlayerCheat()) {
					notifier.createAlert("Anda Curang");
					done = true;
					$("#guess").html("Anda Curang!");
				} else if(guesser.isHaveSuccessResponse()) {
					done = true;
					notifier.createAlert("Anda kalah!<br>Juri berhasil menebak angka anda.");
					$("#guess").html("Anda Kalah!");
				} else if(!guesser.haveRemainingMove()) {
					done = true;
					setSubtaskTrue(currentTC);
					notifier.createAlert("Anda menang!<br>Juri tidak berhasil menebak angka anda.");
					$("#guess").html("Anda Menang!");
				} else {
					var nextGuess = guesser.nextGuess();

					$("#guess").html(nextGuess);
					textarea.insertLeft(nextGuess);
				}
				lock = false;
			}, 2000);
		};

		var submitResponse = function(response) {
			if(!done && !lock) {
				lock = true;
				guesser.input(parseInt($("#guess").html()), response);
				if(response === "greater") {
					textarea.insertRight("terlalu besar");
				} else if(response === "less") {
					textarea.insertRight("terlalu kecil");
				} else {
					textarea.insertRight("selamat");
				}
				doNextGuess();
			}
		};

		var init = function(numTC) {
			storage.init();
			guesser.initWithTC(numTC);
			currentTC = numTC;
			colorSubtask();
			done = false;
			lock = true;
			doNextGuess();
			textarea.reset();
			textarea.insertLeft(guesser.getUpperBound() + " " + guesser.getRemainingMove());
		};

		init(1);

		$("#greater").click(function() {
			submitResponse("greater");
		});
		$("#less").click(function() {
			submitResponse("less");
		});
		$("#equal").click(function() {
			submitResponse("equal");
		});

		$("#reset").click(function() {
			init(currentTC);
		});

		$("#play").click(function() {
			init($("#testcase").val());
		});
	});

});