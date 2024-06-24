// step-1:
document.getElementById('btn-deposit').addEventListener('click', function(){
  // step-2:
  const depositFieldValue = document.getElementById('deposit-field');
  const newDepositAmountString = depositFieldValue.value;
  const newDepositAmount = parseFloat(newDepositAmountString);

  // step-3:
  const depositTotalElement = document.getElementById('deposit-total');
  const previousDepositAmountString = depositTotalElement.innerText;
  const previousDepositAmount = parseFloat(previousDepositAmountString);

  // step-4:
  const currentDepositTotal = previousDepositAmount + newDepositAmount;
  depositTotalElement.innerText = currentDepositTotal;

  // step-5:
  const totalBalanceElement = document.getElementById('balance-total');
  const previousTotalBalanceString = totalBalanceElement.innerText;
  const previousTotalBalance = parseFloat(previousTotalBalanceString);
  
  // step-6:
  const currentTotalBalance = previousTotalBalance + newDepositAmount;
  totalBalanceElement.innerText = currentTotalBalance;
  
  // step-7:
  depositFieldValue.value = '';
})