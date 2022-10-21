function require(text){
    if(text==""){
        return false;
    }
    else{
        return true;
    }
}
function validateName(){
    let name = document.getElementById('name').value;
    const validname =/^[a-zA-Z\s]{4,}$/;
    if(require(name)){
        if(name.match(validname)){
            document.getElementById('nameError').innerHTML="";
            return true;
        }
        else{
            document.getElementById('nameError').innerHTML="Enter valid Name";
            return false;
        }
    }
    else{
        document.getElementById('nameError').innerHTML="Name is required";
        return(false);
    }
}
function genderCheck(message) {
    document.getElementById('genderError').innerHTML="";
    alert("Hello "+message);
}
function requireGender(){
    if(document.getElementById('male').checked || document.getElementById('female').checked){
        document.getElementById('genderError').innerHTML="";
        return true;
    }
    else{
        document.getElementById('genderError').innerHTML="Please select Gender";
        return false;
    }
}
function validateContact(req){
    let number = document.getElementById('contact').value;
    const validnumber =/^[0-9]{10}$/;
    if(number.match(validnumber) || number==""){
        if(req==1 && number==""){
            document.getElementById('contactError').innerHTML="Please Enter Mobile Number";
            return false;
        }
        else{
            document.getElementById('contactError').innerHTML="";
            return true;
        }
    }
    else{
        document.getElementById('contactError').innerHTML="Enter valid Mobile Number";
        return false;
    }
}
function validateEmail(req){
    let email = document.getElementById("email").value;
    const mail = /^[a-zA-Z0-9.$*]+@[a-zA-Z0-9]+.[a-zA-Z0-9]{2,}$/;
    if(email.match(mail) || email==""){
        if(req==1 && email==""){
            document.getElementById('emailError').innerHTML="Please Enter Email";
            return false;
        }
        else{
            document.getElementById("emailError").innerHTML="";
            return true;
        }
    }
    else{
        document.getElementById("emailError").innerHTML = "Enter valid Email";
        return false;
    }
}
function contactbyCheck(contactby){
    if(contactby=="reqContact"){
        document.getElementById('reqContact').innerHTML="*";
        document.getElementById('reqEmail').innerHTML="";
        return validateContact(1);
    }
    if(contactby=="reqEmail"){
        document.getElementById('reqEmail').innerHTML="*";
        document.getElementById('reqContact').innerHTML="";
        return validateEmail(1);        
    }
    if(contactby=="reqBoth"){
        document.getElementById('reqContact').innerHTML="*";
        document.getElementById('reqEmail').innerHTML="*";
        let email = validateEmail(1);
        let number = validateContact(1); 
        return (email && number);
    }
}
function checkForm(){
    let name = validateName();
    let gender = requireGender();
    let number = contactbyCheck();
    if(name && gender && number){
        document.getElementById("status").style.color="green";
        document.getElementById("status").innerHTML="Success";
    }
    else{
        document.getElementById("status").style.color="red";
        document.getElementById("status").innerHTML="Enter valid Inputs";
    }
    document.getElementById("details").reset();
}