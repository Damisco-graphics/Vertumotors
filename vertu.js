
function scrolll() {
    var left= document.querySelector("#products")
    left.scrollBy(450,0)
}

function scrollr(){
    var right=document.querySelector("#products")
    right.scrollBy(-450,0)
    }


function runme(){
const mobile=document.querySelector('.mobile');
const services=document.querySelector('.services');
const headr=document.querySelector('header')
const explore=document.querySelector('#explore')
const servicesbutton = services.children
return (
    headr.style.margin='0% 0%',
    mobile.style.left='0',
    services.style.marginTop='30px',
    services.style.position='relative',
    services.style.marginLeft='-12%',
    services.style.fontSize='small',
    services.style.display='block',
    services.style.backgroundColor='blue',
    services.classList.toggle('hide'),
    explore.style.marginTop='-100px',
    servicesbutton.style.backgroundColor='red'
    
)
}

