let forms=document.getElementById("forms");
forms.addEventListener("submit",onsignup);
function onsignup(e){
    e.preventDefault();
    let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
    localStorage.setItem("userDetails",name);
    localStorage.setItem("UserDetails",email);
}