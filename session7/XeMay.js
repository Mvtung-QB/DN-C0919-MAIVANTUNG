var Xemay=function (image,top,left,size) {
    this.image=image;
    this.top=top;
    this.left=left;
    this.size=size;

    this.getXemayElement=function () {

        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';

    }
    this.moveUP=function () {
         if (this.top > 0) {
             this.top -= 10;
         }
        document.getElementById('xemay').innerHTML = this.getXemayElement();
        setTimeout(this.moveUP,1000);
    }
    this.moveDown=function () {
         if(window.innerHeight-this.top>this.size) {
             this.top += 10;
         }
        document.getElementById('xemay').innerHTML = this.getXemayElement();
        setTimeout(this.moveDown,1000);
    }
    this.moveLeft=function () {
         if(this.left>0) {
             this.left -= 10;
         }
        document.getElementById('xemay').innerHTML = this.getXemayElement();
        setTimeout(this.moveLeft,1000);
    }
    this.moveRight=function () {
         if(window.innerWidth - this.left > this.size) {
             this.left += 10;
         }
        document.getElementById('xemay').innerHTML = this.getXemayElement();
        setTimeout(this.moveRight,1000);
    }
}