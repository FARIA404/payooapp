const validPin = 1234
document.getElementById("add-money-btn").addEventListener("click",function(e){
    e.preventDefault();
    console.log("add money button clicked")
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