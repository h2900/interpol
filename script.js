function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

document.addEventListener("wheel", function (event) {
    event.preventDefault();
    let scrollSpeed = 100;
    let delta = event.deltaY > 0 ? scrollSpeed : -scrollSpeed;
    window.scrollBy({ top: delta, behavior: "smooth" });
}, { passive: false });
