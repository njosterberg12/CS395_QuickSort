function deleteMyTable(myTableId) {
  var element = document.getElementById(myTableId);
  if(element != null)
   element.parentNode.removeChild(element);
}


function createPseudocodeTable(myTableId) {
 deleteMyTable(myTableId);
 var myTable = document.createElement("TABLE");
 myTable.setAttribute("id", myTableId);
 myTable.style.whiteSpace = "pre";
 //myTable.setAttribute("border", "1px solid black");
 document.body.appendChild(myTable);
 
 var newRow = document.createElement("TR");
 newRow.setAttribute("id", "myTr");
 myTable.appendChild(newRow);

 var myCell = document.createElement("TD");
 myCell.style.fontWeight = 'bold';
 var t = document.createTextNode("Pseudocode");
 myCell.appendChild(t);
 newRow.appendChild(myCell); 
}

var lastInstruction = "";

function appendPseudocode(myTableId, newInstruction) {
 if(lastInstruction != newInstruction)
    sayIt(newInstruction);
 lastInstruction = newInstruction;
 var myTable = document.getElementById(myTableId); 
 
 var newRow = document.createElement("TR");
 newRow.setAttribute("id", "myTr");
 myTable.appendChild(newRow);

 var myCell = document.createElement("TD");

 var t = document.createTextNode("  " + newInstruction);  
 myCell.appendChild(t);
 newRow.appendChild(myCell);
}

function appendPseudocodeTable(myTableId, newInstruction, buttonText) {
 appendPseudocode(myTableId, newInstruction);
 showElement("ButtonShowMe", buttonText);
 hideElement("ButtonYes");
 hideElement("ButtonNo")
}

function appendPseudocodeInfo(myTableId, newInstruction, buttonText) {
 appendPseudocode(myTableId, newInstruction);
 hideElement("ButtonShowMe");
 hideElement("ButtonYes");
 hideElement("ButtonNo")
}

function appendPseudocodeQuestion(myTableId, newInstruction, buttonYesText, buttonNoText) {
 appendPseudocode(myTableId, newInstruction);
 hideElement("ButtonShowMe");
 showElement("ButtonYes", buttonYesText);
 showElement("ButtonNo", buttonNoText);
}