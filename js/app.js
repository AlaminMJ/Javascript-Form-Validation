const from = document.getElementById('formid');
const name = document.getElementById('name');
const email = document.getElementById('email');
const number = document.getElementById('number');
const password = document.getElementById('password');
const confrimPassword = document.getElementById('confrim_password');


const getError = (input,errorMassage)=>{
    const parent = input.parentElement;
    parent.className = 'form-control error';
    const small = parent.querySelector('small');
    small.innerText = errorMassage;
}
const getSucess = (input)=>{
    const parent = input.parentElement;
    parent.className = 'form-control sucess';
    
}

const emailCheck = (input)=>{
    const simble = input.indexOf('@');
    const dot = input.lastIndexOf('.');
    debugger;
    if(input==='') {
        return false;
    }
    else if(simble == 0 && (dot - simble) < 2 ){
        return false;
    }
    else  if( dot == input.length - 1){
        return false
    }
    return true;
}

from.addEventListener('submit',(event) => {
    event.preventDefault();
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const numberValue = number.value.trim();
    const passwordValue = password.value.trim();
    const confrimPasswordValue = confrimPassword.value.trim();
    if(nameValue === ''){
        getError(name,'Name not be blank');
    }
    else if(nameValue.length < 3 ){
        getError(name,"Name should be more than 3 charecter")
    }
    else{
        getSucess(name);
    }
    
    if(emailCheck(emailValue)){
        getSucess(email);
    }
    else{
        getError(email,'Email not be blank');
    }
    if( numberValue ===''){
        getError(number,'Number is not blank');
    }
    else if (numberValue.length !=10){
        getError(number,' number should be 10 digit');
    }
    else{
        getSucess(number);
    }


    if(passwordValue ==''){
        getError(password,'Password not be blank');
    }
    else if( passwordValue.length < 6){
        getError(password,'Password should be 6 chareter');
    }
    else{
        getSucess(password);
    }
     if( confrimPasswordValue ==''){
         getError(confrimPassword,"confrim password not be blank");
        }
    else if( confrimPasswordValue !== passwordValue ){
        getError(confrimPassword,'Password not match');
    }
    else{
        getSucess(confrimPassword);
    }

});
document.querySelector