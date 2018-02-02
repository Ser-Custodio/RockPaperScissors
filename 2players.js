// you can write js here
console.log('exo-3');
const objects = ['PAPER','ROCK','SCISSORS','bomb']; // user possible choices
const results = [['tied','User win','User lost'],['User lost','tied','User win'],['User win','User lost','tied']]; //results
const results2 = [['tied','User 1 win','User 2 win'],['User 2 win','tied','User 1 win'],['User 1 win','User 2 win','tied']]; //results
let userInput = '';
let userInput2 = '';
let userIndex = '';
let userIndex2 = '';
let images = ['paper2.png','rock2.png','scissors2.png'];
let userScore = 0;
let user2Score = 0;
let numGames = 1;


$(document).ready(function(){
///////////////////////////////GENERAL///////////////////////////////
	$('.showResult').css('text-align', 'center')
	$('img').height('100px')
	$('h1, h2, h6').css('text-align', 'center');
	$('h6').css('font-size','40px')
	$('img').css('text-align', 'center');
	$('.play1').css('color','green')
	$('.play2').css('color','red')
	$('.userChoice, .user2Choice').css('text-align','center')
///////////////////////////////USER 1 CHOICE///////////////////////////////
	$('.userChoice').click(function(){
		userInput = $(this).children('h2').text();
		console.log(userInput)
		userIndex = objects.indexOf(userInput);
	});

///////////////////////////////USER 2 CHOICE////////////////////////////
	$('.user2Choice').click(function(){
		userInput2 = $(this).children('h2').text();
		console.log(userInput2)
		userIndex2 = objects.indexOf(userInput2);
	});

///////////////////////////////DISPLAY RESULT////////////////////////////
	$('.btn').click(function(){
		if(userScore < 3 && user2Score < 3){
			$('.result').append('<div class="row"><div class="col-sm-5 uCh"><div><img src="' + images[userIndex] + '" style=height:50px></div></div><div class="col-sm-2 "><div class="label res visual">'+ results2[userIndex][userIndex2] +'</div></div><div class="col-sm-5 cCh"><div><img src="' + images[userIndex2] + '" style=height:50px></div></div></div>');
				if(results2[userIndex][userIndex2] === 'User 1 win'){
					$('.res').addClass('label-success');
					$('.res').removeClass('res');
					userScore = userScore + 1
				}
				else if(results2[userIndex][userIndex2] === 'User 2 win'){
					$('.res').addClass('label-danger');
					$('.res').removeClass('res');
					user2Score = user2Score + 1
				}
				else{
					$('.res').addClass('label-default')	;
					$('.res').removeClass('res');
				}
				$('.uCh, .visual, .cCh, .versus').css('display', 'block');
				$('.uCh, .visual, .cCh, .versus').css('text-align', 'center');
				$('.visual').css('text-transform', 'uppercase');
				$('.visual, .versus').css('font-size', '25px');
				$('.versus').html(userScore + ' - ' +user2Score);
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
		}else if(user2Score === 3){
			$('#myModal2').modal('show');
			$('.modal-body').append('<h6><b>After '+ numGames + ' games played</b>');
		} 
		$('.modal-body h5').css('font-size', '60px');
		$('.modal-body h5').css('font-family', 'verdana');
		$('.modal-body h5').css('text-align', 'center');
		$('#myModal1 h5').css('color', 'green');
		$('#myModal2 h5').css('color', 'red');
		$('.modal-body h6').css('text-align', 'center');
		$('.modal-body h6').css('font-size','40px')
		numGames = numGames + 1;
	});
});
function determineWinner(userChoice, user2Choice){
	console.log(results[userIndex][userIndex2]);
}
