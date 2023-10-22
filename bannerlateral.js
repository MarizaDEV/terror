let time1 = 5000,
    currentImageIndex = 0,
    images = document
                .querySelectorAll("#bannerlateral img")
    max = images.length;

function nextImage1() {

    images[currentImageIndex]
        .classList.remove("selected")

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("selected")
}

function start() {
    setInterval(() => {
        // troca de image
        nextImage1()
    }, time1)
}

window.addEventListener("load", start)