const calculatorModal = () => {
    const squareCalc = document.querySelector('.calc-square');
    const countCalc = document.querySelector('.calc-count');
    const dayCalc = document.querySelector('.calc-day');

    squareCalc.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D+/, "");
    });

    countCalc.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D+/, "");
    });

    dayCalc.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D+/, "");
    });
};

export default calculatorModal;