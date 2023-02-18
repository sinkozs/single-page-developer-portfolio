const form = document.getElementById('form_container');
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

    $(".error").css("color", "#FF6F5B");
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

const validate_username = username =>{
    const re = /^[ a-zA-ZÁáÉéÍíÓóÖöŐőÜüŰűÚú'-]+$/;
    return re.test(String(username));
};


 username.addEventListener("input", function(){
    const username_value = username.value.trim();
    $(".label_username").css("visibility", "visible");
    if(username_value === '' || validate_username(username_value) === false){
        set_error(username, 'Sorry, invalid format here');
    }
    else{
        set_success(username);
    }
 });


 email.addEventListener("input", function(){
    const email_value = email.value.trim();
    $(".label_email").css("visibility", "visible");
    if(email_value === '' || validate_email(email_value) === false){
        set_error(email, 'Sorry, invalid format here');
    }

    else{
        set_success(email);
    }
 });


 message.addEventListener("input", function(){
    const message_value = message.value.trim();
    $(".label_message").css("visibility", "visible");
    if(message_value === ''){
        set_error(message, "Please add message");
    }
    else if(message_value.length > 20){
        set_error(message, "Message is too long (max 200 chars)");
    }
    else{
        set_success(email);
    }
 });



