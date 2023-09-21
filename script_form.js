// const inputs = document.getElementsByTagName("input");
// console.log(inputs);
// let output=[];
// for(let i in inputs){
//     const val = inputs[i].addEventListener("input",(e)=>{
//     console.log(e.target.value);
//     output.push(e.target.value);
//     console.log(output);
//     });
// }
// console.log(output);
const values=[];

function readData()
{
const fname = document.getElementById("fname").value;
//values.fname= fname.value;
const lname = document.getElementById("lname").value;
//values.lname= lname.value;
const address = document.getElementById("address").value;
//values.address= address.value;
const pincode = document.getElementById("pincode").value;
//values.pincode= pincode.value;
const genders = document.getElementsByName("gender");
var gender;
 for(gen of genders){
    if(gen.checked){
         gender= gen.value;
    }
};
const foodoptions = document.querySelector("select");
const food = Array.from(foodoptions.selectedOptions).map(v=>v.value).toString();
const state = document.getElementById("state").value
//values.state= state.value;
const country = document.getElementById("country").value;
//values.country= country.value;
values.push({fname,lname,address,pincode,gender,food,state,country});
}
function displayData(){
   const tbody=document.querySelector("tbody");
   tbody.innerHTML="";
   values.forEach((value,index)=>{
    const data =`
    <tr>
    <td>${value.fname}</td>
    <td>${value.lname}</td>
    <td>${value.address}</td>
    <td>${value.pincode}</td>
    <td>${value.gender}</td>
    <td>${value.food}</td>
    <td>${value.state}</td>
    <td>${value.country}</td>
    <tr>` 
    tbody.insertAdjacentHTML("beforeend",data);
   });
}
function resetForm(){
const fname = document.getElementById("fname").value="";
const lname = document.getElementById("lname").value="";
const address = document.getElementById("address").value="";
const pincode = document.getElementById("pincode").value="";
const genders = document.getElementsByName("gender");
const foodoptions = document.querySelector("select");
const state = document.getElementById("state").value="";
const country = document.getElementById("country").value="";
}
const submit = document.querySelector("#form").addEventListener("submit",(e)=>{
    e.preventDefault();
    const output = readData();
    console.log(output);
    displayData();
    resetForm();
});
