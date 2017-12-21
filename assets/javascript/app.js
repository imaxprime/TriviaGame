$('#start').on('click', function(){
	game.start();
})

$(document).on('click','#end',function(){
	game.done();
})
	
var questions = [{
	question:"The Fantastic Four have their headquarters in what building?",
	answers:["Stark Tower","Fantastic Headquarters","Baxter Building","Xavier Insitute"],
	correctAnswer:"Baxter Building",
}, {
	question:"Peter Parker works as a photographer for?",
	answers:["The Daily Planet","The Daily Bugle","New York Times","The Daily Rag"],
	correctAnswer:"The Daily Bugle"
}, {
	question:"S.H.I.E.L.D.'s highest ranking agent is?",
	answers:["Nick Fury","Captain America","Natalia Romanova","Peter Parker"],
	correctAnswer:"Nick Fury"
}, {
	question:"What vehicle is the Avengers primary mode of transport?",
	answers:["A bus","The Quinjet","The Blackbird","The Blackhawk"],
	correctAnswer:"The Quinjet"
}, {
	question:"Ghost Rider is also known as?",
	answers:["The Guardian Devil","The Spirit of Hate","The Spirit of Vengeance","The Red Skull"],
	correctAnswer:"The Spirit of Vengeance"
}];

var game = {
	correct: 0,
	incorrect: 0,
	counter: 10,
	countdown: function(){
		game.counter--;
		$('#counter').html(game.counter);
		if(game.counter<=0){
			console.log("Time is up!");
			game.done();
		}
	},
	start: function(){
			timer = setInterval(game.countdown,1000);
			$('#wrap').prepend('<h2>Time Remaining: <span id ="counter">120</span> Seconds </h2')
			for (var i=0;i<questions.length;i++){
				$('#wrap').append('<h2>'+questions[i].question+'</h2');
				for(var j = 0; j<questions[i].answers.length;j++){
				$("#wrap").append("<input type = 'radio' name =  'question-" +i+"' value = '"+questions[i].answers[j]+"'> "+questions[i].answers[j])
			}
    	}
    	$('#wrap').append('<br><button id="end">DONE</button>')
	},
	done: function(){
		$.each($('input[name="question-0"]:checked'), function(){
			if($(this).val()===questions[0].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});

		$.each($('input[name="question-1"]:checked'), function(){
			if($(this).val()===questions[1].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});

		$.each($('input[name="question-2"]:checked'), function(){
			if($(this).val()===questions[2].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});

		$.each($('input[name="question-3"]:checked'), function(){
			if($(this).val()===questions[3].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});

		$.each($('input[name="question-4"]:checked'), function(){
			if($(this).val()===questions[4].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});

		this.result();
	},

	result: function(){
		clearInterval(timer);
		$('#wrap h2').remove();
		$('#wrap').html("<h2>All done!</h2>");
		$('#wrap').append("<h3>Correct Answers: " + this.correct + "</h3>");
		$('#wrap').append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
		$('#wrap').append("<h3>Unanswered Questions: " + (questions.length-(this.incorrect+this.correct)) + "</h3>");

	}
}