function main() {
    class ExpenseTracker {
        // Private properties
        #expenses; // Using the '#' syntax to define private properties
        #income;

        // Constructor function
        constructor(income) {
            this.#income = income; // Initialize the income property
            this.#expenses = []; // Initialize the expenses array
        }

        // Private method to calculate total expenses
        #calculateTotalExpenses() {
            return this.#expenses.reduce((total, expense) => total + expense.amount, 0);
        }

        // Public method to add an expense
        addExpense(name, amount, date) {
            const expense = { name, amount, date };
            this.#expenses.push(expense); // Add the new expense to the expenses array
        }

        // Public method to calculate balance
        calculateBalance() {
            const totalExpenses = this.#calculateTotalExpenses(); // Use the private method to get total expenses
            return this.#income - totalExpenses; // Calculate and return the balance
        }
    }

    // The class should function accordingly.
    const tracker = new ExpenseTracker(5000);
    tracker.addExpense("Rent", 1000, "2021-10-01");
    tracker.addExpense("Groceries", 500, "2021-10-02");
    console.log(tracker.calculateBalance()); // should output 3500

    return ExpenseTracker;
}

main();
