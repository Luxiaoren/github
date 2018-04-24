function move(obj,json,fn){
	clearInterval(obj.timer);
	obj.timer = setInterval(()=>{
		var onOff = true;
		for(var attr in json){
			if(attr == "opacity"){
				var iNow = getStyle(obj,attr)*100;
			}else{
				var iNow = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr]-iNow)/7;
			speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);
			if(json[attr] !== iNow){
				onOff = false;
			}
			
			if(attr === "opacity"){
				obj.style.opacity = (iNow+speed)/100;
				obj.style.filter = "alpha(opacity="+ (iNow+speed) +")"
			}else{
				obj.style[attr] = iNow + speed + "px";
			}
			
		}
		if(onOff){
			clearInterval(obj.timer);
			if(fn){
				fn();
			}
		}
	},30)
}
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr];
	}
}
		

