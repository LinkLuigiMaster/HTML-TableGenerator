let table = document.getElementById("table");

document.getElementById("buttonCreateTable").addEventListener("click", function() {
    let htmlTableString = "";
    for (let i = 1; i <= document.getElementById("zeile").value; i++) {
        htmlTableString += "<tr>\n";
        for (let j = 1; j <= document.getElementById("spalte").value; j++) {
            htmlTableString += "<td>" + i + ", " + j + "</td>";
        }
        htmlTableString += "\n</tr>";
    }
    table.innerHTML = htmlTableString; // 7 Zeilen Code für den Tabellen Generator

    let tabelRows = table.getElementsByTagName("tr");
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

document.getElementById("buttonDownload").addEventListener("click", function() {
    var tableTitle = document.getElementById("tabletitle").value;
    var fileName = document.getElementById("filename").value;
    exportTableToCSV(table, fileName, tableTitle);
});

function exportTableToCSV(table, filename, tableName) {
    var csv = [];
    
    // Füge den Tabellennamen als Header hinzu
    csv.push(["Table Name: " + tableName]);

    var rows = table.querySelectorAll('tbody tr');

    for (var i = 0; i < rows.length; i++) {
        var row = [], cols = rows[i].querySelectorAll('td, th');

        for (var j = 0; j < cols.length; j++)
            row.push(cols[j].innerText);

        csv.push(row);
    }

    var csvContent = "data:text/csv;charset=utf-8," + csv.map(row => row.join(',')).join('\n');
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
}


document.getElementById("buttonPrint").addEventListener("click", function() {
    printTable(table);
});

function printTable(table) {
    var printWindow = window.open('', '_blank');
    printWindow.document.write('<html><head><title>Print Table</title></head><body>');
    printWindow.document.write('<style>table {border-collapse: collapse; width: 100%;}th, td {border: 1px solid #dddddd; text-align: left; padding: 8px;}</style>');
    printWindow.document.write('<h2>' + document.getElementById("tabletitle").value + '</h2>');
    printWindow.document.write(table.outerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}

document.getElementById("buttonDayNight").addEventListener("click", function(){
    let bodyElement = document.getElementById("body");
    let currentBackgroundColor = window.getComputedStyle(bodyElement).backgroundColor;

    if (currentBackgroundColor === "rgb(255, 255, 255)" || currentBackgroundColor === "white") {
        // Wenn die Hintergrundfarbe weiß ist, ändere sie zu schwarz
        bodyElement.style.backgroundColor = "black";
    } else {
        // Wenn die Hintergrundfarbe schwarz ist, ändere sie zu weiß
        bodyElement.style.backgroundColor = "white";
    }

    // Optional: Aktualisiere die Variable nach der Änderung
    currentBackgroundColor = window.getComputedStyle(bodyElement).backgroundColor;

    console.log("Neue Hintergrundfarbe:", currentBackgroundColor);
});


