const signUpHandler =(event)=>{
event.event.preventDefault()
}

const connectForm =(formid,formSubmitHandler )=>{
  const userForm = document.querySelector(formid)
userForm.addEventListener("submit",signUpHandler)}