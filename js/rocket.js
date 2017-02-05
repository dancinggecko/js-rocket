var timer = null;
var countdownNumber = 10;

var changeState = function (state) {
	document.body.className = 'body-state'+ state;
	clearInterval(timer);
	countdownNumber = 10;

	if (state == 1){
		document.getElementById('going-home').className = 'going-home';
	}

if (state == 1){
		document.getElementById('Yay').className = 'Yay';
	}


	document.getElementById('countdown').innerHTML = countdownNumber;
	// count down

	if (state ==2) {
		timer = setInterval(function () {
			countdownNumber = countdownNumber -1;
			document.getElementById('countdown').innerHTML = countdownNumber;
			
			if (countdownNumber > 4 && countdownNumber <= 7) {
				// he's going home
				document.getElementById('going-home').className = 'going-home show';
			} else {
				document.getElementById('going-home').className = 'going-home';
			}


			if (countdownNumber > 1 && countdownNumber <= 4) {
				// can't wait
				document.getElementById('Yay').className = 'Yay show';
			} else {
				document.getElementById('Yay').className = 'Yay';
			}

			if (countdownNumber <= 0) {
				changeState(3);
			};
		}, 500);
	} else if (state == 3) {
		var success = setTimeout(function () {
				var randomNumber = Math.round (Math.random()*10);

				console.log('randomNumber:', randomNumber)
				
				// success
				if (randomNumber >3) {
					changeState(4);
				
				} else {
					changeState(5);	
					// oh nooo!		

			}
		}, 2000);

	};
}
		//1000ms is a sec 
