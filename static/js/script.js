function scrollCarousel(direction) {
    let scrollContainer = document.querySelector(".rectangle-scroll");
    let scrollAmount = 300; // Adjust the scroll distance
    scrollContainer.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth"
    });
}
