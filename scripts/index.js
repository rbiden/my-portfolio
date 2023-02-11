var modalWelcome = document.getElementById('welcome-modal');
var btnGetStarted = document.getElementById('btnGetStarted');
var bgBlur = document.getElementById('bg-blur');
var btnModalNo = document.getElementById('btnModalNo');
var btnModalYes = document.getElementById('btnModalYes');

modalWelcome.style.display = 'none';

btnGetStarted.addEventListener('click', function() {
    bgBlur.style.zIndex = '1';
    modalWelcome.style.transform = "translateY(-5%)";
    modalWelcome.style.display = 'block';

    btnModalNo.addEventListener('click', function() {
        modalWelcome.style.display = 'none';
        bgBlur.style.display = 'none';
    });

    btnModalYes.addEventListener('click', function() {
        modalWelcome.style.transform = "translateY(-200%)";
        setTimeout(function() { bgBlur.style.zIndex = '-1'; }, 700);
    });
});