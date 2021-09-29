function todo() {
	var text_todo = document.getElementById("test").value; // This variable holds a string
	var parent = document.getElementById("today"); //the ul element already exisitng in the DOM

	var newTodoElement = document.createElement("li"); //the new element we want to add to the DOM

	newTodoElement.innerHTML = text_todo; //change the innerHTML of the new element to the value of the input

	//todo don't append to the DOM if text_todo is empty
	//? empty string is denoted by ""
	//todo clear the input box after appending

	if (text_todo != "") {
		parent.appendChild(newTodoElement); //appendChild appends the element newTodoElement to parent already existing in the DOM
        // your code to clear the input box here
        onfocus = 'if (this.value == "text_todo") this.value = ""' 
	}
	


function happy(){
	onfocus = 'if (this.value == "text_todo") this.value = ""' 
	
}

}
