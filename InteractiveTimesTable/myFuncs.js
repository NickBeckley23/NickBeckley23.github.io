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
           myTable = myTable + "<td  onclick='setCSS.call(this)' onmouseenter='addCSS()'>" + (x*j) + "</td>";
        }
        myTable = myTable + "</tr>"; // Write the row ending tag
     }
     myTable = myTable + "</table>"; // The table closing tag
     //set innerHTML of table div
     document.getElementById('grid').innerHTML = myTable;
}

    function addCSS() {
        changeBackground();
    }

    let lastElement;
    function setCSS(){
            if(lastElement == undefined){
                this.style = "border: 2px solid red; font-weight: bold;"
                lastElement = this;
            }
                lastElement.style = null;
                this.style = "border: 2px solid red; font-weight: bold;"
                lastElement = this;  
        }

 function changeBackground(){
    var x = Math.floor(Math.random() * 256);//fp number between 1&0, multiplied by possible color values 0-255 and rounded down
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    document.body.style.background = bgColor;
}
