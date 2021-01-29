document.getElementById("firstClass-increase").addEventListener('click', function () {
    const firstClassInput = document.getElementById("firstClass-count");
    const firstClassCount = parseInt(firstClassInput.value);
    const firstClassNewCount = firstClassCount + 1;
    firstClassInput.value = firstClassNewCount;
    const firstClassTotal = firstClassNewCount * 150;
    document.getElementById('firstClass-total').innerText = '$' + firstClassTotal;

})

// document.getElementById("economyClass-increase").addEventListener('click', function () {
//     const economyClassInput = document.getElementById("economyClass-count");
//     const economyClassCount = parseInt(economyClassInput.value);
//     const economyClassNewCount = economyClassCount + 1;
//     economyClassInput.value = economyClassNewCount;
//     const economyClassTotal = economyClassNewCount * 100;
//     document.getElementById('economyClass-total').innerText = '$' + economyClassTotal;
// })








document.getElementById("firstClass-decrease").addEventListener('click', function () {
    console.log('minus clicked');
})
// document.getElementById("firstClass-increase").addEventListener('click', function () {
//     console.log('pluse clicked');
// } )

document.getElementById("economyClass-decrease").addEventListener('click', function () {
    console.log('minus clicked');
})
// document.getElementById("economyClass-increase").addEventListener('click', function () {
//     console.log('pluse clicked');
// })
