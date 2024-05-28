const validationModal = () => {
    const userName = document.querySelectorAll('input[name=user_name]');
    const userEmail = document.querySelectorAll('input[name=user_email]');
    const userPhone = document.querySelectorAll('input[name=user_phone]');
    const userMessage = document.querySelector('input[name=user_message]');

    userName.forEach(input => {
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^а-яА-Я\-\s]/gi, "");

            if (e.target.value !== '') {
                e.target.classList.add('success');
            }else {
                e.target.classList.remove('success');
            }
        });
    });
    userEmail.forEach(input => {
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^a-zA-Z0-9\-\.\!\~\@\*\_]/gi, "");

            if (e.target.value !== '') {
                e.target.classList.add('success');
            }else {
                e.target.classList.remove('success');
            }
        });
    });
    userPhone.forEach(input => {
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^0-9\(\)\-\+]/gi, "");

            if (e.target.value !== '') {
                e.target.classList.add('success');
            }else {
                e.target.classList.remove('success');
            }
        });
    });
    userMessage.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-яА-Я\-\s\0-9\?]/, "");

        if (e.target.value !== '') {
            e.target.classList.add('success');
        }else {
            e.target.classList.remove('success');
        }
    });
};

export default validationModal;