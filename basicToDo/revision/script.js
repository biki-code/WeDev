function todo() {
	var text = document.getElementById("revision").value;
	var li_element = document.createElement("li");
    li_element.innerHTML = text
    var parent = document.getElementById("monday")
    parent.appendChild(li_element);
}