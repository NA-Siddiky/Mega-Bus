// document.getElementById("firstClass-increase").addEventListener('click', function () {
//     const firstClassInput = document.getElementById("firstClass-count");
//     const firstClassCount = parseInt(firstClassInput.value);
//     const firstClassNewCount = firstClassCount + 1;
//     firstClassInput.value = firstClassNewCount;
//     const firstClassTotal = firstClassNewCount * 150;
//     document.getElementById('firstClass-total').innerText = '$' + firstClassTotal;

// })

// document.getElementById("firstClass-decrease").addEventListener('click', function () {
//     const firstClassInput = document.getElementById("firstClass-count");
//     const firstClassCount = parseInt(firstClassInput.value);
//     const firstClassNewCount = firstClassCount - 1;
//     firstClassInput.value = firstClassNewCount;
//     const firstClassTotal = firstClassNewCount * 150;
//     document.getElementById('firstClass-total').innerText = '$' + firstClassTotal;

// })


// document.getElementById("firstClass-decrease").addEventListener('click', function () {
//     ticketHandler(false);
// })
// document.getElementById("firstClass-increase").addEventListener('click', function () {
//     ticketHandler(true);
// });

// function ticketHandler(isIncrease) {
//     const firstClassInput = document.getElementById("firstClass-count");
//     const firstClassCount = parseInt(firstClassInput.value);
//     // const firstClassNewCount = firstClassCount + 1;
//     let firstClassNewCount = firstClassCount;
//     if (isIncrease == true) {
//         firstClassNewCount = firstClassCount + 1;
//     }
//     if (isIncrease == false && firstClassCount > 0) {
//         firstClassNewCount = firstClassCount - 1;
//     }
//     firstClassInput.value = firstClassNewCount;
//     const firstClassTotal = firstClassNewCount * 150;
//     document.getElementById('allClass-total').innerText = '$' + firstClassTotal;

// }

// function ticketHandler(ticketClass, isIncrease) {
//     const ticketClassInput = document.getElementById(ticketClass + "-count");
//     const ticketClassCount = parseInt(ticketClassInput.value);

//     let ticketClassNewCount = ticketClassCount;
//     if (isIncrease == true) {
//         ticketClassNewCount = ticketClassCount + 1;
//     }
//     if (isIncrease == false && ticketClassCount > 0) {
//         ticketClassNewCount = ticketClassCount - 1;
//     }
//     ticketClassInput.value = ticketClassNewCount;

//     let ticketClassTotal = 0;
//     if (ticketClass == 'firstClass') {
//         ticketClassTotal = ticketClassNewCount * 150;
//     }
//     if (ticketClass == 'economyClass') {
//         ticketClassTotal = ticketClassNewCount * 100;
//     }
//     document.getElementById(ticketClass + '-total').innerText = '$' + ticketClassTotal;
//     calculateTotal();
// }

// function calculateTotal() {
//     const firstClassInput = document.getElementById('firstClass-count');
//     const firstClassCount = parseInt(firstClassInput.value);

//     const economyClassInput = document.getElementById('economyClass-count');
//     const economyClassCount = parseInt(economyClassInput.value);

//     const subTotal = firstClassCount * 150 + economyClassCount * 100;
//     document.getElementById('sub-total').innerText = '$' + subTotal;
// }


// function calculateTotal() {
//     // const firstClassInput = document.getElementById('firstClass-count');
//     // const firstClassCount = parseInt(firstClassInput.value);

//     // const economyClassInput = document.getElementById('economyClass-count');
//     // const economyClassCount = parseInt(economyClassInput.value);

//     const firstClassCount = getInputValue('firstClass');
//     const economyClassCount = getInputValue('economyClass');

//     const subTotal = firstClassCount * 150 + economyClassCount * 100;
//     document.getElementById('sub-total').innerText = '$' + subTotal;
// }


// function getInputValue(ticketClass) {
//     console.log(ticketClass);
//     const ticketClassInput = document.getElementById(ticketClass + '-count');
//     const ticketClassCount = parseInt(ticketClassInput.value);
//     return ticketClassCount;
// }


// function calculateTotal() {
//     const firstClassInput = document.getElementById('firstClass-count');
//     const firstClassCount = parseInt(firstClassInput.value);

//     const economyClassInput = document.getElementById('economyClass-count');
//     const economyClassCount = parseInt(economyClassInput.value);

//     const subTotal = firstClassCount * 150 + economyClassCount * 100;
//     document.getElementById('sub-total').innerText = '$' + subTotal;
// }


// document.getElementById("firstClass-decrease").addEventListener('click', function () {
//     console.log('minus clicked');
// })
// document.getElementById("firstClass-increase").addEventListener('click', function () {
//     console.log('pulse clicked');
// } )

// document.getElementById("economyClass-decrease").addEventListener('click', function () {
//     console.log('minus clicked');
// })
// document.getElementById("economyClass-increase").addEventListener('click', function () {
//     console.log('pulse clicked');
// })

// function calculateTotal() {
//     const firstClassInput = document.getElementById('firstClass-count');
//     const firstClassCount = parseInt(firstClassInput.value);

//     const economyClassInput = document.getElementById('economyClass-count');
//     const economyClassCount = parseInt(economyClassInput.value);

//     const subTotal = firstClassCount * 150 + economyClassCount * 100;
//     document.getElementById('sub-total').innerText = '$' + subTotal;
//     console.log('sub-total');
// }
















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
    document.getElementById(ticketClass + '-total').innerText = '$' + ticketClassTotal;
    calculateTotal();
}


function calculateTotal() {
    const firstClassCount = getInputValue('firstClass');
    const economyClassCount = getInputValue('economyClass');

    const subTotal = firstClassCount * 150 + economyClassCount * 100;
    document.getElementById('sub-total').innerText = '$' + subTotal;

    const tax = Math.round(subTotal * 10);
    document.getElementById('tax-amount').innerText = '$' + tax;

    const grandTotal = subTotal + tax;
    document.getElementById('grand-total').innerText = '$' + grandTotal;

}


function getInputValue(ticketClass) {
    const ticketClassInput = document.getElementById(ticketClass + '-count');
    const ticketClassCount = parseInt(ticketClassInput.value);
    return ticketClassCount;
}

