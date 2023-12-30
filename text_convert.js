
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

// Déclaration des variables
let texteBrut = ""; // Le texte brut à convertir
let resumeWebtoon = ""; // La version html de ce texte

// Solo Auto-Hunting
texteBrut = `
Titre : Solo Auto-Hunting
Genre : Action
Statut : Terminé
Nombre de chapitres : 92
Taille d'un chapitre : Moyen
Description : Oh Yuseong travaille dans une supérette et vient de se faire larguer par sa copine qui ne le trouve pas assez ambitieux. Alors qu’il touche le fond, une fissure devant lui libère un monstre qui s'en prend à lui. Aux portes de la mort, le mystérieux pouvoir de la "chasse en mode automatique" s’éveille en lui. Maintenant il n’a plus qu’à le maîtriser pour devenir le meilleur des chasseurs !
Avis Personnel : Pas encore écris
Avis de Vin's : Alors clairement (si je puis me permettre) la fin est juste ... Nulle
Je le lisais quand il sortait et au bon d'un moment il arrive un arc qui vient casser le rythme du webtoons, en diminuant énormément les combats, leur intérêt et autres, et qui se concentre sur des manœuvres presque politique mais vraiment mal faites, et des explications pas convaincante, quand à la fin... La série s'est arrêtée d'un coup, la fin n'en est pas une.... Bref très bon début et une fin très décevante
Lien : https://www.webtoons.com/fr/action/solo-auto-hunting/list?title_no=3488
Dernière date d'édition : 13/11/23
`;
resumeWebtoon = genererResume(texteBrut);
document.getElementById('Solo_Auto-Hunting').innerHTML = resumeWebtoon;

// The World After The Fall
texteBrut = `
Titre : The World After The Fall
Genre : Action
Statut : En cours
Nombre de chapitres : 85 chap
Taille d'un chapitre : Moyen / Long
Description : Lorsque l’apocalypse a éclaté, Jaehwan a été convoqué par la « Tour des cauchemars »...
Avis Personnel : Pas un simple système de tour le plus basique, on voit vraiment la façon de penser du personnage qui évolue...
Lien : https://www.webtoons.com/fr/action/the-world-after-the-fall/list?title_no=4193
Dernière date d'édition : 9/11/23
`;
resumeWebtoon = genererResume(texteBrut);
document.getElementById('The_World_After_the_Fall').innerHTML = resumeWebtoon;

// Hero Ticket
texteBrut = `
Titre : Hero Ticket
Genre : Action / Slice of Life
Statut : En cours
Nombre de chapitres : 189
Taille d'un chapitre : Je sais plus (si quelqu'un regarde il répond à mon commentaire et j'édite le post)
Description : L'obstination à mourir de Kyeong-Ho séduit Sierra, une faucheuse des enfers, qui lui propose un pacte. Ce pacte lui donne la possibilité d'emprunter les pouvoirs des morts en échange d'années de vie. Afin d'obtenir ce qu'il désire, il finit par l'accepter.
Avis Personnel : De la romance est présente, pas dérangeante pour autant, l'histoire oscille entre les intérêts du personnage et ce qui ce passe dans son entourage, le personnage principal est à la fois réfléchis et plutôt tête brulé, il comprend au fil du temps de nouvelle façon d'utiliser son pouvoir, ici l'originalité viens aussi du fait qu'on oublie au fil de l'histoire le temps de vie qu'il le lui reste à cause de cette échange justement.
Lien : https://www.webtoons.com/fr/action/heroticket/list?title_no=2178
Dernière date d'édition :  9/11/23
`;
resumeWebtoon = genererResume(texteBrut);
document.getElementById('Hero_Ticket').innerHTML = resumeWebtoon;

// Je ne suis pas celui que vous croyez
texteBrut = `
Titre : Je ne suis pas celui que vous croyez
Genre : Action / Slice of Life / Comedie
Statut : En cours
Nombre de chapitres : 36
Taille d'un chapitre : Moyen
Description : Demon Arut est le capitaine de la Légion zéro, l'un des treize ordres au service du roi des démons. Bien qu'il soit humain, son seul nom suffit à faire trembler d'effroi ceux qui l'entendent, car il est cruel et impitoyable. Enfin ça, c'est la version officielle. En réalité, il s'appelle Deon Hart, manque de s'évanouir à la moindre anxiété et s'est retrouvé à la tête de la Légion zéro sur un malentendu. Il n'aspire donc qu'à une chose : s'enfuir du royaume des démons avant que le pot aux roses ne soit découvert. Une tâche cependant bien ardue lorsque l'on est le prodige adoré du souverain démoniaque...
Avis Personnel : Une histoire qui me plaît, on a les 2 côtés, que ce soit le côté humain ou démon, tous se méprennent sur son sujet, lui ne comprends pas comment il en est arrivé là et ce retrouve toujours dans des situations complexes. La vengeance envers son Frère est un points des plus important de l'histoire, il fait avancer et ce surmener le personnage principal. Malgré la présence de démon et d'humain, il ne s'agit pas d'une fantasy avec de la magie de partout et des techniques d'épées très développé à tout vas, il s'agit plutôt de montrer la faiblesse du personnage principal qui lui crache du sang pas la simple action de se tenir debout. En somme une histoire intéressante, alliant comédie, action et tranche de vie.
Lien : https://www.webtoons.com/fr/action/je-ne-suis-pas-celui-que-vous-croyez/list?title_no=5276
Dernière date d'édition : 9/11/23
`;
resumeWebtoon = genererResume(texteBrut);
document.getElementById('Je_Ne_Suis_Pas_Celui_Que_Vous_Croyez').innerHTML = resumeWebtoon;

// The Lazy Lord Masters the Sword
texteBrut = `
Titre : The Lazy Lord Masters the Sword
Genre : Action / Slice of Life / Fantastique
Statut : S1 terminée, en attante de la saison 2
Nombre de chapitres : 86
Taille d'un chapitre : Moyen / Long
Description : Après avoir assisté impuissant à la mort de sa mère, le jeune Airn Pareira profite du sommeil pour échapper à la dure réalité, ce qui lui vaut le surnom de « lord paresseux ». Pourtant, malgré ce que les autres disent de lui, Airn n'a pas l'intention de changer ses habitudes. Mais la vie de ce dernier va prendre un tout autre tournant lorsqu’un jour il se réveille d'un rêve sur un mystérieux épéiste.
Avis Personnel : Le Webtoon figurant à la seconde place dans la liste de mes préférés, il utilise des choses plutôt basique dans un univers classique, mais la façon dont le personnage progresse, se lie aux autres, les personnages secondaires qui sont bien écrits. La progression lente mais entièrement sous contrôle et qui donc donne de l'adrénaline quand on se rend compte de la puissance du personnage. Un très bon Webtoon qui ne rush pas la progression.
Lien : https://www.webtoons.com/fr/action/the-lazy-lord-masters-the-sword/list?title_no=3675
Dernière date d'édition : 9/11/23
`;
resumeWebtoon = genererResume(texteBrut);
document.getElementById('The_Lazy_Lord_Masters_The_Sword').innerHTML = resumeWebtoon;

// Return of the Mad Demon
texteBrut = `
Titre : Return of the Mad Demon
Genre : Action
Statut : En cours 
Nombre de chapitres : 74
Taille d'un chapitre : Moyen
Description : Lee Jaha, surnommé le démon fou par ses ennemis, est revenu dans le passé après qu'une seconde chance lui a été octroyée. Cette fois-ci, sa vie ne va pas être réduite à néant. Il fera tout ce qui sera en son pouvoir pour protéger les opprimés et écraser leurs bourreaux. Mais sera-t-il à la hauteur pour vaincre ses ennemis dans sa deuxième vie ?
Avis Personnel : Un Webtoon sur un univers de type Murim, mais le personnage principal est vraiment fou, il est parfois sains mais certaines fois s'adonne à des tueries. C'est à la fois la beauté du personnage et la chose traumatisante qui le caractérise, il s'en prend uniquement au personnes mauvaises comme les violeurs, vendeurs d'esclaves. C'est l'histoire sur le Murim la plus violente que je connais, il est à mon avis plutôt gore pour un Webtoon (même si sa va).
Lien : https://www.webtoons.com/fr/action/return-of-the-mad-demon/list?title_no=4456
Dernière date d'édition : 9/11/23
`;
resumeWebtoon = genererResume(texteBrut);
document.getElementById('Return_Of_The_Mad_Demon').innerHTML = resumeWebtoon;

// Auto Hunting With My Clones
texteBrut = `
Titre : Auto Hunting With My Clones
Genre : Action
Statut : En cours 
Nombre de chapitres : 53
Taille d'un chapitre : Moyen
Description : Travailler, étudier, manger… Tant de choses à faire et si peu de temps pour le reste ! Si seulement on pouvait se dédoubler, la vie serait tellement plus simple ! Le vœu de Sangwoo se réalise le jour de son "Éveil” : il a désormais le pouvoir de se démultiplier. Il décide d'exploiter sa nouvelle compétence pour devenir un chasseur : il sera le cerveau et ses clones, ses marionnettes.
Avis Personnel : Un Webtoon sur un univers de type monde avec des rank et de la magie. Notre personnage lui ce différencie par son pouvoir de clonage, lui possède des clones tangible ce qui lui permet de pouvoir travailler ses caractéristiques et compétences plus rapidement. Le webtoon n'est pas redondant par rapport à d'autres. Notre personnage évolue tranquillement à son rythme avec plusieurs passage que l'on peut reconnaître. Le webtoon n'en est encore qu'à 53 chapitres, j'attend une continuation et réussite de l'histoire en espérant que l'histoire ne devienne pas un cliché sur la fin.
Avis de Vin's : Un webtoon sympa, un peu cliché mais très drôle à lire, j'approuve
Lien : https://www.webtoons.com/fr/action/auto-hunting-with-my-clones/list?title_no=5031
Dernière date d'édition : 13/11/23
`;
resumeWebtoon = genererResume(texteBrut);
document.getElementById('Auto_Hunting_With_My_Clones').innerHTML = resumeWebtoon;

// Villian To Kill
texteBrut = `
Titre : Villain To Kill
Genre : Action
Statut : En Cours
Nombre de chapitres : 112
Taille d'un chapitre : Moyen
Description : Cassian est un héros légendaire, un « psyker » de première classe qui a perdu la vie, injustement accusé du meurtre de son collègue. À son réveil, il se retrouve dans le corps d’un jeune élève et découvre qu’il est devenu un de ces « vilains » qu’il chassait dans sa vie précédente...! Cassian devra désormais compter sur « Moros » une mystérieuse créature, pour combattre le désir destructif qui s’empare constamment de son corps de vilain, afin de pouvoir se venger de ceux qui l’ont trahi dans sa vie passée. « Puisque c'est comme ça, je deviendrai le plus puissant des vilains à ma manière ! »
Avis Personnel : Ici encore sur un monde avec des ranks, mais finalement assez différent, je propose d'en lire un peu pour comprendre. Mais notre héro n'est pas un gentil, mais pas un méchant. Sa situation ambigüe est sympa à lire et peu de webtoon lui ressemble. Je le recommande (il y a plus de chapitre en anglais).
Lien : https://www.webtoons.com/fr/action/villaintokill/list?title_no=3443
Dernière date d'édition : 14/11/23
`;
resumeWebtoon = genererResume(texteBrut);
document.getElementById('Villain_To_Kill').innerHTML = resumeWebtoon;

// Verification du fonctionnement
console.log(resumeWebtoon)