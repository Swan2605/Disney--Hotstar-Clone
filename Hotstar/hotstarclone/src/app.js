const carousel = document.querySelector('.carousel');
let sliders = [];

let sliderIndex =0;

const createSlide = () =>{
    slideIndex = 0;
    if (slideIndex >= movies.lengh) {
    }
    //creating DOM element
    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    //attaching all element
    imgElement.appendChild(document.createTextNode(''));

    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode((movies[slideIndex].des)));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slides);

    //setting up image
imgElement.src = movies[slideIndex].name;
slideIndex++;

//setting elements classname
slide.className = 'slide';
conetent.className = 'slide-conetent';
h1.className = 'movie-title';
p.className = 'movie-des';

sliders.push(slide);

// adding sliding effect 
if (sliders.length){
    sliders[0].style,marginleft= ` calc(-${100*(sliders.length - 2)} %-${30*(sliders.length-2)} px)`;
}
}

for(let i=0; i<3; i++)
{
    createSlide();
}

setInterval(()=>{
  /*createSlide();*/
  
} , 3000);

const videoCards= document.querySelectorAll
('video-card');

videoCards.forEach(item =>{
    item.addEventListener('mouseover',()=>{
        let video= item.children[1];
        video.play();
    })
    item.addEventListener('mouseleave',()=>{
        let video= item.children[1];
        video.pause();
    })
})


// Poster sliders

let cardContainers= document.querySelectorAll('.card-container');

let preBtns= document.querySelectorAll('.pre-btn');
let nxtBtns= document.querySelectorAll('.nxt-btn');

cardContainers.forEach((item, i)=>{
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth =containerDimension.width;

    nxtBtns[i].addEventListener('click',()=>{
        item.scrollleft += containerWidth - 200;

    })
    preBtns[i].addEventListener('click',()=>{
        item.scrollleft -= containerWidth + 200;
        
    })
})
