const fetchBtn = document.getElementById("fetch");
const tarolo = document.getElementById("tarolo");

fetchBtn.addEventListener("click", async () => {
    const resp = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    const data = await resp.json();
    tarolo.innerHTML = "";
    data.categories.forEach(d => {
        const card = document.createElement("div");
        card.classList.add("card");
        const img = document.createElement("img");
        img.src = d.strCategoryThumb;
        img.alt = d.strCategory;
        card.appendChild(img);
        const cardContent = document.createElement("div");
        cardContent.classList.add("cardContent");
        const h3 = document.createElement("div");
        h3.textContent = `Kategória: ${d.strCategory}`;
        h3.classList.add("name");
        cardContent.appendChild(h3);
        card.appendChild(cardContent)
        tarolo.appendChild(card);
    })
})