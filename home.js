function tab(evt, tabName){
	var i, tabcontent, tablinks;
	
	tabcontent = document.getElementsByClassName("tabcontent");
	for(i=0; i<tabcontent.length; i++){
		tabcontent[i].style.display="none";
	}
	
	tablinks = document.getElementsByClassName("tablinks");
	for(i=0; i<tablinks.length; i++){
		tablinks[i].addEventListener("click", function(){
			var current = document.getElementsByClassName("active");
			current[0].className = current[0].className.replace(" active","");
		});
	}
	
	document.getElementById(tabName).style.display = "block";
	evt.current.className += " active";
	// evt.style.border = 1px solid white;
}
document.getElementById("defaultOpen").click();

// Create a "close" button and append it to each list item
var list = document.getElementById("UL");
var myNodelist = list.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.getElementById('UL');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("UL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}