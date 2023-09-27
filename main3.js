let items=document.getElementById("items");
let forms=document.getElementById("forms");
forms.addEventListener("submit",onsignup);
document.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/bf14bec5b9e84b82966c55f3b9cbf700/Appointment").then((res)=>
    {
        for(let i=0;i<res.data.length;i++)
        {
    showUserName(res.data[i])
        }
    }).catch(err=>console.log(err))
  });
function onsignup(e){
    e.preventDefault();
    let name=e.target.username.value;
let email=e.target.emailid.value;
let obj={
    name,email
};
//localStorage.setItem(obj.useremail,JSON.stringify(obj));
axios.post("https://crudcrud.com/api/bf14bec5b9e84b82966c55f3b9cbf700/Appointment",obj).
then(res=>console.log(res.data)).
catch(err=>console.log(err));
showUserName(obj)
}
function showUserName(obj)
{
    let inputName=document.querySelector("#name");
let inputEmail=document.querySelector("#email");
  let li=document.createElement("li");
    let textnode=document.createTextNode(obj.name);
    let textnode1=document.createTextNode(obj.email);
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
        axios.get("https://crudcrud.com/api/bf14bec5b9e84b82966c55f3b9cbf700/Appointment").then
        ((res)=>{
            let id;
            for(let i=0;i<res.data.length;i++)
            {
            if(res.data[i].email==obj.email)
            {
            id=res.data[i]._id;
            break;
            }
        }
        console.log(id)
        axios.delete(`https://crudcrud.com/api/bf14bec5b9e84b82966c55f3b9cbf700/Appointment/${id}`) 
        }).catch(err=>console.log(err))
        //localStorage.removeItem(obj.useremail);
        items.removeChild(li);
        
        }
        let btn1=document.createElement("button");
    let btnText1=document.createTextNode("Edit");
    btn1.className="btn btn-success float-right m-2"
    btn1.appendChild(btnText1);
    btn1.onclick=()=>{
        inputName.value=obj.name;
        inputEmail.value=obj.email;
        //localStorage.removeItem(obj.useremail);
        axios.get("https://crudcrud.com/api/bf14bec5b9e84b82966c55f3b9cbf700/Appointment").then
        ((res)=>{
            let id;
            for(let i=0;i<res.data.length;i++)
            {
            if(res.data[i].email==obj.email)
            {
            id=res.data[i]._id;
            break;
            }
        }
        axios.delete(`https://crudcrud.com/api/bf14bec5b9e84b82966c55f3b9cbf700/Appointment/${id}`) 
        }).catch(err=>console.log(err))
        items.removeChild(li);
        
}
    li.appendChild(btn1);
    li.appendChild(btn);
    items.appendChild(li);
    inputName.value= '';
    inputEmail.value= '';
}
