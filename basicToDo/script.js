function app (){
    var todo_text = document.getElementById("test").value


    var parent = document.getElementById("app") //<ul> Element

    var element1 = document.createElement("li") // <li> Element

    element1.innerHTML = todo_text

    parent.insertBefore(element1, parent.childNodes[0]) //adds the new element to the beginning
    
    //parent.appendChild(element1); //adds the new element to the end
   
}
// 