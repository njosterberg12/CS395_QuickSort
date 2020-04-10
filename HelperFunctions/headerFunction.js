function createHeader(pageTitle) {
  var headerTableId = "HeaderTableID";
  deleteMyTable(headerTableId);
  var x = document.createElement("TABLE");
  x.setAttribute("id", headerTableId);
  x.style.backgroundColor = "#808080";
  x.style["width"] = "100%";
  document.body.appendChild(x);
  var newRow = document.createElement("TR");
  newRow.setAttribute("id", "myTr");
  x.appendChild(newRow);
  var mycell;
  var cellContent;
  var img;
  
  mycell = document.createElement("TD");
  mycell.style["width"] = "5%";
  newRow.appendChild(mycell); 

  mycell = document.createElement("TD");
  mycell.style.textAlign = "center";
  mycell.style["width"] = "8%";
  cellContent = document.createElement('a');
  cellContent.href = "https://www.uidaho.edu/engr/our-people/julie-beeston";
  img = document.createElement('img');
  img.src = "../images/drbc.gif";
  img.style["width"] = "100%";
  cellContent.style["width"] = "100%";
  cellContent.appendChild(img); 
  mycell.appendChild(cellContent);

  cellContent =  document.createElement('button');
  cellContent.innerHTML = 'Mute';
  cellContent.setAttribute("id", "muteButton");
  cellContent.onclick =  function(){muteSound()};
  cellContent.style["width"] = "100%";
  cellContent.style["height"] = "100%";
  mycell.appendChild(cellContent);
  newRow.appendChild(mycell);
  
  mycell = document.createElement("TD");
  mycell.style["width"] = "74%";
  mycell.style.textAlign = "center";
  cellContent = document.createElement("H2");
  cellContent.innerHTML = "Dr. BC (Dr. Julie Beeston) - UIdaho";
  cellContent.style.color = "#FFFFFF";
  mycell.appendChild(cellContent);
  cellContent = document.createElement("H2");
  cellContent.innerHTML = pageTitle;
  cellContent.style.color = "#FFFFFF";
  mycell.appendChild(cellContent);  
  newRow.appendChild(mycell);
 
  mycell = document.createElement("TD");
  mycell.style.textAlign = "center";
  mycell.style["width"] = "8%";
  cellContent = document.createElement('a');
  cellContent.href = "https://www.uidaho.edu/";
  img = document.createElement('img');
  img.src = "../images/julie-beeston.jpg";
  img.style["width"] = "100%";
  cellContent.style["width"] = "100%";
  cellContent.appendChild(img); 
  mycell.appendChild(cellContent);

  cellContent =  document.createElement('button');
  cellContent.innerHTML = 'What?';
  cellContent.setAttribute("id", "repeteButton");
  cellContent.onclick =  function(){sayItAgain()};
  cellContent.style["width"] = "100%";
  cellContent.style["height"] = "100%";
  mycell.appendChild(cellContent);
  newRow.appendChild(mycell);

  mycell = document.createElement("TD");
  mycell.style["width"] = "5%";
  newRow.appendChild(mycell);   
}