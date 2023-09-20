let items=document.getElementById("items");
let forms=document.getElementById("forms");
forms.addEventListener("submit",onsignup);
function onsignup(e){
    e.preventDefault();
    let name=e.target.username.value;
let email=e.target.emailid.value;
let obj={
    username:name,useremail:email
};
localStorage.setItem(obj.useremail,JSON.stringify(obj));
  let li=document.createElement("li");
    let textnode=document.createTextNode(name);
    let textnode1=document.createTextNode(email);
    let textnode2=document.createTextNode(" ");
    li.appendChild(textnode);
    li.appendChild(textnode2);
    li.appendChild(textnode1);
    let btn=document.createElement("button");
    let btnText=document.createTextNode("Delete");
    btn.className="btn btn-success float-right m-2 delete"
    btn.appendChild(btnText);
    li.appendChild(btn);
    items.appendChild(li);
    btn.onclick=()=>{
        localStorage.removeItem(obj.useremail);
        items.removeChild(li);
        
        }
}
