document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    const addAmount = getInputFieldById('add-money-amount');
    const pin = getInputFieldById('pin-number');
    // console.log(addAmount, pin);

    if( pin === 8211 ){
        const availableAmount = getTextFieldValueById ('available-amount');
        console.log(availableAmount)
        const newAmount = availableAmount + addAmount;
        console.log(newAmount)
        document.getElementById('available-amount').innerText = newAmount;

        resetInputField('add-money-amount');
        resetInputField('pin-number');
    }
    else{
        alert('Field to add money. Please try again');
        resetInputField('add-money-amount');
        resetInputField('pin-number');
    }
})