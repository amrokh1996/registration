const form = document.getElementById("myForm");
const UserName = document.getElementById("UserName");
const emaill = document.getElementById("emailInput");
const password = document.getElementById("passwordInput");
const phonee = document.getElementById("phoneInput");

UserName.addEventListener("input",()=>{
  checkUser(UserName.value);
})
emaill.addEventListener("input",()=>{
checkEmail(emaill.value)
})
password.addEventListener("input",()=>{
checkPassword(password.value)
})
phonee.addEventListener("input",()=>{
  checkPhone(phonee.value)
})

form.addEventListener("submit", (e)=> {
    e.preventDefault()

    checkUser(e.target.UserName.value)
    checkEmail(e.target.email.value)
    checkPassword(e.target.password.value)
    checkPhone(e.target.phone.value)
  
if(sessionStorage.getItem(e.target.UserName.value) !== null){
    alert("User Name is already exist")
    return false;
}else{
    sessionStorage.setItem(e.target.UserName.value,e.target.password.value)
    alert("successfully registeration")

}

    form.reset();

});

function checkUser(name){
  if(name.trim().length == 0){
    //alert("please Enter User Name")
    return false;
  }else if(/\s/g.test(name)){
    document.querySelector(".username-error").innerHTML = "User Name must Be without spaces";
    return false;
  }else{
    document.querySelector(".username-error").innerHTML = "";
  } 
}

function checkEmail(email){
  if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
    document.querySelector(".email-error").innerHTML ="email must be like this format example@example.com"
    return false;
}else{
  document.querySelector(".email-error").innerHTML =""

}

}
function checkPassword(pass){
  if(pass.length <9){
    document.querySelector(".password-error").innerHTML = "The password must be at least 9 characters long";
    return false;
  }else if(!/[0-9]/.test(pass)){
    document.querySelector(".password-error").innerHTML ="Password must contain at least 1 number"
    return false;
  }else if(!/[A-Z]/.test(pass)){
    document.querySelector(".password-error").innerHTML ="Password must contain at least 1 UpperCase Letter"
    return false;
  }else if(!/[^A-Za-z0-9]/.test(pass)){ 
    document.querySelector(".password-error").innerHTML ="Password must contain at least 1 Special char."
  return false;
}else{
  document.querySelector(".password-error").innerHTML =""
}
}
function checkPhone(phone){
  if(!/^07\d{8}$/.test(phone)){
    document.querySelector(".phone-error").innerHTML ="phone number must start with 07 and must be 10 digits"
      return false;
  }
  else{
    document.querySelector(".phone-error").innerHTML =""
  }

}