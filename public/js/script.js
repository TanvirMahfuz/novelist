const bar=document.getElementById('bar');
const close=document.getElementById('close');
//is a JavaScript DOM (Document Object Model) manipulation method used to select an HTML element by its id and store it in a variable.
const nav =document.getElementById('navbar');
//.getElementById('navbar'): This is a method that retrieves the HTML element with the specific id of 'navbar'. The id is a unique identifier used in HTML to reference a specific element.
if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}

