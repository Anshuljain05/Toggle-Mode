"use strict";


var toggle = document.getElementById('inner');

var count = 0;

function lightToBlack(){
	toggle.style.cssText = 'transform: translate(80px); transition: 1s ease-in-out';
	document.body.style.cssText = 'background-color: black';
	document.getElementById('heading').style.cssText = 'color: white';
};

function blackToLight(){
	toggle.style.cssText = 'transform: translate(0px); transition: 1s ease-in-out';
	document.body.style.cssText = 'background-color: white';
	document.getElementById('heading').style.cssText = 'color: black';
};


toggle.addEventListener('click', function(){
	count++;
	if(count%2 === 0){
		blackToLight();
	}
	else{
		lightToBlack();
	}
});

document.getElementById('outer').addEventListener('click', function(){
	count++;
	if(count%2 === 0){
		blackToLight();
	}
	else{
		lightToBlack();
	}
});
