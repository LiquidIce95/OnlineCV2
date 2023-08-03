// objects
document.body.style.backgroundColor = '#002B57';
document.body.style.margin = '0';
document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';
document.body.style.height = '200vh';
document.body.style.width = '100vw';

// Create the dummy text
const title = document.createElement('div');
let title_fontsize = 10;
let title_bottom = 80;
title.innerHTML = 'Curriculum Vitae'; 
title.style.display = 'block'; 
title.style.color = 'white';
title.style.fontSize = `${title_fontsize}vh`;
title.style.fontFamily = 'Calibri'; 
title.style.position = 'absolute';
title.style.bottom = `${title_bottom}vh`;

// Create the dropdown me`u icon
const icon = document.createElement('div');
icon.style.opacity = '0';
icon.style.width = '8vh';
icon.style.height = '8vh';
icon.style.borderRadius = '50%'; 
icon.style.backgroundColor = 'red'; 
icon.style.position = 'absolute';
icon.innerHTML = '&#9776;'; 
icon.style.color = 'white'; 
icon.style.fontSize = '7vh';
icon.style.textAlign = 'center';
icon.style.lineHeight = '8vh';
icon.style.transition = 'opacity 0.5s, transform 0.5s'; 

// Create the rectangle
const rectangle = document.createElement('div');
rectangle.style.backgroundColor = 'white';
rectangle.style.width = '20vw';
rectangle.style.height = '10vh';
rectangle.style.display = 'none';
rectangle.style.position = 'absolute';
rectangle.style.zIndex = '2';

// boolean variables
let inSquare = false;
let titleon = false;
let inIcon = false;

function sizer(){

    icon.style.left = `25vw`; 
    icon.style.bottom = `${title_bottom+1}vh`;

    // Set rectangle position relative to title
    rectangle.style.left = `30vw`;
    rectangle.style.bottom = `${title_bottom-title_fontsize-90}vh`;
}


// Eventlisteners
window.addEventListener('load', function() {
    sizer();
});

icon.addEventListener('click', function() {
    if(!inSquare){
        rectangle.style.display = 'block'; 
        inSquare = true;
        icon.style.transform = 'rotate(90deg)'; 
    } else {
        rectangle.style.display = 'none';
        inSquare = false;
        icon.style.transform = 'rotate(0deg)'; 
    }
});

title.addEventListener('mouseover', function() {
    title.style.color = 'grey';
    icon.style.opacity = '1';
    titleon = true;
    
});

window.addEventListener('resize',function(){
    sizer();
})

icon.addEventListener('mouseover',function(){
    inIcon = true;
});

icon.addEventListener('mouseout',function(){
    inIcon = false;
    setTimeout(function() {
        if(!inSquare && !titleon && !inIcon){
             icon.style.opacity = '0';
        }
    }, 2000);
});

title.addEventListener('mouseout', function() {
    title.style.color = 'white';
    titleon = false;
    setTimeout(function() {
        if(!inSquare && !titleon && !inIcon){
             icon.style.opacity = '0';
        }
    }, 2000);
});



// Append the elements
document.body.appendChild(title);
document.body.appendChild(icon);
document.body.appendChild(rectangle);