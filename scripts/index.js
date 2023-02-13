var modalWelcome = document.getElementById('welcome-modal');
var btnGetStarted = document.getElementById('btnGetStarted');
var bgBlur = document.getElementById('bg-blur');
var btnModalNo = document.getElementById('btnModalNo');
var btnModalYes = document.getElementById('btnModalYes');
var inputGuestName = document.getElementById('input-guestName');
var welcomeUser = document.getElementsByClassName('welcome-user')[0];
var helloUser = document.getElementsByClassName('hello-user')[0];
var guestName = document.getElementsByClassName('guest-name')[0];
var navTitle = document.getElementsByClassName('nav-title')[0];

btnGetStarted.addEventListener('click', function() {
    var icon = document.getElementsByClassName('fa-solid')[0];
    var valid = document.getElementsByClassName('fa-circle-check')[0];
    
    bgBlur.style.zIndex = '1';
    icon.style.display = 'none';
    modalWelcome.style.pointerEvents = 'unset';
    modalWelcome.style.opacity = '1';

    if (guestName.textContent.length > 5) {
        setTimeout(function() {
            hideModal();
        }, 2000);
    } else {
        inputGuestName.addEventListener('keyup', function() {
            icon.style.display = 'block';
            var pattern = /^[a-zA-Z\s]+$/;
            
            if (this.value.match(pattern)) {
                icon.style.color = "#80b918";
                inputGuestName.style.outlineColor = "#80b918";
                inputGuestName.style.borderColor = "#80b918";
                icon.classList.remove('fa-circle-xmark');
                icon.classList.add('fa-circle-check');
            } else if (!this.value.match(pattern) && !this.value == '') {
                icon.style.color = '#e5383b';
                inputGuestName.style.outlineColor = "#e5383b";
                inputGuestName.style.borderColor = "#e5383b";
                icon.classList.remove('fa-circle-check');
                icon.classList.add('fa-circle-xmark');
            } else {
                inputGuestName.style.outlineColor = '#212529';
                inputGuestName.style.borderColor = "#212529";
                icon.style.display = 'none';
            }
        });
    
        btnModalNo.addEventListener('click', function() {
            hideModal();
        });
    
        valid.addEventListener('click', function() {
            var name = inputGuestName.value;
            guestName.textContent = 'Hello ' + name[0].toUpperCase() + name.slice(1) + '!';
            welcomeUser.style.transform = 'translateX(200%)';
            helloUser.style.transform = 'translateX(0)';

            setTimeout(function() {
                navTitle.textContent = 'Hi ' + name[0].toUpperCase() + name.slice(1) + '!';
                hideModal();
            }, 2000);
        });
    }
});

function hideModal() {
    modalWelcome.style.opacity = '0';
    modalWelcome.style.pointerEvents = 'none';
    bgBlur.style.zIndex = '-1';
}