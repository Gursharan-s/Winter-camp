function todos() {

    const element = document.getElementById("in");
    const todo1 = element.value;


    const adddiv = document.createElement("div");

    const addspan = document.createElement("span");
    addspan.innerHTML = todo1;

    adddiv.appendChild(todo1);

    const addbuttton = document.createElement("button");
    addbuttton.innerHTML = addbuttton;


}