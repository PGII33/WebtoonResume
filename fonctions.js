// CECI EST LE FICHIER DES FONCTIONS


// Cette fonction permet de cacher le texte ou de le faire apparaitre
function toggleVisibility(id) {
    var hiddenText = document.getElementById(id);

    if (window.getComputedStyle(hiddenText).display === "none") {
        hiddenText.style.display = "block";
    } else {
        hiddenText.style.display = "none";
    }
}

// Cette fonction permet de séparer du texte brut en catégories et en texte
function genererResume(texteBrut) {
    const lignes = texteBrut.split('\n');
    let resume = '<p>';

    for (const ligne of lignes) {
        // Détecter la catégorie et le texte associé
        const match = ligne.match(/(.*?):(.*)/);
        const is_link = ligne.match(/https/);
        if (is_link) {
            const categorie = match[1].trim();
            const texte = match[2].trim();
            resume += `<strong>${categorie} </strong>: <a href="${texte}">${texte}</a><br><br>`;
        } else
        if (match) {
            const categorie = match[1].trim();
            const texte = match[2].trim();
            resume += `<strong>${categorie} </strong>: ${texte}<br><br>`;
        }
    }
    
    resume += '</p>';

    return resume;
}

// Cette fonction permet le filtrage par genre
function filtrerParGenre() {
    const genreSelectionne = document.getElementById('genreFilter').value;
    const elementsWebtoon = document.getElementsByClassName('toggle-text');

    for (const element of elementsWebtoon) {
        if (genreSelectionne === 'tous' || element.classList.contains(genreSelectionne)) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    }
}