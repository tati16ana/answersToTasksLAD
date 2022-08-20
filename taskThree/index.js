window.onload = () => {

let b,k; //переменные обозначающие- быки(совпавшие цифры на своих местах) и коровы(совпавшие цифры не на своих местах)

// функция для формирования рандомного числа	
function randomNumber(min, max){ 

return Math.floor(Math.random() * (max - min + 1) + min);
}
	

// создание числа случайной длины от 3-х до 6-ти символов	
let randomLength = randomNumber(3, 6);	

// функция формирования числа 
function NumberFound(){

	let s = '';
	for(let i = 0; i < randomLength; i++){
		do{
			let c = randomNumber(0, 9);
			if (s.indexOf(c) <= 0)
			s = s + c;
			break;
		} while(true);
	}
	return s;
}


// функция предназначенная для вычисления совпавших цифр на своих местах и не на своих местах	
function cowORbull(guess, riddle){
	b=0;
	k=0;

	for (let i = 0; i < randomLength; i++){
		
		if (guess[i]==riddle[i])
		b++;
	
		else
		if (guess.indexOf(riddle[i]) >= 0) k++;
		}
	}
	
	
	
let guessNumber=NumberFound();
let ch = prompt("Введите количество попыток:");
	for(let i = 0; i < ch; i++){
	let c = prompt("Введите число:");
	cowORbull(guessNumber, c);
	let arr = new Array();	
	let arr2 = new Array();
	// проверка на совпадение цифр и запись их в массивы
	for (let i = 0; i < guessNumber.length; i++){
			if (guessNumber[i]==c[i]){
			arr.push(guessNumber[i]);}
		else if (guessNumber.includes(c[i])){
			arr2.push(c[i]);
		} 
	}
	let s = c+" "+"совпавших цифр на своих местах- "+b+" "+"("+arr+")"+" совпавших цифр не на своих местах- "+k+" "+"("+arr2+")";
	document.write(s+"<br>");
		if (c == guessNumber){
		alert("Вы выиграли!");
		break;
	
	}
	}
	document.write("Загаданное число: "+guessNumber);
}