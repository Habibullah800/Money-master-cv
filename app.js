function calTotal() {
    //-----------Expense-Item-------------
    const foodQuantity = document.getElementById('foodTotal');
    foodText = foodQuantity.value;
    //------------------------------------
    const rentQuantity = document.getElementById('rentTotal');
    rentText = rentQuantity.value;
    //------------------------------------
    const clothesQuantity = document.getElementById('clothesTotal');
    clothesText = clothesQuantity.value;
    //----------Total Expense-Item-------
    const total = parseInt(foodText) + parseInt(rentText) + parseInt(clothesText);
    //-----------------------------------
    document.getElementById('total-expenses').innerText = total;
}
function income() {
    const income = document.getElementById('income');
    const incomeTextNumber = parseInt(income.value);


    const expense = document.getElementById('total-expenses');
    const expenseTextNumber = parseInt(expense.innerText);


    const final = incomeTextNumber - expenseTextNumber;

    const incomeAmount = document.getElementById('balance');
    incomeAmount.innerText = final;
}


function finalCalculation() {
    const parsentage = document.getElementById('parsent');
    const parsentageText = parsentage.value;
    const parsentageTextNumber = parseInt(parsentageText);

    const balanceParsentage = document.getElementById('balance');
    const balanceParsentageNumber = parseInt(balanceParsentage.innerText);




    savingAmountText = balanceParsentageNumber / parsentageTextNumber;
    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = savingAmountText;

    const remaining = balanceParsentageNumber - savingAmountText;

    document.getElementById('netRemaining').innerText = remaining;
}
document.getElementById('calculate').addEventListener('click', function () {
    finalCalculation();
})
document.getElementById('Input-calculate').addEventListener('click', function () {
    calTotal();
});
document.getElementById('Input-calculate').addEventListener('click', function () {
    income();
});