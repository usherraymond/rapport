let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function(){
    let images = document.querySelectorAll('.image')
    document.querySelector('.photo').appendChild(images[0])
})

prev.addEventListener('click', function(){
    let images = document.querySelectorAll('.image')
    document.querySelector('.photo').prepend(images[images.length -1])
})





function changeBG(){
    var selectedBGColor = document.getElementById("bgchoice").value;
    document.body.style.backgroundColor = selectedBGColor;
}





