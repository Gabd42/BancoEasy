let accounts = [];

document.getElementById('formCreateAccount').addEventListener('submit', function(event) {
    event.preventDefault();
    createAccount();
});

function createAccount() {
    const accountHolder = document.getElementById('accountHolder').value;
    const initialDeposit = parseFloat(document.getElementById('initialDeposit').value);

    if (accountHolder && !isNaN(initialDeposit)) {
        const accountId = accounts.length + 1;
        accounts.push({
            id: accountId,
            holder: accountHolder,
            balance: initialDeposit
        });

        alert(`Conta criada com sucesso! ID da Conta: ${accountId}`);
        document.getElementById('formCreateAccount').reset();
    } else {
        alert('Por favor, preencha todos os campos corretamente.');
    }
}

function consultBalance() {
    const accountId = parseInt(document.getElementById('accountId').value);
    const account = accounts.find(acc => acc.id === accountId);

    if (account) {
        document.getElementById('balanceDisplay').innerText = `Saldo: R$ ${account.balance.toFixed(2)}`;
    } else {
        document.getElementById('balanceDisplay').innerText = 'Conta não encontrada.';
    }
}

function deposit() {
    const accountId = parseInt(document.getElementById('accountId').value);
    const amount = parseFloat(document.getElementById('depositAmount').value);
    const account = accounts.find(acc => acc.id === accountId);

    if (account && !isNaN(amount) && amount > 0) {
        account.balance += amount;
        alert(`Depósito de R$ ${amount.toFixed(2)} realizado com sucesso.`);
        document.getElementById('depositAmount').value = '';
    } else {
        alert('Valor inválido ou conta não encontrada.');
    }
}

function withdraw() {
    const accountId = parseInt(document.getElementById('accountId').value);
    const amount = parseFloat(document.getElementById('withdrawAmount').value);
    const account = accounts.find(acc => acc.id === accountId);

    if (account && !isNaN(amount) && amount > 0 && account.balance >= amount) {
        account.balance -= amount;
        alert(`Saque de R$ ${amount.toFixed(2)} realizado com sucesso.`);
        document.getElementById('withdrawAmount').value = '';
    } else {
        alert('Valor inválido, conta não encontrada ou saldo insuficiente.');
    }
}
