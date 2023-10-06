const validateUser=()=>{
  
}

const getUserInput = (inputElementdata) => {
return document.querySelector(inputElementdata).value
};


const signUpHandler = (event) => {
  event.preventDefault();
  const enteredUser =getUserInput("[data-user-username]")
  const enteredPassword=getUserInput("[data-user-password]")
};

const connectForm = (formdata, formSubmitHandler) => {
  const userForm = document.querySelector(formid);
  userForm.addEventListener("submit", formSubmitHandler);
};

connectForm("[data-user-input]", signUpHandler);

