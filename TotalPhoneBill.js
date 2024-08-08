export function totalPhoneBill(CustActions) {
    // Define a dictionary to store the cost of each action type
    const prices = { call: 2.75, sms: 0.65 };

    // Split the input string by commas, trim each action, and calculate the total bill
    const totalBill = CustActions.split(",")
        .map(action => action.trim()) // Remove any surrounding whitespace from each action
        .reduce((total, action) => total + (prices[action] || 0), 0); // Sum up the cost of each action, default to 0 if action is not found

    // Return the total bill formatted as a currency string
    return "R" + totalBill.toFixed(2);
}
