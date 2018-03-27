





function changelist($this,element,flag) {/*改变列表的状态*/

    var height = element.style.height;
    console.log(height,flag,'1');
    if((height === '0px' || height === '')&&flag === false){/*当初始高度为隐藏时高度时设置动画为展开动画*/
        element.style.animation='asideFrameShow   .2s linear  forwards';/*设置列表页展开动画*/
        element.style.height='144px';                                   /*重置列表页高度*/
        $this.style.backgroundColor='#fff';
        $this.style.color='#2b7dc2';
        $this.style['border-left-width']='3px';
        $this.style['border-left-style']='solid';
        $this.style['border-left-color']='#3382af';



    }
    else if((flag === true)&&(height!== '0px')){/*当初始高度为展开时的高度时设置动画*/
        element.style.animation='asideFrameHidden .2s linear  forwards';
        element.style.height='0px';
        $this.style.backgroundColor='#f9f9f9';
        $this.style['border-left-width']='1px';
        $this.style['border-left-style']='solid';
        $this.style['border-left-color']='#e5e5e5';
        $this.style.color='#616161';

    }
    else if((flag === true)&&(height === '0px')){/*初始高度为展开时时高度的第二次点击*/
        element.style.animation='asideFrameShow .2s linear  forwards';
        element.style.height='144px';
        $this.style.backgroundColor='#fff';
        $this.style['border-left-width']='3px';
        $this.style['border-left-style']='solid';
        $this.style['border-left-color']='#3382af';
        $this.style.color='#616161';
    }
    else if((flag===false)&&(height!== '0px')){/*初始高度为隐藏时的第二第点击*/
        element.style.animation='asideFrameHidden .2s linear  forwards';
        element.style.height='0px';
        $this.style.backgroundColor='#f9f9f9';
        $this.style['border-left-width']='1px';
        $this.style['border-left-style']='solid';
        $this.style['border-left-color']='#e5e5e5';
        $this.style.color='#616161';
    }

}
