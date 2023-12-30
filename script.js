
// Cette fonction permet de cacher le texte ou de le faire apparaitre
function toggleVisibility(id) {
    var hiddenText = document.getElementById(id);

    if (window.getComputedStyle(hiddenText).display === "none") {
        hiddenText.style.display = "block";
    } else {
        hiddenText.style.display = "none";
    }
}