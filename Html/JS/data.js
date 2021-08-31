// Fetching API with priomises

fetch("https://disease.sh/v3/covid-19/jhucsse")
    .then((apidata) => {
        return apidata.json();
    })
    .then((actualdata) => {
        let co = document.createElement("p")
        co.innerHTML = actualdata[249].country
        document.getElementById("mode_2").appendChild(co)
    })