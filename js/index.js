const slides = document.getElementsByClassName('image-slide');

for (let i = 0; i < slides.length; i++) {
    slides[i].index = -1;
    carousel(slides[i]);
}

function carousel(slide) {
    let images = slide.children;
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
    }

    slide.index = (++slide.index) % images.length;
    images[slide.index].style.display = "block";

    setTimeout(() => carousel(slide), 1000);
}
