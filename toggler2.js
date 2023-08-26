const buttonTuggler = document.getElementById('navbar-button-toggler');
const body = document.getElementById('entire-body');
const navLogo = document.getElementsByTagName('a')[0];
const navBgCol = document.getElementById('padder');
const imgCh = document.getElementById('img-sizer');
const backButton = document.getElementById('back-buttler');
const backImg = document.getElementById('back-icon');

let changeCol = true;

buttonTuggler.addEventListener('click', function toggle(value) {
        if (changeCol) {
                body.style.backgroundColor = '#212E37';
                buttonTuggler.textContent = 'Light Mode';
                buttonTuggler.style.color = '#EFF1F0';
                buttonTuggler.style.backgroundColor = '#2B3743';
                navLogo.style.color = '#EFF1F0';
                navBgCol.style.backgroundColor = '#2B3743';
                backButton.style.color = '#EFF1F0';
                backButton.style.backgroundColor = '#2B3743';
                imgCh.src = '/img/2.Moon-_Sleep_-Night.png';
                backImg.src = '/img/5.left.arrow.night.png';
        } else {
                body.style.backgroundColor = '#EFF1F0';
                buttonTuggler.textContent = 'Dark Mode';
                buttonTuggler.style.color = 'black';
                buttonTuggler.style.backgroundColor = '#EFF1F0';
                navLogo.style.color = 'black';
                navBgCol.style.backgroundColor = '#EFF1F0';
                backButton.style.color = 'black';
                backButton.style.backgroundColor = '#EFF1F0';
                imgCh.src = '/img/1.Moon-_Sleep_-Day.png';
                backImg.src = '/img/5.left.arrow.day.png';
        } 
        changeCol = !changeCol
});



