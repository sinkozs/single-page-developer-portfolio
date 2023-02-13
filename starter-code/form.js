const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const message = document.getElementById('message');

form.addEventListener('submit', e => {
    e.preventDefault();
    validate_inputs();
});


const set_error = (element, message) => {
    const input_control = element.parentElement;
    const error_display = input_control.querySelector('.error');

    error_display.innerText = message;
    input_control.classList.add('error');
    input_control.classList.remove('success');
};

const set_success = element => {
    const input_control = element.parentElement;
    const error_display = input_control.querySelector('.error');


    error_display.innerText = '';
    input_control.classList.add('success');
    input_control.classList.remove('error');
};


const validate_email = email =>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};


const validate_inputs = () => {
    const username_value = username.value.trim();
    const email_value = email.value.trim();
    const message_value = message.value.trim();

    if(username_value === ''){
            set_error(username, 'Sorry, invalid format here');
    }
    else{
        set_success(username);
    }

    if(email_value === ''){
        set_error(email, 'Sorry, invalid format here');
    }
    else if(!validate_email(email_value)){
        set_error(email, 'Sorry, invalid format here');
    }
    else{
        set_success(email);
    }

    if(message_value === ''){
        set_error(message, 'Sorry, invalid format here');
    }
    else{
    set_success(message);
    }
};