let expenses = [];
let total = 0;

function addExpense() {
    let title = document.getElementById("title").value;
    let amount = Number(document.getElementById("amount").value);

    if (title === "" || amount <= 0) {
        alert("Enter valid data");
        return;
    }

    expenses.push({ title, amount });
    total += amount;

    document.getElementById("total").innerText = total;
    displayExpenses();

    document.getElementById("title").value = "";
    document.getElementById("amount").value = "";
}

function displayExpenses() {
    let list = document.getElementById("list");
    list.innerHTML = "";

    expenses.forEach((exp, index) => {
        let li = document.createElement("li");
        li.innerHTML = `${exp.title} - ₹${exp.amount}
            <button onclick="deleteExpense(${index})">X</button>`;
        list.appendChild(li);
    });
}

function deleteExpense(index) {
    total -= expenses[index].amount;
    expenses.splice(index, 1);
    document.getElementById("total").innerText = total;
    displayExpenses();
}
