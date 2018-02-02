// you can write js here
console.log('exo-3');
const objects = ['PAPER','ROCK','SCISSORS','bomb']; // user possible choices
const results = [['tied','User win','User lost'],['User lost','tied','User win'],['User win','User lost','tied'],['User win','User win','User win']]; //results
let userInput = '';
let userInput2 = '';
let computerChoice = '';
let userIndex = '';
let images = ['paper2.png','rock2.png','scissors2.png'];
let userScore = 0;
let pcScore = 0;
let numGames = 1;

///////////////////////////////USER CHOICE///////////////////////////////
$(document).ready(function(){
	$('img').height('300px')
	$('.pcChoice').css('visibility', 'hidden')	
	$('h1, h2').css('text-align', 'center');
	$('img').css('text-align', 'center');
	$('.userChoice').click(function(){
		userInput = $(this).children('h2').text();
		console.log(userInput)
		$('.pcChoice').css('visibility', 'visible')
		userIndex = objects.indexOf(userInput);
		$('.pcChoice').css('text-align', 'center')
	});

///////////////////////////////COMPUTER CHOICE////////////////////////////
	$('.btn').click(function(){
		$('.pcChoice').css('visibility', 'hidden')
		computerChoice  = Math.floor(Math.random(0,2)*3)
		console.log(objects[computerChoice]);
		determineWinner(userIndex, computerChoice);
	});

///////////////////////////////DISPLAY RESULT////////////////////////////
	$('.btn').click(function(){
		if(userScore < 3 && pcScore < 3){
			$('.result').append('<div class="row"><div class="col-sm-5 uCh"><div><img src="' + images[userIndex] + '" style=height:100px></div></div><div class="col-sm-2 "><div class="label res visual">'+ results[userIndex][computerChoice] +'</div></div><div class="col-sm-5 cCh"><div><img src="' + images[computerChoice] + '" style=height:100px></div></div></div>');
				if(results[userIndex][computerChoice] === 'User win'){
					$('.res').addClass('label-success');
					$('.res').removeClass('res');
					userScore = userScore + 1
				}
				else if(results[userIndex][computerChoice] === 'User lost'){
					$('.res').addClass('label-danger');
					$('.res').removeClass('res');
					pcScore = pcScore + 1
				}
				else{
					$('.res').addClass('label-default')	;
					$('.res').removeClass('res');
				}
				$('.uCh, .visual, .cCh, .versus').css('display', 'block');
				$('.uCh, .visual, .cCh, .versus').css('text-align', 'center');
				$('.visual').css('text-transform', 'uppercase');
				$('.visual, .versus').css('font-size', '25px');
				$('.versus').html(userScore + ' - ' +pcScore);
		}
		else{
			let answer = confirm("Play again?")
			if (answer == true){
				location.reload();		
			}
		}
		if(userScore === 3){
			$('#myModal1').modal('show');
			$('.modal-body').append('<h6><b>After '+ numGames + ' games played</b>');
		}else if(pcScore === 3){
			$('#myModal2').modal('show');
			$('.modal-body').append('<h6><b>After '+ numGames + ' games played</b>');
		} 
		$('.modal-body h5').css('font-size', '60px');
		$('.modal-body h5').css('font-family', 'verdana');
		$('.modal-body h5').css('text-align', 'center');
		$('#myModal1 h5').css('color', 'green');
		$('#myModal2 h5').css('color', 'red');
		$('h6').css('text-align', 'center');
		$('h6').css('font-size', '20px');
		numGames = numGames + 1;
	});
});
function determineWinner(userChoice, computerChoice){
	console.log(results[userIndex][computerChoice]);
}
