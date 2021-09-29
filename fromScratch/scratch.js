function today() {
    document.getElementById('scratch').style.color='pink' 
}


function tryCatch(value) {
    if (true) {
        var whatever = 500
    }
    console.log(`HERE is the value of ${whatever}`)
    var response;
    try {
        var answer = console(20/value)
        console.log('Yaay! it worked')
        response = answer;
    }
    catch {
        console.log('An error occured')
        response = 'Error'
    }
    finally {
        console.log('I work regardless')
        return response
    }
}
   var firstName = "biki";
   var lastName = "terfa";
   var fullName = firstName + lastName;