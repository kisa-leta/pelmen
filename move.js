const images = [
    '/pelmen/zvizda.png',
    '/pelmen/privet.png',
    '/pelmen/ptlv.png',
    '/pelmen/arest.png'
];

var currentId = 0;
document.getElementById('zvizda').addEventListener('dblclick', dblclick);
var maxWidth = document.getElementById('stol').clientWidth;
var maxHeight = maxWidth / 1.33;
var minHeight = maxWidth / 1.89

function dblclick() {
    currentId = currentId >= 3 ? 0 : currentId + 1;
    var element = document.getElementById("zvizda");
    element.src = images[currentId];
}

    function leftArrowPressed() {
        var element = document.getElementById("zvizda");
        var currentX = parseInt(element.style.left, 10);
        element.style.left = `${currentX - 30 < maxWidth ? currentX : currentX - 30}px`;
    }

    function rightArrowPressed() {
        var element = document.getElementById("zvizda");
        var currentX = parseInt(element.style.left, 10);
        element.style.left = `${currentX + 230 > maxWidth ? currentX : currentX + 30}px`;
    }
    
    function upArrowPressed() {
        var element = document.getElementById("zvizda");
        var currentY = parseInt(element.style.top, 10);
        element.style.top = `${currentY - 30 < minHeight ? currentY : currentY - 30}px`;
    }
    
    function downArrowPressed() {
        var element = document.getElementById("zvizda");
        var currentY = parseInt(element.style.top, 10);
        element.style.top = `${currentY + 230 > maxHeight ? currentY : currentY + 30}px`;
    }

    function moveSelection(evt) {
        switch (evt.keyCode) {
            case 37:
            leftArrowPressed();
            break;
            case 39:
            rightArrowPressed();
            break;
            case 38:
            upArrowPressed();
            break;
            case 40:
            downArrowPressed();
            break;
            }
        };

function docReady()
{
  
  window.addEventListener('keydown', moveSelection);
}
