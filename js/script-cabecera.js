fetch("cabecera.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("header").innerHTML = data;
    });
