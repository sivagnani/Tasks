function validateEmail(){
    let e = document.getElementById("email").value;
    const mail = /^[a-zA-Z0-9.$*]+@[a-zA-Z0-9]+.[a-zA-Z0-9]{2,}$/;
    if(e.match(mail)){
        document.getElementById("emailError").innerHTML="";
        return true;
    }
    else{
        document.getElementById("emailError").innerHTML="Enter valid Email";
        return false;
    }
}
function display(){
    let f = document.getElementById("uploadbut").value;
    let filepath = f.split("\\");
    let filename = filepath[filepath.length-1];
    let d = filename.split(".")[1];
    document.getElementById("upload").value=filename;
    if(d=="doc" || d=="pdf" || d=="docx"){
        document.getElementById("uploadError").innerHTML="";
        return(true);
    }
    else{
        document.getElementById("uploadError").innerHTML="Enter resume in valid format";
        return(false);
    }
}
function checkForm(){
    let e = validateEmail();
    let d = display();
    if(e && d){
        document.getElementById("status").style.color="green";
        document.getElementById("status").innerHTML="Success";
    }
    else{
        document.getElementById("status").style.color="red";
        document.getElementById("status").innerHTML="Enter valid Inputs";
    }
    document.getElementById("details").reset();
}