var centerbox = document.getElementById("center");
var imgchar = document.getElementById("centerimg1");
var num = 1;
var step = 7;
var height = 100;

document.getElementById("plus").addEventListener("click", function(){
	height+= num;
	imgchar.style.height = height + "%";
});

document.getElementById("minus").addEventListener("click", function(){
	height-= num;
	imgchar.style.height = height + "%";
});

document.getElementById("avatar1").addEventListener("click", function(){
	imgchar.src = "imgs/ava1.png";
});

document.getElementById("avatar2").addEventListener("click", function(){
	imgchar.src = "imgs/ava2.png";
});

document.getElementById("dropmenu").addEventListener("click", function(){
	document.getElementById("menu").style.right = "0px";
});


document.getElementById("right").addEventListener("click", function(){
	num = num + step;
	centerbox.style.left = num + "px";
});

document.getElementById("left").addEventListener("click", function(){
	num = num - step;
	centerbox.style.left = num + "px";
});

document.getElementById("up").addEventListener("click", function(){
	num = num + step;
	centerbox.style.bottom = num + "px";
});

document.getElementById("down").addEventListener("click", function(){
	num = num - step;
	centerbox.style.bottom = num + "px";
});

 