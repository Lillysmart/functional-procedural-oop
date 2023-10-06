const signUpHandler = (event) => {
  event.preventDefault();
  
};

const connectForm = (formid, formSubmitHandler) => {
  const userForm = document.querySelector(formid);
  userForm.addEventListener("submit", formSubmitHandler);
};

connectForm("[data-user-input]", signUpHandler);

