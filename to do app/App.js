let inputs = document.getElementById("inp");
let tasks = document.querySelector(".taskList");

function addTask(){
    if(inputs.value == ""){
        alert("Please Enter Your Task")
    }
    else{
        let newEle = document.createElement("ul");
        newEle.innerHTML= `${inputs.value} &nbsp;&nbsp;&nbsp; <i class="fa-solid fa-trash"></i>`;
        tasks.appendChild(newEle);
        inputs.value="";
        newEle.querySelector("i").addEventListener("click", remove);
        function remove(){
            newEle.remove()
        }
    }
}

// just for understanding DOM concept not the part of todo app
// var h1 = document. querySelector("h1");
// h1.addEventListener("click", function(){
// h1.style.color="yellow";
// h1.style.backgroundColor="black";
// h1.innerHTML="helloo buddy";
// })
 
// let bulb  = document.querySelector("#bulb");         
// let button = document.querySelector("button");
// let flag = 0;

// button.addEventListener("click", function(){
//     if(flag == 0){
//         bulb.style.backgroundColor ="yellow";
//     console.log("clicked");
//     flag = 1;

//     }
//     else{
//         bulb.style.backgroundColor ="transparent";
//     console.log("clicked again");
//     flag = 0;

//     }
// })

