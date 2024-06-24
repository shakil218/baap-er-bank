// step-1:
document.getElementById('btn-withdraw').addEventListener('click', function(){
   // step-2:
   const withdrawFieldValue = document.getElementById('withdraw-field');
   const newWithdrawAmountString = withdrawFieldValue.value;
   const newWithdrawAmount = parseFloat(newWithdrawAmountString);
 
   // step-3:
   const withdrawTotalElement = document.getElementById('withdraw-total');
   const previousWithdrawAmountString = withdrawTotalElement.innerText;
   const previousWithdrawAmount = parseFloat(previousWithdrawAmountString);
 
   // step-4:
   const currentWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
   withdrawTotalElement.innerText = currentWithdrawTotal;

   // step-5:
  const totalBalanceElement = document.getElementById('balance-total');
  const previousTotalBalanceString = totalBalanceElement.innerText;
  const previousTotalBalance = parseFloat(previousTotalBalanceString);
  
  // step-6:
  const currentTotalBalance = previousTotalBalance - newWithdrawAmount;
  totalBalanceElement.innerText = currentTotalBalance;

  //  step-7:
   withdrawFieldValue.value = '';
})