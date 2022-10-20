function validateEmail(){
    let e = document.getElementById("email").value;
    const mail = /^[a-zA-Z0-9.$*]+@[a-zA-Z0-9]+.[a-zA-Z0-9]{2,}$/;
    if(e.match(mail)){
        return true;
    }
    else{
        alert("Enter Valid Email");
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
        return(true);
    }
    else{
        alert("Enter resume in valid format");
        return(false);
    }
}
function checkForm(){
    let e = validateEmail();
    let d = display();
    if(e && d){
        alert("Successful");
    }
    else{
        alert("Invaid Inputs");
    }
}