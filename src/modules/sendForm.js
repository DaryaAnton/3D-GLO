const sendFormModule = ({formId, someElement = []}) => {
    const form = document.getElementById(formId);
    const statusBlock = document.createElement('div');
    const loadText = 'Загрузка...';
    const errorText = 'Ошибка...';
    const successText = 'Спасибо! Наш менеджер с Вами свяжется!';

    const validate = (list) => {
        let success = true;
        list.forEach(input => {
            if(!input.classList.contains('success')) {
                success = false
            }
        })
        return success
    }

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
        }).then(response => response.json())
    };

    const submitForm = () => {
        const formElements = form.querySelectorAll('input')
        const formData = new FormData(form)
        const formBody = {};

        statusBlock.textContent = loadText;
        form.append(statusBlock)

        formData.forEach((val, key) => {
            formBody[key] = val;
        });
        someElement.forEach((elem) => {
            const element = document.getElementById(elem.id)
            console.log(element);
            if (elem.type === 'block') {validate(formElements)
                formBody[elem.id] = element.textContent;
            }else if (elem.type === 'input') {
                formBody[elem.id] = element.value;
            }
        });

        if (validate(formElements)) {
            sendData(formBody)
            .then(data => {
                console.log(data);
                statusBlock.textContent = successText;
                formElements.forEach(input => {
                    input.value = '';
                })
            })
            .catch(error => {
                statusBlock.textContent = successText;
            })
        }else {
            alert('Данные не валидны!')
        }
    }

    try {
        if(!form) {
            throw new Error('Верните форму на место, пожалуйста!')
        }

        form.addEventListener('submit', (event) => {
            event.preventDefault();
    
            submitForm()
        });
    }catch(error) {
        console.log(error.message);
    }
};

export default sendFormModule;