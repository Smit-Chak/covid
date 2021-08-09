function n_mode() {

    if (document.getElementById("mode").click) {

        let sheet = "./stylesheets/darkstyle.css";
        document.getElementById("pagestyle").setAttribute("href", sheet);
        console.log("Test");
        /* Background color + Text Color 
        document.getElementById("mode").style.background = "#1F1B24";
        document.getElementById("mode_3").style.background = "#1F1B24";
        document.getElementById("mode_3").style.color = "white";
        document.getElementById("mode_2").style.background = "#121212";
        document.getElementById("mode_2").style.color = "white";
        */
        /* Hover Color */
    }
}

function d_mode() {
    if (document.getElementById("mode").click) {
        let sheet = "./stylesheets/styles.css";
        document.getElementById("pagestyle").setAttribute("href", sheet);
        console.log("Test");
    }
}