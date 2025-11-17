const demo = document.querySelector('#demo')

let isImageDisplayed = false

demo.addEventListener('mouseover', (event) => {  
    if (!isImageDisplayed && event.target === demo) {
        const img = document.createElement("img");
        img.src = "./img/kep.jpg";
        img.alt = "kép";
        demo.replaceChildren(img);
        isImageDisplayed = true;
    }
} )

demo.addEventListener('mouseout', (event) => {
    if (isImageDisplayed) { 
        const p = document.createElement('p');
        p.textContent = "Hanyasra értékelek";
        demo.replaceChildren(p);
        isImageDisplayed = false;
    }
})