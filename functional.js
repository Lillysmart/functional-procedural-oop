const REQUIRED="REQUIRED";
const MIN_LENGTH="MIN_LENGTH"

const validateUser=(value, flag , validatorValue)=>{
  if (flag === REQUIRED) {
    return value.trim().length > 0;
  }
  if (flag === MIN_LENGTH) {
    return value.trim().length > validatorValue;
  }
}

const getUserInput = (inputElementdata) => {
return document.querySelector(inputElementdata).value
};
const createUser =(userName, userPassword)=>{
if (!validateUser(userName,REQUIRED) || !validate(userPassword,MIN_LENGTH,5)){
  throw new Error ('Invalid input , username or password should be at least 6 characters ')
}
return {
  userName:userName,
userPassword:userPassword
}
}

const greet=(user)=>{
console.log (`hi , i am ${userName}`)
}
const signUpHandler = (event) => {
  event.preventDefault();
  const enteredUser =getUserInput("[data-user-username]")
  const enteredPassword=getUserInput("[data-user-password]")
  try {
    const newUser = createUser(enteredUser, enteredPassword)
greet(newUser)
  } catch (err) {
    alert(err.message)
  }
};

const connectForm = (formdata, formSubmitHandler) => {
  const userForm = document.querySelector(formdata);
  userForm.addEventListener("submit", formSubmitHandler);
};

connectForm("[data-user-input]", signUpHandler);

