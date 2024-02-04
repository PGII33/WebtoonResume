// CECI EST LE FICHIER DES FONCTIONS

// Cette fonction permet de cacher le texte ou de le faire apparaître
function toggleVisibility(id) {
    var hiddenText = document.getElementById(id);

    if (hiddenText && (hiddenText.style.display === "none" || hiddenText.style.display === "")) {
        hiddenText.style.display = "block";
    } else if (hiddenText) {
        hiddenText.style.display = "none";
    }
}



// Cette fonction permet de séparer du texte brut en catégories et en texte
function genererResume(webtoons) {
    let html = '<div class="webtoon-container">'; // Ajout d'un conteneur pour les webtoons

    for (const webtoon of webtoons) {
        
        let genre = webtoon.genre.replace(/\//g, '')
        let title_ = webtoon.title.replace(/ /g, '_')
        html += `
        <div class="webtoon">
            <div class="toggle-text ${genre}" onclick="toggleVisibility('${title_}')">
                <strong>${webtoon.title}</strong>
            </div>
            
            <div class="webtoon-info">
                <p class="hidden-text" id="${title_}">
                    <strong> Titre </strong> : ${webtoon.title} <br\> <br\>
                    <strong> Genre </strong> : ${webtoon.genre} <br\> <br\>
                    <strong> Statut </strong> : ${webtoon.status} <br\> <br\>
                    <strong> Nombre de Chapitres </strong> : ${webtoon.chapters} <br\> <br\>
                    <strong> Taille d'un chapitre </strong> : ${webtoon.chapterSize} <br\> <br\>
                    <strong> Description Courte </strong> : ${webtoon.description} <br\> <br\>
                    <strong> Avis Personnel </strong> : ${webtoon.personalReview} <br\> <br\>
                    <strong> Lien </strong>: <a href="${webtoon.link}" target="_blank">lien vers le webtoon </a> <br\> <br\>
                    <strong> Dernière date d'édition </strong>: ${webtoon.lastEditDate} <br\> <br\>
                </p>
            </div>
        </div>`;
    }

    html += '</div>'; // Fermeture du conteneur

    return html;
}

// Cette fonction permet le filtrage par genre
function filtrerParGenre() {
    const genreSelectionne = document.getElementById('genreFilter').value;
    const elementsWebtoon = document.getElementsByClassName('toggle-text');

    for (const element of elementsWebtoon) {
        if (genreSelectionne === 'Tous' || element.classList.contains(genreSelectionne)) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    }
}
