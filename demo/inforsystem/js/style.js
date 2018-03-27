





function changelist($this,element) {/*改变列表的状态*/

    var height = element.style.height;

    if(height === '0px' || height === ''){
        element.style.animation='asideFrameShow   .2s linear  forwards';/*设置列表页展开动画*/
        element.style.height='144px';                                   /*重置列表页高度*/
        $this.style.backgroundColor='#fff';
        $this.style.color='#2b7dc2';
        $this.style['border-left-width']='3px';
        $this.style['border-left-style']='solid';
        $this.style['border-left-color']='#3382af';



    }
    else {
        element.style.animation='asideFrameHidden .2s linear  forwards';
        element.style.height='0px';
        $this.style.backgroundColor='#f9f9f9';
        $this.style['border-left-width']='1px';
        $this.style['border-left-style']='solid';
        $this.style['border-left-color']='#e5e5e5';
        $this.style.color='#616161';

    }

}
