// add money
const validPin = 1234 ;
document.getElementById("add-money-btn").addEventListener("click",function(e){
    e.preventDefault();
    const bank = document.getElementById("Bank").value;

    const accountNumber = document.getElementById("account-number").value;

    const amountAdd = parseInt(document.getElementById("amount-add").value);

    const addPin =parseInt(document.getElementById("add-pin").value);

   const balance = parseInt(document.getElementById("balance").innerText);

   if(accountNumber.length <11){
    alert("Please Provide Valid Account Number");
    return;
   }

   if(addPin !==validPin){
    alert("please provide valid pin");
    return;
   }

    const totalBalance = amountAdd + balance;

    document.getElementById("balance").innerText = totalBalance;
});

// cashout
document.getElementById("withdraw-btn").addEventListener("click",function(e){
    e.preventDefault();
    const amount = parseInt(document.getElementById("amount-withdraw").value);

    const balance = parseInt(document.getElementById("balance").innerText);

    const availableBalance = balance - amount;

    document.getElementById("balance").innertext = availableBalance;  

    const agentNumber = document.getElementById("agent-num").value;
     if(agentNumber.length <11){
    alert("Please Provide Valid Agent Number");
    return;
   }
   const pinNum =parseInt(document.getElementById("pin-num").value);

   if(pinNum !==validPin){
    alert("please provide valid pin");
    return;
   }

});

document.getElementById("transfer-btn").addEventListener("click",function(){
    document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("cash-out-parent").style.display = "none";
    document.getElementById("transfer-money-parent").style.display = "block";
})








// toggling
document.getElementById("add-button").addEventListener("click",function(){
    document.getElementById("cash-out-parent").style.display = "none";

    document.getElementById("add-money-parent").style.display = "block";
});

document.getElementById("cash-button").addEventListener("click",function(){
    document.getElementById("add-money-parent").style.display = "none";

    document.getElementById("cash-out-parent").style.display = "block";
});
