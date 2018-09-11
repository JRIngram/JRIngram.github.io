window.onload = function(){
	introductionHeader = document.getElementById('introductionHeader');
	title = document.getElementById('title');
	windowWidth = window.innerWidth;
	reformatTitle(windowWidth)
}



window.onresize = function(){
	windowWidth = window.innerWidth;
	reformatTitle(windowWidth)	
}


/*
If the window width is less than 1350px then the title is split into two lines and the hyphen is removed
If the window width is greater than 1350px then the title is placed as one line with a hyphen splitting the name and job.
*/
function reformatTitle(windowSize){
	if(windowSize > 1350){	
		title.innerHTML = '<h1>Jamie Ingram - Software Developer</h1>';
	}
	else if (windowSize < 1350){
		title.innerHTML = '<h1>Jamie Ingram</h1><h1>Software Developer</h1>';
	}
}


