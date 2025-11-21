fetch("pie.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("pie").innerHTML = data;
    });