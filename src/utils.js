export const ValidateRegistrationFields= (email , firstName , lastName , password) =>{
    if(validateNames(firstName , lastName) && validateEmail(email) && validatePass(password)){
        return true;
    }
} 


export const ValidateLoginFields = (email , password) => { 
    if(validateEmail(email) && validatePass(password)){
        return true;
    }
}

const validateNames = (firstName , lastName) => {
    let nameFormat =  /^[a-zA-Z]+$/;
    console.log(firstName + lastName);
    if((firstName.match(nameFormat)) &&( lastName.match(nameFormat))){
      return true;
    } else {
      alert("You have entered an invalid name!");
      return false;
    }
  }

  const validateEmail = (email) => {
    let  emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.match(emailFormat)){
      return true;
    } else {
      alert("You have entered an invalid email address!");
      return false;
    }
  }

  
  const validatePass = (pass) => {
    if(pass.trim() != ''){
      return true;
    } else {
      alert('password field empty!');
      return false;
    }
  }