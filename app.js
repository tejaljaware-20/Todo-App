let form= document.querySelector("form");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

form.addEventListener("submit",function(event){
    
    event.preventDefault();

    let list = document.createElement("li");
    let delbtn= document.createElement("button");
    delbtn.innerText= "Delete";
    delbtn.classList.add("delete");
    


    list.innerText = inp.value;
    ul.appendChild(list);
    list.appendChild(delbtn);
    
    // delbtn.addEventListener("click", function(){
    //     delbtn.parentElement.remove();
    // })
    
    inp.value= "";
});

ul.addEventListener("click",function(event){
    console.dir(event);
    if(event.target.classList.contains("delete")){
    event.target.parentElement.remove();
    }
})

