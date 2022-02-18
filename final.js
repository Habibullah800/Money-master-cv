//---------Function---------------------------
function getInputValue(FunctionId) {
    let inputBox = document.getElementById(FunctionId);
    let inputAmount = parseFloat(inputBox.value);
    if (isNaN(inputAmount) || inputAmount < 0) {
        inputBox.Value = '';
        return alert('Please, Input a valid Amount or fill up all input box');
    }
    inputBox.value = '';
    return inputAmount;
}
//--------------Expense-Balance-Area---------------
document.getElementById('first-calculate-btn').addEventListener('click', function () {
    let foodExpense = getInputValue('food-box');
    let rentExpense = getInputValue('rent-box');
    let ClothesExpense = getInputValue('clothes-box');
    let expense = getInputValue('income-box');
    let totalExpenses = foodExpense + rentExpense + ClothesExpense;
    if (expense > totalExpenses) {
        const balance = expense - totalExpenses;
        const balances = document.getElementById('balance-field');
        const netbalance = balances.innerText;
        const AvailableBalance = balance + parseFloat(netbalance);
        balances.innerText = AvailableBalance;
    }
    if (totalExpenses > 0) {
        const totalExpensesField = document.getElementById('total-expenses');
        const Expense = totalExpensesField.innerText;
        const totalexpenses = totalExpenses + parseFloat(Expense);
        totalExpensesField.innerText = totalexpenses;
    };
})
//---------------Parsentage-Area---------------
document.getElementById('second-calculate-btn').addEventListener('click', function () {
    let parsentage = getInputValue('parsent');
    if (parsentage > 0) {
        const Balance = document.getElementById('balance-field').innerText;
        const savingAmount = Balance / parsentage;
        const savingAmountfield = document.getElementById('saving-amount-field');
        const Amount = savingAmountfield.innerText
        savingAmountfield.innerText = parseInt(Amount) + savingAmount;
        const remainingNetBalance = document.getElementById('remaining-balance-field');
        const RemainingAmount = Balance - savingAmount
        remainingNetBalance.innerText = RemainingAmount;
    };
});
