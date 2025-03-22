function userReg(){
    
    let userName    = document.getElementById('name').value
    let userEmail   = document.getElementById('email').value
    let userNumber  = document.getElementById('number').value
    let userPass    = document.getElementById('password').value

    let userObj ={
        userName: userName,
        userEmail: userEmail,
        userNumber: userNumber,
        userPass: userPass
    }

    alert(JSON.stringify(userObj))

}