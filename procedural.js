
const userForm = document.querySelector("[data-user-input]")

const userName = document.querySelector("[data-user-username]")


const userPassword= document.querySelector("[data-user-password]")

const sugnUpHandler=(event)=>{
event.preventDefault()
const enteredUserName =userName.value
const enteredUserPassword= userPassword.value
if (userName.trim().length ===0){

}
}

userForm.addEventListener('submit',sugnUpHandler);
