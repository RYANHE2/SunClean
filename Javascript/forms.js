document.addEventListener('DOMContentLoaded', function () {

    const popup = document.createElement('div');
    popup.id = 'customPopup';
    popup.className = 'custom-popup';
    popup.innerHTML = `
        <div class="popup-content">
            <h3>Form Submission</h3>
            <p id="popupMessage"></p>
            <button id="popupClose">OK</button>
        </div>
    `;
    document.body.appendChild(popup);

    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();
        const allowedDomains = [
            'gmail.com',
            'yahoo.com',
            'outlook.com',
            'hotmail.com',
            'live.com',
            'icloud.com',
            'aol.com',
            'sunway.edu.my'
        ];
        const domain = email.split('@')[1]?.toLowerCase();
        const phonePattern = /^\d{7,15}$/;

        const errors = [];

        if (!name) {
            errors.push('The Name field cannot be empty.');
        }

        if (!email) {
            errors.push('The e-mail field cannot be empty.');
        } else if (!email.includes('@')) {
            errors.push('The e-mail must contain an @ symbol.');
        } else if (!/^[^\s@]+@[^\s@]+\.(com|edu\.my)$/.test(email)) {
            errors.push('Please enter a valid e-mail ending with .com or .edu.my');
        } else if (!allowedDomains.includes(domain)) {
            errors.push('Only e-mails from known domains (Gmail, Yahoo, Outlook, Hotmail, Live, iCloud, AOL, or Sunway) are allowed.');
        }

        if (!phone) {
            errors.push('The Phone Number field cannot be empty.');
        } else if (!phonePattern.test(phone)) {
            errors.push('Phone number must be 7 to 15 digits.');
        }

        if (!message) {
            errors.push('The Message field cannot be empty.');
        }

        const popupMessage = document.getElementById('popupMessage');
        if (errors.length > 0) {
            popupMessage.innerHTML = errors.join('<br>');
            popup.style.display = 'flex';
            return;
        }

        popupMessage.innerHTML = 'Form submitted successfully!';
        popup.style.display = 'flex';
    });

    document.getElementById('popupClose').addEventListener('click', function() {
        const popupMessage = document.getElementById('popupMessage');
        popup.style.display = 'none';
        if (popupMessage.innerHTML === 'Form submitted successfully!') {
            console.log('Form data:', {
                name: form.querySelector('#name').value,
                email: form.querySelector('#email').value,
                phone: form.querySelector('#phone').value,
                message: form.querySelector('#message').value
            });
            form.reset();
        }
    });
});