var buttonss = document.getElementById("toggle-skills");
var skillsss = document.getElementById("skills");
buttonss.addEventListener("click", function () {
    if (skillsss.style.display === "none") {
        skillsss.style.display = "block";
    }
    else {
        skillsss.style.display = "none";
    }
});
