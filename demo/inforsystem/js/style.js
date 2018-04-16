

function getXml(xmlPath,element){
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
function savesch() {
    console.log();
    var name = document.querySelectorAll("form#form1 input")[0];
    console.log(name.value);
    name.value = "";
}


function update() {

}

function checkid() {
    var name = document.getElementById('name').value;
    var password = document.getElementById('password').value;
    console.log(name, password);
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("GET", "xml/logfile.xml", false);
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;

    var lenght = xmlDoc.getElementsByTagName("loginfo").length;
    var x = xmlDoc.getElementsByTagName("loginfo");
    var flag = false;
    for (i = 0; i < lenght; i++) {
        /*判断用户名是否相*/
        if (x[i].getElementsByTagName("count")[0].childNodes[0].nodeValue === name) {
            /*当用户名相等时判断密码是否相等*/
            if (x[i].getElementsByTagName("password")[0].childNodes[0].nodeValue === password) {
                /*当用户名和密码都相等的时候*/
                document.cookie="username="+name;
                flag = true;
                break;
                /*设置用户名和密码都成功的标志*/
                /*跳出循环*/
            }
        }
    }
    if (flag) {
        return true;
        /*登录成功返回正确跳转*/
    } else {
        alert("登录失败");
        return false;
        /*登录失败返回错误*/
    }


}


function changelist($this, element, flag) {/*改变列表的状态*/

    var height = element.style.height;
    console.log(height, flag, '1');
    if ((height === '0px' || height === '') && flag === false) {/*当初始高度为隐藏时高度时设置动画为展开动画*/
        element.style.animation = 'asideFrameShow   .2s linear  forwards';
        /*设置列表页展开动画*/
        element.style.height = '144px';
        /*重置列表页高度*/
        $this.style.backgroundColor = '#fff';
        $this.style.color = '#2b7dc2';
        $this.style['border-left-width'] = '3px';
        $this.style['border-left-style'] = 'solid';
        $this.style['border-left-color'] = '#3382af';


    }
    else if ((flag === true) && (height !== '0px')) {/*当初始高度为展开时的高度时设置动画*/
        element.style.animation = 'asideFrameHidden .2s linear  forwards';
        element.style.height = '0px';
        $this.style.backgroundColor = '#f9f9f9';
        $this.style['border-left-width'] = '1px';
        $this.style['border-left-style'] = 'solid';
        $this.style['border-left-color'] = '#e5e5e5';
        $this.style.color = '#616161';

    }
    else if ((flag === true) && (height === '0px')) {/*初始高度为展开时时高度的第二次点击*/
        element.style.animation = 'asideFrameShow .2s linear  forwards';
        element.style.height = '144px';
        $this.style.backgroundColor = '#fff';
        $this.style['border-left-width'] = '3px';
        $this.style['border-left-style'] = 'solid';
        $this.style['border-left-color'] = '#3382af';
        $this.style.color = '#616161';
    }
    else if ((flag === false) && (height !== '0px')) {/*初始高度为隐藏时的第二第点击*/
        element.style.animation = 'asideFrameHidden .2s linear  forwards';
        element.style.height = '0px';
        $this.style.backgroundColor = '#f9f9f9';
        $this.style['border-left-width'] = '1px';
        $this.style['border-left-style'] = 'solid';
        $this.style['border-left-color'] = '#e5e5e5';
        $this.style.color = '#616161';
    }

}

