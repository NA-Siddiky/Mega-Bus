function ticketClassHandler(ticketClass, isIncrease) {
    const ticketClassInput = document.getElementById(ticketClass + "-count");
    const ticketClassCount = parseInt(ticketClassInput.value);

    let ticketClassNewCount = ticketClassCount;
    if (isIncrease == true) {
        ticketClassNewCount = ticketClassCount + 1;
    }
    if (isIncrease == false && ticketClassCount > 0) {
        ticketClassNewCount = ticketClassCount - 1;
    }
    ticketClassInput.value = ticketClassNewCount;

    let ticketClassTotal = 0;
    if (ticketClass == 'firstClass') {
        ticketClassTotal = ticketClassNewCount * 150;
    }
    if (ticketClass == 'economyClass') {
        ticketClassTotal = ticketClassNewCount * 100;
    }
    calculateTotal();
}

function calculateTotal() {
    const firstClassCount = getInputValue('firstClass');
    const economyClassCount = getInputValue('economyClass');

    const subTotal = firstClassCount * 150 + economyClassCount * 100;
    document.getElementById('sub-total').innerText = '$' + subTotal;

    const tax = Math.round(subTotal * 0.10);
    document.getElementById('tax-amount').innerText = '$' + tax;

    const grandTotal = subTotal + tax;
    document.getElementById('grand-total').innerText = '$' + grandTotal;

}

function getInputValue(ticketClass) {
    const ticketClassInput = document.getElementById(ticketClass + '-count');
    const ticketClassCount = parseInt(ticketClassInput.value);
    return ticketClassCount;
}

