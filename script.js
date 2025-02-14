var button = document.getElementById('butt_for');
button.onclick = function () {
    var container = document.getElementById('container');
    sideScroll(container,'right',50,600,30);
};

var back = document.getElementById('butt_back');
back.onclick = function () {
    var container = document.getElementById('container');
    sideScroll(container,'left',50,600,30);
};

function sideScroll(element,direction,speed,distance,step){
    scrollAmount = 0;
    var slideTimer = setInterval(function(){
        if(direction == 'left'){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
}
