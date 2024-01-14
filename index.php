<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Webtoon Resume - Action</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Rubik+Doodle+Shadow">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <a id="title" href="index.html">Webtoon Resume</a>
    <div>
        <label class="filtres" for="genreFilter">Filtrer par genre:</label>
        <select id="genreFilter" onchange="filtrerParGenre()">
            <option value="tous">Tous</option>
            <option value="action">Action</option>
            <option value="fantastique">Fantastique</option>
            <option value="SoL">Slice Of Life</option>
            <option value="comedie">Comédie</option>
            <option value="sport">Sport</option>
            <option value="drame">Drame</option>
            <option value="romance">Romance</option>
            <option value="horreur">Horreur</option>
            <option value="thriller">Thriller</option>
        </select>
      </div>   

<div class="toggle-text thriller" onclick="toggleVisibility('Batard')">
    Batard
</div>
<p class="hidden-text" id="Batard"></p>

<div class="toggle-text comedie" onclick="toggleVisibility('Capitaine_Zorgue')">
    Capitaine Zorgue
</div>
<p class="hidden-text" id="Capitaine_Zorgue"></p>

<div class="toggle-text action fantastique" onclick="toggleVisibility('L_Expert_De_La_Tour_Tutoriel')">
    L'Expert De La Tour Tutoriel
</div>
<p class="hidden-text" id="L_Expert_De_La_Tour_Tutoriel"></p>

<div class="toggle-text action fantastique comedie" onclick="toggleVisibility('Prodige_Hors_Norme')">
    Prodige Hors Norme
</div>
<p class="hidden-text" id="Prodige_Hors_Norme"></p>

<div class="toggle-text romance fantastique drame" onclick="toggleVisibility('La_Mariee_Du_Roi_Dragon')">
    La Mariée Du Roi Dragon
</div>
<p class="hidden-text" id="La_Mariee_Du_Roi_Dragon"></p>

<div class="toggle-text romance comique" onclick="toggleVisibility('Like_Wind_On_A_Dry_Branch')">
    Like Wind On A Dry Branch
</div>
<p class="hidden-text" id="Like_Wind_On_A_Dry_Branch"></p>

<div class="toggle-text romance fantastique" onclick="toggleVisibility('For_My_Derelict_Favorite')">
    For My Derelict Favorite
</div>
<p class="hidden-text" id="For_My_Derelict_Favorite"></p>

<div class="toggle-text action fantastique" onclick="toggleVisibility('Lecteur_Omniscient')">
    Lecteur Omniscient
</div>
<p class="hidden-text" id="Lecteur_Omniscient"></p> 

<div class="toggle-text action SoL" onclick="toggleVisibility('Hero_Ticket')">
    Hero Ticket
</div>
<p class="hidden-text" id="Hero_Ticket"></p>

<div class="toggle-text action SoL comedie" onclick="toggleVisibility('Je_Ne_Suis_Pas_Celui_Que_Vous_Croyez')">
    Je Ne Suis Pas Celui Que Vous Croyez
</div>
<p class="hidden-text" id="Je_Ne_Suis_Pas_Celui_Que_Vous_Croyez"></p>

<div class="toggle-text action fantastique SoL "toggle-text onclick="toggleVisibility('The_Lazy_Lord_Masters_The_Sword')"> 
    The Lazy Lord Masters The Sword
</div>
<p class="hidden-text" id="The_Lazy_Lord_Masters_The_Sword"></p>

<div class="toggle-text action"toggle-text onclick="toggleVisibility('Return_Of_The_Mad_Demon')"> 
    Return Of The Mad Demon
</div>
<p class="hidden-text" id="Return_Of_The_Mad_Demon"></p>

<div class="toggle-text action"toggle-text onclick="toggleVisibility('Auto_Hunting_With_My_Clones')"> 
    Auto Hunting With My Clones
</div>
<p class="hidden-text" id="Auto_Hunting_With_My_Clones"></p>

<div class="toggle-text action"toggle-text onclick="toggleVisibility('Solo_Auto-Hunting')"> 
    Solo Auto-Hunting
</div>
<p class="hidden-text" id="Solo_Auto-Hunting"></p>

<div class="toggle-text action"toggle-text onclick="toggleVisibility('The_World_After_the_Fall')"> 
    The World After the Fall 
</div>
<p class="hidden-text" id="The_World_After_the_Fall"></p>

<div class="toggle-text action" onclick="toggleVisibility('Villain_To_Kill')">
    Villain To Kill
</div>
<p class="hidden-text" id="Villain_To_Kill"></p>

<script src="script.js"></script>
<script src="text_convert.js"></script>
</body>
</html>
