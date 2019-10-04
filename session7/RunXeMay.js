let xe=new Xemay("xemay.PNG",300,200,50);
document.getElementById('xemay').innerHTML = xe.getXemayElement();
runXeMay();
function mouseSelection(e) {

    switch (e.which) {
        case 37:
            xe.moveLeft();
            document.getElementById('xemay').innerHTML = xe.getXemayElement();
            break;
        case 40:
            xe.moveDown()
            document.getElementById('xemay').innerHTML = xe.getXemayElement();
            ;break;
        case 39:
            xe.moveRight()
            document.getElementById('xemay').innerHTML = xe.getXemayElement();
            ;break;
        case 38:
            xe.moveUP();
            document.getElementById('xemay').innerHTML = xe.getXemayElement();
            break;
    }
}
function runXeMay() {
    window.addEventListener("keydown", mouseSelection);
}