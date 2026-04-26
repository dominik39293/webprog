const api = "https://nodejs111.dszcbaross.edu.hu/api/movie";

window.addEventListener("DOMContentLoaded", load);

async function load() {
    const gallery = document.querySelector("#gallery");
    const sidebarList = document.querySelector("#movie-list");
    
    gallery.innerHTML = '<p class="loading">Képek betöltése...</p>';
    sidebarList.innerHTML = "";

    try {
        const resp = await fetch(api);
        const data = await resp.json();

        gallery.innerHTML = "";
        render(data, gallery, sidebarList);
    } catch (e) {
        console.error(e);
        gallery.innerHTML = "<p>Nem sikerült betölteni a képeket!</p>";
    }
}

function render(data, gallery, sidebar) {
    if (!data) return;

    data.forEach(movie => {
        const card = document.createElement("div");
        card.classList.add("card");
        
        const img = document.createElement("img");
        img.src = movie.image;
        img.alt = movie.title;
        img.loading = "lazy";
        img.id = movie.title.split(" ")[0];

        const info = document.createElement("div");
        info.classList.add("card-info");
        info.innerHTML = `
            <h3>${movie.title}</h3>
            <div class="tags">
                <span class="tag-genre">${movie.genre}</span>
                <span class="tag-age">${movie.age_rating}+</span>
            </div>
        `;

        card.append(img, info);
        gallery.append(card);

        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = `#${movie.title.split(" ")[0]}`;
        a.textContent = movie.title;
        li.appendChild(a);
        sidebar.appendChild(li);
    });
}