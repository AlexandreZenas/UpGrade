var navAnimation = document.querySelector('nav');
function navFunction(){
    navAnimation.classList.remove('hidden');
};
setTimeout(navFunction, 1080)


//seletor de cores aleatórias
var logo = document.querySelectorAll('.navLogo')[0];
var h1ContainerHome = document.querySelectorAll('.containerHome h1')[0];

logo.addEventListener('click',()=>{
    const [red, green, blue] = [
        Math.floor(Math.random() * 255),
        Math.floor(Math.random() * 255),
        Math.floor(Math.random() * 255)        
    ]
    h1ContainerHome.style.color =`rgb(${red},${green},${blue})`;
})
// adicionado pelo desktop