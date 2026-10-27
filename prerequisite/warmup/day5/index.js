// let todoindex = 1;

// function todos() {

//     const element = document.getElementById("input");
//     const todo1 = element.value;
//     element.value = "";

//     const adddiv = document.createElement("div");
//     adddiv.id = "todo" + todoindex;

//     const addspan = document.createElement("span");
//     addspan.innerHTML = todo1;

//     adddiv.appendChild(addspan);

//     const buttonadd = document.createElement("button");
//     buttonadd.innerHTML = "Deletetodo";

//     buttonadd.setAttribute("onclick", "Deletetodo(" + todoindex + ")");

//     adddiv.appendChild(buttonadd);

//     document.getElementById("todoo").appendChild(adddiv);
//     todoindex = todoindex + 1;

// }

// function Deletetodo(index) {
//     const divele = document.getElementById("todo" + index);
//     divele.parentElement.removeChild(divele);
// }