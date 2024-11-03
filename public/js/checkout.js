document.addEventListener('DOMContentLoaded', function () {
    const paymentMethods = document.querySelectorAll('input[name="payment-method"]');
    const creditCardInfo = document.getElementById('credit-card-info');

    // Listen to the payment method change event
    paymentMethods.forEach(method => {
        method.addEventListener('change', function () {
            if (this.value === 'credit-card') {
                creditCardInfo.style.display = 'block';
            } else {
                creditCardInfo.style.display = 'none';
            }
        });
    });

    // Handle form submission (simulated checkout process and real submission to backend)
    document.getElementById('checkout-btn').addEventListener('click', function () {
        // Extracting the form values
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;

        const address = document.getElementById('address').value;
        const city = document.getElementById('city').value;
        const country = document.getElementById('country').value;
        const zip = document.getElementById('zip').value;

        const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;
        const cardNumber = document.getElementById('card-number').value;
        const cardExpiration = document.getElementById('card-expiration').value;
        const cardCVC = document.getElementById('card-cvc').value;

        // Create the data object
        const data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            address: address,
            city: city,
            country: country,
            zip: zip,
            paymentMethod: paymentMethod,
            cardNumber: paymentMethod === 'credit-card' ? cardNumber : null,
            cardExpiration: paymentMethod === 'credit-card' ? cardExpiration : null,
            cardCVC: paymentMethod === 'credit-card' ? cardCVC : null
        };
        console.log(data)
        fetch('/api/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            console.log('Success:', result);
            // Handle success response (e.g., redirect, show confirmation)
            alert(`Order placed successfully! Payment Method: ${paymentMethod}`);
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle error response
        });
    });
});
