//Movement animation to happer
const card = document.querySelector('.card');
const container = document.querySelector('.container');
const title = document.querySelector('.title');
const info = document.querySelector('.info p');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const sizes = document.querySelector('.sizes');

//Moving animation effect
container.addEventListener('mousemove', (f) => {
    let xAxis = (window.innerWidth / 2 - f.pageX)/20;
    let yAxis = (window.innerHeight / 2 - f.pageY)/20;

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})

//Animate IN
container.addEventListener('mouseenter', (e) =>{
    card.style.transition = `none`;
    sneaker.style.transform = 'translateZ(200px) rotateZ(-35deg)';
    title.style.transform = 'translateZ(150px)';
    info.style.transform = 'translateZ(120px)';
    sizes.style.transform = 'translateZ(100px)';
    purchase.style.transform = 'translateZ(75px)';
})

// Animate out
container.addEventListener('mouseleave', (e) => {
    card.style.transition = `all 0.5s ease`;
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    sneaker.style.transform = 'translateZ(0px) rotateZ(0deg)';
    title.style.transform = 'translateZ(0px)';
    info.style.transform = 'translateZ(0px)';
    sizes.style.transform = 'translateZ(0px)';
    purchase.style.transform = 'translateZ(0px)';
})