document.addEventListener('DOMContentLoaded', function () {
var button = document.getElementById('butt_for');
button.onclick = function () {
    var container = document.getElementById('boddy');
    sideScroll(container,'right',50,600,30);
};

var back = document.getElementById('butt_back');
back.onclick = function () {
    var container = document.getElementById('boddy');
    sideScroll(container,'left',50,600,30);
};
});

function sideScroll(element,direction,speed,distance,step){
    let scrollAmount = 0;
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



// //buttons 2
// var button2 = document.getElementById('butt_for2');
// button2.onclick = function () {
//     var container2 = document.getElementById('container2');
//     sideScroll(container2,'right',50,600,30);
// };

// var back2 = document.getElementById('butt_back2');
// back2.onclick = function () {
//     var container2 = document.getElementById('container2');
//     sideScroll(container2,'left',50,600,30);
// };

// function sideScroll2(element,direction,speed,distance,step){
//     scrollAmount = 0;
//     var slideTimer = setInterval(function(){
//         if(direction == 'left'){
//             element.scrollLeft -= step;
//         } else {
//             element.scrollLeft += step;
//         }
//         scrollAmount += step;
//         if(scrollAmount >= distance){
//             window.clearInterval(slideTimer);
//         }
//     }, speed);
// }
