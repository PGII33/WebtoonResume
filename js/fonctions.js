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
        let genre = webtoon.genre.replace(/\//g, '');
        let title_ = webtoon.title.replace(/ /g, '_');
        let status_ = webtoon.status.replace(/ /g, '_');
        title_ = webtoon.title.replace(/'/g, '_');

        html += `
        <div class="webtoon">
            <div class="toggle-text ${genre} ${status_}" onclick="toggleVisibility('${title_}')">
                <strong>${webtoon.title}</strong>
            </div>
            
            <div class="webtoon-info">
                <p class="hidden-text" id="${title_}">
                    <strong> Titre </strong> : ${webtoon.title} <br\> <br\>
                    <strong> Genre </strong> : ${webtoon.genre} <br\> <br\>
                    <strong> Statut </strong> : ${webtoon.status} <br\> <br\>
                    <strong> Nombre de Chapitres </strong> : ${webtoon.chapters} <br\> <br\>
                    <strong> Taille d'un chapitre </strong> : ${webtoon.chapterSize} <br\> <br\>
                    <strong> Description Courte </strong> : ${webtoon.description}<br\><br\>
                    <strong> Avis </strong> :  <br\> <br\>`;

        // Ajouter des avis par pseudos
        for (const comment of webtoon.Review) {
            for (const [pseudo, content] of Object.entries(comment)) {
                html += `<span class="reviews"><strong>${pseudo}</strong>: ${content}</span> <br\>`;
            }
        }

        html += `<br\><br\>
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
    fermerToutesLesBannieres();
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

function filtrerParStatus(){
    fermerToutesLesBannieres();
    const statusSelectionne = document.getElementById('statusFilter').value;
    const elementsWebtoon = document.getElementsByClassName('toggle-text');

    for (const element of elementsWebtoon) {
        if (statusSelectionne === 'Tous' || element.classList.contains(statusSelectionne)) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    }
}

function fermerToutesLesBannieres() {
    const elementsWebtoon = document.getElementsByClassName('hidden-text');

    for (const element of elementsWebtoon){
        element.style.display = 'none';
    }
}
