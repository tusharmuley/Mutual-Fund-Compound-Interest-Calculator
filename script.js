function calculate() {
    const initialInvestment = parseFloat(document.getElementById('initialInvestment').value);
    const monthlyContribution = parseFloat(document.getElementById('monthlyContribution').value);
    const annualInterestRate = parseFloat(document.getElementById('annualInterestRate').value) / 100;
    const years = parseInt(document.getElementById('years').value);

    if (isNaN(initialInvestment) || isNaN(monthlyContribution) || isNaN(annualInterestRate) || isNaN(years)) {
        alert('Please enter valid numeric values');
        return;
    }

    let totalAmount = initialInvestment;
    let totalInvested = initialInvestment;

    for (let i = 0; i < years * 12; i++) {
        totalAmount = totalAmount * (1 + annualInterestRate / 12) + monthlyContribution;
        totalInvested += monthlyContribution;
    }

    const compoundInterest = totalAmount - totalInvested;

    document.getElementById('totalAmount').innerText = `Total Amount: ₹${totalAmount.toFixed(2)}`;
    document.getElementById('totalInvested').innerText = `Total Invested: ₹${totalInvested.toFixed(2)}`;
    document.getElementById('compoundInterest').innerText = `Compound Interest Earned: ₹${compoundInterest.toFixed(2)}`;
}
