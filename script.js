document.getElementById("loginButton").addEventListener("click",function (e){e.preventDefault()
    const mobileNumber = 12345678910
    const pinDigit = 1234
    const mobileNumberValue = document.getElementById("mobile-number").value
    const mobileNumberValueConverted = parseInt(mobileNumberValue)

    const pinDigitValue = document.getElementById("pin-digit").value
    const pinDigitValueConverted = parseInt(pinDigitValue)
    
    console.log(mobileNumberValueConverted,pinDigitValueConverted)

    if(mobileNumberValueConverted === mobileNumber && pinDigitValueConverted === pinDigit){
        window.location.href="./main.html"
    }
    else{
       alert("Invalid crediantials")
    }
})