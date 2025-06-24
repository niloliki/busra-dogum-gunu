function nextScene(sceneNumber) {
    for (let i = 1; i <= 4; i++) {
        document.getElementById("scene" + i).style.display = "none";
    }
    document.getElementById("scene" + sceneNumber).style.display = "block";
}

