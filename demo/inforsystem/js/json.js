onload=function(){
    var  oa=document.querySelector('#username');
    // console.log(1);
    // console.log(oa);
    oa.innerHTML=getCookie("username");
    var x=getXml("xml/basefile.xml","stufile");
    var username=getCookie("username");
    var op=document.querySelectorAll('li p');
    // alert(username);
    for(var i=0;i<x.length;i++){
        if(x[i].getElementsByTagName('stucount')[0].innerHTML===username){

            for(var j=3,m=0;j<11*4;j+=4,m++){
                op[m].innerHTML=x[i].childNodes[j].innerHTML;
            }
            break;
        }else{
            // alert(x[i].getElementsByTagName('stuname')[0].innerHTML);
        }
    }
}