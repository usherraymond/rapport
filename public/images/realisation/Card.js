let Next = document.querySelector('.next');
let Prev = document.querySelector('.prev');


Next.addEventListener('click', function() {
    const Image = document.querySelectorAll('.image');
    document.querySelector('.container').appendChild(Image[0]);
})

Prev.addEventListener('click', function() {
    const Image = document.querySelectorAll('.image');
    document.querySelector('.container').prepend(Image[Image.length -1]);
})