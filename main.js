// add money
const validPin = 1234
document.getElementById("add-money-btn").addEventListener("click",function(e){
    e.preventDefault();
    const bank = document.getElementById("Bank").value
    const accountNumber = document.getElementById("account-number").value

    const amountAdd = parseInt(document.getElementById("amount-add").value)

    const addPin =parseInt(document.getElementById("add-pin").value)

   const balance = parseInt(document.getElementById("balance").innerText)

   if(accountNumber.length <11){
    alert("Please Provide Valid Account Number")
    return;
   }

   if(pin !==validPin){
    alert("please provide valid pin")
    return;
   }

    const totalBalance = amountAdd+balance

    document.getElementById("balance").innerText = totalBalance
});

// cashout
document.getElementById("withdraw-btn").addEventListener("click",function(e){
    e.preventDefault();
    const amount = parseInt(document.getElementById("amount-withdraw").value)

    const balance = parseInt(document.getElementById("balance").value)

    const availableBalance = balance-amount 
    console.log(availableBalance)
    
    
})













// toggling
document.getElementById("add-button").addEventListener("click",function(){
    document.getElementById("cash-out-parent").style.display = "none"
    document.getElementById("add-money-parent").style.display = "block"
})

document.getElementById("cash-button").addEventListener("click",function(){
    document.getElementById("add-money-parent").style.display = "none"
    document.getElementById("cash-out-parent").style.display = "block"
})
