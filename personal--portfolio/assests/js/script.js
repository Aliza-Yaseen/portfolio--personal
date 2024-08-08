document.addEventListener('DOMContentLoaded', () => {
    const dynamicText = document.getElementById('dynamic-text');
    const texts = ["Aliza Yaseen", "Web Developer", "Seeking Oppurtunities"];
    let index = 0;

    setInterval(() => {
        dynamicText.textContent = texts[index];
        index = (index + 1) % texts.length;
    }, 2000); // Change text every 2 seconds
});