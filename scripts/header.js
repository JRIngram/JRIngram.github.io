console.log("Connected!");

window.onload = function(){
	introductionHeader = document.getElementById('introductionHeader');
	title = document.getElementById('title');
	console.log(title);
	console.log(introductionHeader);
	windowWidth = window.innerWidth;
	reformatTitle(windowWidth)
}



//If greater than 1350.
window.onresize = function(){
	windowWidth = window.innerWidth;
	reformatTitle(windowWidth)	
}

function reformatTitle(windowSize){
	console.log("REFORMAT: " + windowSize)
	if(windowSize > 1350){	
		console.log("UH OH!")
		title.innerHTML = '<h1>Jamie Ingram - Software Developer</h1>';
	}
	else if (windowSize < 1350){
		console.log("WOOOOOOOOOOO!")
		title.innerHTML = '<h1>Jamie Ingram</h1><h1>Software Developer</h1>';
	}
}


