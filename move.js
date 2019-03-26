const images = [
    '/pelmen/zvizda.png',
    '/pelmen/privet.png',
    '/pelmen/ptlv.png',
    '/pelmen/arest.png'
];



let currentId = 0;
function dblclick() {
    currentId = currentId >= 3 ? 0 : currentId + 1;
    var element = document.getElementById("zvizda");
    element.src = images[currentId];
}

function leftArrowPressed() {
    var element = document.getElementById("zvizda");
    element.style.left = parseInt(element.style.left) - 30 + 'px';
    }

    function rightArrowPressed() {
    var element = document.getElementById("zvizda");
    element.style.left = parseInt(element.style.left) + 30 + 'px';

    }

    function upArrowPressed() {
    var element = document.getElementById("zvizda");
    element.style.top = parseInt(element.style.top) - 30 + 'px';
    }

    function downArrowPressed() {
    var element = document.getElementById("zvizda");
    element.style.top = parseInt(element.style.top) + 30 + 'px';
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
