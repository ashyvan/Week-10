window.addEventListener("DOMContentLoaded", domLoaded);

async function domLoaded(){
    //console.log("LOADED!!");

    try{
        const response = await fetch("https://us-central1-todo-cab56.cloudfunctions.net/app/api/todolist");
    
        const data1 = await response.json();
        //console.log(data);
        let toDoItems = data1.data;
        // console.log(toDoItems);

        addItemToDOM(toDoItems);
    }catch(err){}
}

function addItemToDOM(items){
    for(let i = 0; i < items.length; i++){
        console.log(items[i]);
        let currItem = items[i];
    }
    let newDiv = document.createElement("div");
    let dispalyList = document.getElementById("myList");
    dispalyList.innerHTML = items;
}

