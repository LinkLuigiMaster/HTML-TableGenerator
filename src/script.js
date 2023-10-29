document.getElementById("button").addEventListener("click", function() {
    let htmlTableString = "";
    for (let i = 1; i <= document.getElementById("zeile").value; i++) {
        htmlTableString += "<tr>\n";
        for (let j = 1; j <= document.getElementById("spalte").value; j++) {
            htmlTableString += "<td>" + i + ", " + j + "</td>";
        }
        htmlTableString += "\n</tr>";
    }
    document.getElementById("table").innerHTML = htmlTableString; // 7 Zeilen Code für den Tabellen Generator

    let tabelRows = document.getElementById("table").getElementsByTagName("tr");
    for (let l = 0; l < tabelRows.length; l++) {
        let tableCells = tabelRows[l].getElementsByTagName("td");
        for (let k = 0; k < tableCells.length; k++) {
            tableCells[k].addEventListener("click", tabelEditor);
        }
    }
});

function tabelEditor(event) {
    let zelleTarget = event.target;
    let aktuellerInhalt = zelleTarget.innerHTML;
    let neuerInhalt = prompt("Editor Eingabe:", aktuellerInhalt);

    if (neuerInhalt !== null) {
        zelleTarget.innerHTML = neuerInhalt;
    }
};
