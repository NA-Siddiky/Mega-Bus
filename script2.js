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

function ticketHandler(travelClass, isIncrease) {
    const ticketInput = document.getElementById(travelClass + "-count");
    const ticketCount = getInputValue(ticket);

    let ticketNewCount = ticketCount;
    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
    }
    if (isIncrease == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }
    ticketInput.value = ticketNewCount;
    let totalTicket = 0;
    if (travelClass == 'firstClass') {
        totalTicket = ticketNewCount * 150;
    }
    if (travelClass == 'economyClass') {
        totalTicket = ticketNewCount * 100;
    }
    document.getElementById(travelClass + '-total').innerText = '$' + totalTicket;
    calculateTotal();
}

// function calculateTotal() {
//     const firstClassCount = getInputValue('firstClass');
//     const economyClassCount = getInputValue('economyClass');

//     const subTotal = firstClassCount * 150 + economyClassCount * 100;
//     document.getElementById('sub-total').innerText = '$' + subTotal;
// }


// function getInputValue(ticket) {
//     const ticketInput = document.getElementById(ticket + '-count');
//     const ticketCount = parseInt(travelClassInput.value);
//     return ticketCount;
// }



// function calculateTotal() {
//     const firstClassInput = document.getElementById('firstClass-count');
//     const firstClassCount = parseInt(firstClassInput.value);

//     const economyClassInput = document.getElementById('economyClass-count');
//     const economyClassCount = parseInt(economyClassInput.value);

//     const subTotal = firstClassCount * 150 + economyClassCount * 100;
//     document.getElementById("sub-total").innerText = '$' + subTotal;
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