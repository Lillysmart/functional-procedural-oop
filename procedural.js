//console.log("hi")

const userForm = document.querySelector('[data-user-input]')
//console.log(userForm)
const sugnUpHandler=(event)=>{
event.preventDefault()
  

const userNameInput = document.querySelector("[data-user-username]")
//console.log(userNameInput)

const userPasswordInput= document.querySelector("[data-user-password]")


const enteredUserName =userNameInput.value.trim()
console.log(enteredUserName)
const enteredUserPassword= userPasswordInput.value.trim()

if (userNameInput.length ===0){
console.error('Invalid Input, Userame must not be empty')
return;
}

if (userPasswordInput.length <=8){
  console.log('Invalid Input, Password must be 9 characters or longer')
  return;
  }

  const user ={
    userName:enteredUserName,
    userPassword :enteredUserPassword
  }
  console.log (user)
  console.log (`hi , i am ${user.userName}`)
}

userForm.addEventListener('submit',sugnUpHandler);
