window.onload = function (){
	var c1 = new Clock();
	c1.init({
		
	});
}
function Clock(){
	this.oHour = document.getElementById('hour');
	this.oMin = document.getElementById('min');
	this.oSec = document.getElementById('sec');
	this.oUl = document.getElementById('list');
	this.oCss = document.getElementById('css');
	this.myDate = null;
	this.myHour = null;
	this.myMin = null;
	this.mySec = null;
	this.cssContent = null;
	this.setting = {
		hourColor: '#000',
		minColor: '#888',
		secColor: 'red'
	};
}
Clock.prototype.init = function(obj){
	var This = this;
	this.extend(this.setting, obj)
	for(var i=0; i<60; i++){
		this.oUl.innerHTML += "<li></li>";
		this.cssContent += "#body li:nth-of-type("+ (i+1) 
		+"){transform: rotate("+ (i*6) +"deg);}"
	}
	this.oCss.innerHTML += this.cssContent;
	setInterval(function(){
		This.getTime();
	}, 1000);
	this.setColor();
}
Clock.prototype.getTime = function(){
	this.myDate = new Date();
	this.mySec = this.myDate.getSeconds();
	this.myMin = this.myDate.getMinutes() + this.mySec/60;
	this.myHour = this.myDate.getHours() + this.myMin/60;
	
	this.oHour.style.transform =  "rotate("+ (this.myHour*30) +"deg)";
	this.oMin.style.transform =  "rotate("+ (this.myMin*6) +"deg)";
	this.oSec.style.transform = "rotate("+ (this.mySec*6) +"deg)";
}
Clock.prototype.setColor = function(){
	this.oHour.style.backgroundColor =  this.setting.hourColor;
	this.oMin.style.backgroundColor =  this.setting.minColor;
	this.oSec.style.backgroundColor = this.setting.scColor;
}
Clock.prototype.extend = function(obj1, obj2){
	for(var attr in obj2){
		obj1[attr] = obj2[attr];
	};
}