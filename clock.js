var Clock = (function(){
	function Clock(){
		this.oHour = document.getElementById('hour');
		this.oMin = document.getElementById('min');
		this.oSec = document.getElementById('sec');
		this.oUl = document.getElementById('list');
		this.oCss = document.getElementById('css');
		this.oZone = document.getElementById('zone-list');
		this.oBtn = document.getElementById('btn');
		this.newTime = null;
		this.myDate = null;
		this.myHour = null;
		this.myMin = null;
		this.mySec = null;
		this.cssContent = null;
		this.setting = {
			hourColor: '#000',
			minColor: '#888',
			secColor: 'red',
			offset: '8'
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
	}
	Clock.prototype.getTime = function(){
		this.myDate = new Date();
		this.mySec = this.myDate.getSeconds();
		this.myMin = this.myDate.getMinutes() + this.mySec/60;
		this.myHour = this.myDate.getHours() + this.myMin/60
		this.newTime = this.myHour - (8 - this.setting.offset);

		this.oHour.style.transform =  "rotate("+ (this.newTime*30) +"deg)";
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
	Clock.prototype.getZone = function(){
		var This = this;
		var xhr = new XMLHttpRequest();
		var html = '';
		var index = null;
		var offset = null;
		xhr.open('get','http://tianxuning.com/demo/worldtime/timezones.json', true);
		xhr.send();
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4){
				var data = JSON.parse(xhr.responseText);
				for (var i=0; i<data.length; i++){
					html += "<option>"+ data[i].text +"</option>";
				}
				This.oZone.innerHTML += html;
				This.oBtn.onclick = function(){
		 			index = This.oZone.selectedIndex;
		 			if( index == 0){
		 				offset = 8;
		 				index = -1;
		 			}
		 			else {
		 				index = index -1;
		 				offset = data[index].offset;
		 			}
		 			This.setting.offset = offset;
		 			This.title('title', data, index);
		 			
		 		}
			}
		}
	}
	Clock.prototype.title = function(id, data, index){
		var html = null;
		var oTitle = document.getElementById(id);
		html = data[index].text;
		oTitle.innerHTML = html;
	}
	return Clock;
})();
