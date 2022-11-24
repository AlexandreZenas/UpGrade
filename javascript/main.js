/* animação hidden > visible*/
var elementInvisible = [
    {
        'navInvisible':document.querySelector('nav'),
        'h1Invisible':document.querySelectorAll('div.containerHome h1')[0],
        'h2Invisible':document.querySelectorAll('div.containerHome h2')[0]
    }
];
function removeInvisible(){
    elementInvisible[0].navInvisible.classList.remove('hidden');
    elementInvisible[0].h1Invisible.classList.remove('h1Invisible');
    elementInvisible[0].h2Invisible.classList.remove('h2Invisible');
};
setTimeout(removeInvisible, 700)

/* background video loop*/
var videoBackground = document.querySelectorAll('.intro')[0];
function animationVideo(){
    videoBackground.classList.add('intro-remove');
};
setTimeout(animationVideo, 6580)

var videoBackgroundLoop = document.querySelectorAll('.intro-loop')[0];
function animationVideoLoop(){
    videoBackgroundLoop.classList.remove('introLoopHidden');
};
setTimeout(animationVideoLoop, 6580)