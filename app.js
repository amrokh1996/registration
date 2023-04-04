const form = document.getElementById("myForm");


form.addEventListener("submit", (e)=> {
    e.preventDefault()
    let name = e.target.UserName.value;
    let pass = e.target.password.value;
    let email = e.target.email.value;
    let phone = e.target.phone.value;

  if(name.trim().length == 0){
    alert("please Enter User Name")
    return false;
  }else if(/\s/g.test(name)){
    alert("User Name must Be without spaces")
    return false;
  } 
  
  if(pass.length <9){
    alert("The password must be at least 9 characters long")
    return false;
  }else if(!/[0-9]/.test(pass)){
    alert("Password must contain at least 1 number")
    return false;
  }else if(!/[A-Z]/.test(pass)){
    alert("Password must contain at least 1 UpperCase Letter")
    return false;
  }else if(!/[^A-Za-z0-9]/.test(pass)){ 
    alert("Password must contain at least 1 Special char.")
  return false;
}

if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
    alert("email must be like this format example@example.com")
    return false;
}

if(!/^07\d{8}$/.test(phone)){
    alert("phone number must start with 07 and must be 10 digits")
    return false;
}

if(sessionStorage.getItem(name) !== null){
    alert("User Name is already exist")
    return false;
}else{
    sessionStorage.setItem(name,pass)
    alert("successfully registeration")

}

    //form.reset();

});