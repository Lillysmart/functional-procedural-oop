
const userForm = document.querySelector("[data-user-input]")

const userName = document.querySelector("[data-user-username]")


const userPassword= document.querySelector("[data-user-password]")

const sugnUpHandler=(event)=>{
event.preventDefault()
const enteredUserName =userName.value
const enteredUserPassword= userPassword.value
if (userName.trim().length ===0){
alert('Invalid Input, Userame must not be empty ')
return
}
if (userPassword.trim().length <=8){
  alert('Invalid Input, Password must be 9 characters or longer  ')
  return
  }

  const user ={
    userNameInput:enteredUserName,
    userPasswordInput :enteredUserPassword
  }
  console.log (user)
  console.log (`hi , i am ${user.userNameInput}`)
}

userForm.addEventListener('submit',sugnUpHandler);
