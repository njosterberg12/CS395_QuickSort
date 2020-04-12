// Cell is a label. Set the label to the given value.
function setCell(myTableId, x,y,newValue) {
  var myTable = document.getElementById(myTableId); 
  myTable.rows[y].cells[x].innerHTML = newValue;
}

// Cell is an input box. Set the value.
function setInputCell(myTableId, x,y,newValue) {
  var myTable = document.getElementById(myTableId); 
  myTable.rows[y].cells[x].childNodes[0].value = newValue;
}

// Cell is a label. Set the background color of the cell.
function setCellColor(myTableId, x,y,newColor) {
  var myTable = document.getElementById(myTableId); 
  myTable.rows[y].cells[x].style.backgroundColor = newColor;            
}

// Cell is an input box. Set the background color of the cell.
function setInputCellColor(myTableId, x,y,newColor) {
  var myTable = document.getElementById(myTableId); 
  myTable.rows[y].cells[x].childNodes[0].style.backgroundColor = newColor;            
}

// Cell is a label. Get the value.
function getCellValue(myTableId, x,y) {
  var myTable = document.getElementById(myTableId); 
  return myTable.rows[y].cells[x].innerHTML;            
}

/////////////////
function getCellChild(myTableId, x,y) {
  var myTable = document.getElementById(myTableId); 
  return myTable.rows[y].cells[x].childNodes[0];            
}

function getInputCellValue(myTableId, x,y) {
  var myTable = document.getElementById(myTableId); 
  return myTable.rows[y].cells[x].childNodes[0].value;            
}

function setCellBorder(myTableId, x,y,newBorder) {
  var myTable = document.getElementById(myTableId); 
  myTable.rows[y].cells[x].style.border = newBorder;            
}

function setCellAsInputBoxAndHighlight(myTableId, x, y, newColor, value) {
	setCellAsInputBox(myTableId,x,y,value); 
	setInputCellColor(myTableId, x, y, newColor);
}

function setCellAsInputBox(myTableId, x,y, initialValue) {
  var myTable = document.getElementById(myTableId); 
  var input = document.createElement("input");
  input.type = "text";
  input.className = "cell-css-class"; // set the CSS class
  input.value = initialValue;
  input.style["width"] = "32px";
  //input.onchange = "inputBoxChanged("+x+","+y+")";
  input.onchange = function() {inputBoxChanged(myTableId, x, y)};
  var mycell = myTable.rows[y].cells[x];
  if (mycell.hasChildNodes()) {
     mycell.removeChild(mycell.childNodes[0]);
  } 
  mycell.appendChild(input);  
  input.focus();  
}

function setCellAsTextBox(myTableId, x,y) {
  var myTable = document.getElementById(myTableId); 
  var mycell = myTable.rows[y].cells[x];
  var oldValue = getInputCellValue(myTableId, x,y);

  if (mycell.hasChildNodes()) {
     mycell.removeChild(mycell.childNodes[0]);
  } 
  var t = document.createTextNode(oldValue);
  mycell.appendChild(t);            
}

function setCellAsButton(myTableId, x,y, label) {
  var myTable = document.getElementById(myTableId); 
  var mycell = myTable.rows[y].cells[x];
  var oldValue = getInputCellValue(myTableId, x,y);

  if (mycell.hasChildNodes()) {
     mycell.removeChild(mycell.childNodes[0]);
  } 
  var t = document.createElement('button');
  t.innerHTML = label;
  t.onclick = function(){executeCell(x,y)};
  mycell.appendChild(t);            
}

//////////////
function setCellAsSubTable(myTableParentId, myTableId, x,y, tableCols, tableRows) {
  var myTable = document.getElementById(myTableParentId); 
  var mycell = myTable.rows[y].cells[x];

  if (mycell.hasChildNodes()) {
     mycell.removeChild(mycell.childNodes[0]);
  } 
  
  var x = document.createElement("TABLE");
  x.setAttribute("id", myTableId);
  //x.setAttribute("border", "1px solid black");
  mycell.appendChild(x);

  var y
  for(y=0; y< tableRows; y++) {
	  var newRow = document.createElement("TR");
	  newRow.setAttribute("id", "myTr");
	  document.getElementById(myTableId).appendChild(newRow);
	  
	  var i;
	  for(i=0; i< tableCols; i++) {
		 var z = document.createElement("TD");
		 z.style["width"] = "32px";
		 var t = document.createTextNode(" ");
		 z.appendChild(t);
		 //z.setAttribute("border", "1px solid black");
		 //document.getElementById("myTr").appendChild(z);
		 newRow.appendChild(z);
	  }
  }  
  //mycell.appendChild(x);            
}

function setCellAsObject(myTableId, x,y, newObject) {
  var myTable = document.getElementById(myTableId); 
  var mycell = myTable.rows[y].cells[x];
  if (mycell.hasChildNodes()) {
     mycell.removeChild(mycell.childNodes[0]);
  } 
  mycell.appendChild(newObject);            
}

function moveCellObject(myTableId, fromx,fromy, tox, toy ) {
  var myTable = document.getElementById(myTableId);
  var myTocell = myTable.rows[toy].cells[tox];
  var myFromcell = myTable.rows[fromy].cells[fromx]; 
  if (!myFromcell.hasChildNodes()) {
     return;
  } 
  if (myTocell.hasChildNodes()) {
     myTocell.removeChild(myTocell.childNodes[0]);
  } 
  var tempObject = myFromcell.childNodes[0];
  myFromcell.removeChild(myFromcell.childNodes[0]);
  myTocell.appendChild(tempObject); 
}

function deleteCell(myTableId, x,y) {
  var myTable = document.getElementById(myTableId); 
  var mycell = myTable.rows[y].cells[x];
  if (mycell.hasChildNodes()) {
     mycell.removeChild(mycell.childNodes[0]);
  }          
}

function centerCell(myTableId, x,y) {
  var myTable = document.getElementById(myTableId); 
  var mycell = myTable.rows[y].cells[x];
  mycell.style.textAlign = "center";     
}
///////////////////////////////////////
function setCellWidth(myTableId, x,y, newWidth) {
  var myTable = document.getElementById(myTableId); 
  var mycell = myTable.rows[y].cells[x];
  mycell.style["width"] = newWidth;
  //mycell.style.width = newWidth; 
  //mycell.width = '500px'; 
  //mycell.style.backgroundColor = 'blue';
  
}

function setCellHeight(myTableId, x,y, newHeight) {
  var myTable = document.getElementById(myTableId); 
  var mycell = myTable.rows[y].cells[x];
  mycell.style["height"] = newHeight;   
}

function createTable(myTableId, tableCols, tableRows) {
  deleteMyTable(myTableId);
  var x = document.createElement("TABLE");
  x.setAttribute("id", myTableId);
  //x.setAttribute("border", "1px solid black");
  document.body.appendChild(x);

  var y
  for(y=0; y< tableRows; y++) {
	  var newRow = document.createElement("TR");
	  newRow.setAttribute("id", "myTr");
	  document.getElementById(myTableId).appendChild(newRow);
	  
	  var i;
	  for(i=0; i< tableCols; i++) {
		 var z = document.createElement("TD");
		 z.style["width"] = "32px";
		 var t = document.createTextNode(" ");
		 z.appendChild(t);
		 //z.setAttribute("border", "1px solid black");
		 //document.getElementById("myTr").appendChild(z);
		 newRow.appendChild(z);
	  }
  }
  //setCell(0,0,"Hello");
  //setCellColor(myTableId, 0,0, "yellow");
  //setCellBorder(myTableId, 0,0, "1px solid black");
}

// DEBUG BC Merge this with the previous function.
function createTableWithWidth(myTableId, tableCols, tableRows, tableWidth) {
  deleteMyTable(myTableId);
  var x = document.createElement("TABLE");
  x.setAttribute("id", myTableId);
  x.style["width"] = tableWidth;
  document.body.appendChild(x);

  var y;
  for(y=0; y< tableRows; y++) {
	  var newRow = document.createElement("TR");
	  newRow.setAttribute("id", "myTr");
	  document.getElementById(myTableId).appendChild(newRow);
	  
	  var i;
	  for(i=0; i< tableCols; i++) {
		 var z = document.createElement("TD");
		 var t = document.createTextNode(" ");
		 z.appendChild(t);
		 newRow.appendChild(z);
	  }
  }
}
