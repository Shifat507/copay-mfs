document.getElementById('btn-login').
    addEventListener('click', function (event) {
        event.preventDefault();
        const phoneNumber = document.getElementById('phone-number').value;
        const pinNumber = document.getElementById('pin-number').value;

        if(phoneNumber === '01300378211' && pinNumber === '8211'){
            window.location.href = "/home.html";
            document.getElementById('phone-number').value = '';
            document.getElementById('pin-number').value = '';
        }
        else{
            alert('Wrong Number or Pin. Please try again');
            document.getElementById('phone-number').value = '';
            document.getElementById('pin-number').value = '';
        }
    })