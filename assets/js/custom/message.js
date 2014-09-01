define(['testcase', 'storage'], function(testcase, storage) {
	var message = {
		help: function() {

			var str = "<p>Scroll down to read help in English</p><br>=================================================<br><p>Bahasa Indonesia</p>=================================================<br><p>Dalam game ini, juri akan menebak angka yang anda pikirkan dan akan ditampilkan di bawah tulisan 'Jury's Guess'. Untuk setiap kali angka muncul, anda harus menekan salah satu dari tiga tombol orange dibawah. Tekan tombol 'Too Large' bila angka tebakan juri lebih besar dari angka yang anda pikirkan, tekan tombol 'Too Small' apabila angka tebakan juri lebih kecil dari angka yang anda pikirkan, atau tekan tombol 'correct' bila angka tebakan juri sama dengan angka yang anda pikirkan.</p><br><p>Bila juri sudah menebak sebanyak Q (baca soal) kali dan juri belum berhasil menebak angka anda, maka anda berhasil dalam permainan ini. Bila juri berhasil menebak angka yang anda pikirkan maka anda gagal dalam permainan ini.</p><br><p>Untuk mengganti subtask yang ingin dimainkan, pilih subtask yang ingin dimainkan pada menu dropdown subtask dan klik tombol 'play'. Untuk Mengulang game klik tombol 'reset'.</p><p>Indikator subtask mengindikasikan subtask mana yang telah anda selesaikan, indikator bewarna hijau berarti anda telah berhasil menyelesaikan subtask tersebut. Tekan tombol 'Download Source Code' untuk menghasilkan source code yang berisi kode untuk menyelesaikan subtask yang telah anda selesaikan (anda bisa mengumpulkan source code ini).</p>=================================================<br><p>English</p>=================================================<br><p>In this game, jury will guess a number to guess the number you have think before and will be shown below the 'Jury's Guess' text. For every jury's guess, you need to click on one of the three button below. Click 'Too Large' if jury's number is larger than your number, click 'Too Small' if jury's number is smaller than your number, or click 'correct' if jury's number is same as your number.</p><br><p>If jury have guess for Q (read the problem) times and jury have not successfully guess your answer, then you win the game. But if jury successfully guess your number, you fail the game.</p><br><p>To change the subtask played, choose the subtask you want to play in subtask dropdown menu and click 'play'. To reset the game, click on 'reset' button</p><p>Subtask Indicator indicate which subtask you have solve, green indicator means you hage successfully solve that subtask. Press 'Download Source Code' to generate source code that will solve the subtask you have solved (you can submit this source code).</p>";

			return str;
		},
		about: function() {
			var str = "<p>This game is created for the visualisation purpose of Olimpiade Sains Nasional (OSN) 2014 purpose.</p>&#169; 2014 TOKI";

			return str;
		},
		codeC: function() {
			var ans1,ans2;

			if(storage.isTrue(1)) {
				ans1 = testcase.getAnswer(1);
			} else {
				ans1 = "You have not solve this subtask.";
			}

			if(storage.isTrue(2)) {
				ans2 = testcase.getAnswer(2);
			} else {
				ans2 = "You have not solve this subtask.";
			}

			var str = '<pre>#include &lt;cstdio&gt;\n#include &lt;cstring&gt;\n\nusing namespace std;\nchar subtask[100];\n\nint main() {\n\tscanf("%s", subtask);\n\tif(!strcmp(subtask, ".1....")) {\n\t\t printf("' + ans1 + '");\n\t} else if(!strcmp(subtask, "..2...")) {\n\t\tprintf("' + ans2 + '");\n\t} else {\n\t\t/* General Solution */\n\t}\n\treturn 0;\n}</pre>';

			return str;
		},
		codePas: function() {
			var ans1,ans2;

			if(storage.isTrue(1)) {
				ans1 = testcase.getAnswer(1);
				ans1 = ans1.replace(/\\n/g, "'#10'");
			} else {
				ans1 = "You have not solve this subtask.";
			}

			if(storage.isTrue(2)) {
				ans2 = testcase.getAnswer(2);
				ans2 = ans2.replace(/\\n/g, "'#10'");
			} else {
				ans2 = "You have not solve this subtask.";
			}

			var str = '<pre>var\n\ts: string;\n\nbegin\n\treadln(s);\n\tif(s = \'.1....\') then\n\tbegin\n\t\t write(\'' + ans1 + '\');\n\tend else if(s = \'..2...\') then begin \n\t\twrite(\'' + ans2 + '\');\n\tend else begin\n\t\t{ General Solution }\n\tend;\nend.</pre>';

			return str;
		},
	};

	return message;
});