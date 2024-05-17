const timerModule = (deadline) => {

    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');

    const getTimeRemaining = () => {

        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;
        let hours = Math.floor(timeRemaining / 60 / 60);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);

        return {timeRemaining, hours, minutes, seconds,}
    };

    const zero = (elem) => {
        if (String(elem).length === 1) { 
            return '0' + elem; 
        } else { 
            return String(elem); 
        };
    };

    let idIntervalUpdateClock;

    const updateClock = () => {
        let getTime = getTimeRemaining();

        timerHours.textContent = zero(getTime.hours);
        timerMinutes.textContent = zero(getTime.minutes);
        timerSeconds.textContent = zero(getTime.seconds);

        if (getTime.timeRemaining < 0) {
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
            clearInterval(idIntervalUpdateClock);
        };
        console.log('ghbdtn');
    };

    idIntervalUpdateClock = setInterval(updateClock, 1000);
};

export default timerModule;