document.addEventListener("keydown", function (e) {
        switch (e.code) {
            case ("KeyA") : new Audio("resources/A.mp3").play();
                break;
            case ("KeyW") : new Audio("resources/W.mp3").play();
                break;
            case ("KeyS") : new Audio("resources/S.mp3").play();
                break;
            case ("KeyE") : new Audio("resources/E.mp3").play();
                break;
            case ("KeyD") : new Audio("resources/D.mp3").play();
                break;
            case ("KeyF") : new Audio("resources/F.mp3").play();
                break;
            case ("KeyT") : new Audio("resources/T.mp3").play();
                break;
            case ("KeyG") : new Audio("resources/G.mp3").play();
                break;
            case ("KeyY") : new Audio("resources/Y.mp3").play();
                break;
            case ("KeyH") : new Audio("resources/H.mp3").play();
                break;
            case ("KeyU") : new Audio("resources/U.mp3").play();
                break;
            case ("KeyJ") : new Audio("resources/J.mp3").play();
                break;
            default : console.log("Wrong key pressed.")
    }
});