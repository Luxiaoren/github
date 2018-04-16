function setCookie(key,value,time){
    var date=new Date();
    date.setSeconds(date.getSeconds()+time);
    document.cookie=key+"="+value+";expires="+date+";path=/";
}
function removeCookie(key){
    setCookie(key,"null",-1);
}
function getCookie(key){
    var cookie=document.cookie;
    cookie=cookie.split("; ");
    for(var i=0;i<cookie.length;i++){
        if(cookie[i].split("=")[0]===key){
            return cookie[i].split("=")[1];
        }
    }
    return false;
}
function getXml(xmlPath,element){/*获取xml文件*/
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("GET", xmlPath, false);
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;
    var x;
    // var lenght = xmlDoc.getElementsByTagName("loginfo").length;
    x = xmlDoc.getElementsByTagName(element);
    return x;
}
function eventEntrust(ele, fn) {/*事件委托*/
    return function (ev) {
        ev = ev || window.event;
        var target = ev.target || ev.srcElement;
        if (ele.length) {
            // console.log(ev.target);
            for (var i = 0; i < ele.length; i++) {
                if (target === ele[i]) {
                    fn.bind(target)();
                }
            }
        } else {
            if(target===ele){
                fn.bind(target)();

            }
        }
    }

}
function move($this, target, pro) {/*运动的封装-位置和透明度*/
    pro = pro || "left";
    let speed;
    clearInterval($this.timer);
    $this.timer = setInterval(() => {
        if(pro==="opacity"){
            speed=(getComputedStyle($this,false)[pro]-target)/10;
            $this.style[pro]=getComputedStyle($this,false)[pro]-speed;
            console.log(getComputedStyle($this,false)[pro]);
            if(Math.floor(getComputedStyle($this,false)[pro]*100)===target*100||Math.ceil(getComputedStyle($this,false)[pro]*100)===target*100){
                clearInterval($this.timer);
            }
        }else{
            let w = (target - parseInt(getComputedStyle($this, false)[pro])) / 10;
            speed = w > 0 ? Math.ceil(w) : Math.floor(w);
            $this.style[pro] = parseInt(getComputedStyle($this, false)[pro]) + speed + 'px';
            if (parseInt(getComputedStyle($this, false)[pro]) === target) {
                clearInterval($this.timer);
            }
        }

    }, 30);
}