const sendFormModule = ({formId, someElement = []}) => {
    const form = document.getElementById(formId);
    const statusBlock = document.createElement('div');

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

    const statusSubmit = (status) => {
        const img = document.createElement('img');
        const statusVariants = {
            load: {
                message: ' Загрузка...',
                img: './images/status/loader.gif'
            },
            success: {
                message: 'Спасибо! Наш менеджер с Вами свяжется!',
                img: './images/status/ok.svg'
            },
            error: {
                message: 'Ошибка...',
                img: './images/status/stop.svg'
            }
        };
        statusBlock.textContent = statusVariants[status].message;
        img.src = statusVariants[status].img;
        img.height = 50;

        statusBlock.insertBefore(img, statusBlock.firstChild);
        form.append(statusBlock)
    };

    statusBlock.style.cssText = 'font-size: 14px; color: #fff';

    const submitForm = () => {
        const formElements = form.querySelectorAll('input')
        const formData = new FormData(form)
        const formBody = {};

        formData.forEach((val, key) => {
            formBody[key] = val;
        });
        someElement.forEach((elem) => {
            const element = document.getElementById(elem.id)

            if (elem.type === 'block') {validate(formElements)
                formBody[elem.id] = element.textContent;
            }else if (elem.type === 'input') {
                formBody[elem.id] = element.value;
            }
        });

        if (validate(formElements)) {
            sendData(formBody)
            .then(data => {

                statusSubmit('success');
                setTimeout(function () {
                    statusBlock.remove();
                 }, 3000)
                formElements.forEach(input => {
                    input.value = '';
                })
            })
            .catch(error => {
                statusSubmit('error');
                setTimeout(function () {
                    statusBlock.remove();
                 }, 3000)
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
            statusSubmit('load');
        });
    }catch(error) {
        error.message;
    }
};

export default sendFormModule;