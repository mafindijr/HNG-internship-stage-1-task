//Button for testing
const buttonElement = document.querySelector('.js-more-btn');


buttonElement.addEventListener('click', () => {
    alert('This button is created for practice purpose');
});

//iniallizing and rendering the current time

function updateTime () {

    const timeElement = document.querySelector('[data-testid="current-time"]');

    const currentTime = new Date();
    
    timeElement.textContent = `${currentTime.toUTCString()}`

}

//update time every sec

setInterval(updateTime, 1000);
updateTime();

console.log(currentTime);


