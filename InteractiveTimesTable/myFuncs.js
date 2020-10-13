function makeGrid(){
    let myTable = "<table class='timesTable'>";
    myTable = myTable + "<tr><th>X</th>";
    // header
    for (let x = 1; x <= 10; x++) {
       myTable = myTable + "<th>" + x + "</th>";
    }
    myTable = myTable + "</tr>";
    //insides
    for (j = 1;j <= 10; j++) {
        myTable = myTable + "<tr>"; // Start each new row
        myTable = myTable + "<th>" + j + "</th>"; // Write the row index
        for (x=1;x<=10;x++) {
           myTable = myTable + "<td onmouseenter='addCSS(this)' onmouseleave='removeCSS(this)'>" + (x*j) + "</td>";
        }
        myTable = myTable + "</tr>"; // Write the row ending tag
     }
     myTable = myTable + "</table>"; // The table closing tag
     //set innerHTML of table div
     document.getElementById('grid').innerHTML = myTable;
}

    function addCSS() {
        this.style = "border: 2px solid red; font-weight: bold";
    }
    function removeCSS(){
        this.style = null;
    }

 function changeBackground(){
     document.body.style.backgroundColor = "FF00FF00"
 }
