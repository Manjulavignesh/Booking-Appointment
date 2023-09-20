
let forms=document.getElementById("forms");
forms.addEventListener("submit",onsignup);
function onsignup(e){
    e.preventDefault();
    let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let obj={
    username:name,useremail:email
};
let obj_serialized=JSON.stringify(obj);
localStorage.setItem("obj",obj_serialized)
    let obj_deserialized=JSON.parse(localStorage.getItem("obj"));
    console.log(obj_deserialized);
}