let items=document.getElementById("items");
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
    let li=document.createElement("li");
    let textnode=document.createTextNode(name);
    let textnode1=document.createTextNode(email);
    let textnode2=document.createTextNode(" ");
    li.appendChild(textnode);
    li.appendChild(textnode2);
    li.appendChild(textnode1);
    items.appendChild(li);

}