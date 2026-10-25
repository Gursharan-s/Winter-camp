// let color = "Red";
// const level = 2;
// var star = "super";

// console.log(color);
// console.log(level);
// console.log(star);

// function greet(name) {
//     return "Ke hal a ji " + name;
// }

// let sathsekal = greet(" gopi")

// console.log(sathsekal +  " oooo");


// function vanvote(age) {
//     if (age >= 18) {
//         console.log("yo can give cutiya vote ");

//     }
//     else {
//         console.log("you can not give vote chal challll");

//     }
// }

// const user1 = {
//     name: "gopi",
//     age: 19,
// }
// const user2 = {
//     name: "karan",
//     age: 29,
// }
// const user3 = {
//     name: "sunny",
//     age: 10,
// }

// vanvote(user1.age);
// vanvote(user2.age);
// vanvote(user3.age);
// console.log(vanvote);

// for (let i = 0; i < 10; i++) {
//     console.log("yes ", i);

// }

// let i = 0 ; 
// while (i < 10) {
//     console.log("yess " + i);
//     i++;
// }



// function greet(name, age) {
//     return "Ke hal a ji " + name + ", thode umar taa " + age;
// }

// const user = {
//     name: "kirat",
//     age: 20,
// };
// console.log(greet(user.name, user.age));



// function greet(name, age, gender) {
//     if (age >= 18) {
//         console.log("yo can give vote ");

//     }
//     else {
//         console.log("you can not give vote chal chalo ji");

//     }

//     return "Ke hal a ji " + name + ", thode umar taa " + age + "tussi kudi aa " + gender;
// }

// const user = {
//     name: "kirat",
//     age: 20,
//     gender: "girl"
// };
// const user1 = {
//     name: "simran",
//     age: 10,
//     gender: "girl"
// };
// console.log(greet(user.name, user.age, user.gender));
// console.log(greet(user1.name, user1.age, user1.gender));


// function even (uu) {
//     return uu.filter(uu => uu % 2 === 0)
// }

// const uu = [1 , 2, 3,4,5,6,7,8,9,10];
// const evennm = even(uu);

// console.log(evennm);

// function greater (numbers) {
//     return numbers.filter (numbers => numbers >10);
// }

// const numbers = [5, 12, 8, 20, 3, 15];

// const gre = greater(numbers);

// console.log(gre);


// function digit (names) {
//     return names.filter((names) => names.length > 1)  
// }
// const names = ["Aman", "Raj", "Gursharan", "Simran", "Jay"];

// const four = digit(names);

// console.log(four);


// function userrr(uuu) {
//     return uuu.filter((uuu) => uuu.age > 18);

// }
// const user = {
//     name: "gursharan",
//     age: 20
// }
// const user1 = {
//     name: "guru",
//     age: 19
// }
// const user2 = {
//     name: "kirat",
//     age: 10
// }

// const uuu = [user, user1, user2 ]
// const age = userrr(uuu);
// console.log(age);



function userrr(uuu) {
    return uuu.filter((uuu) => uuu.age > 18  && uuu.gender === "male");

}
const user = {
    name: "gursharan",
    age: 20,
    gender : "male"
}
const user1 = {
    name: "guru",
    age: 19,
    gender : "female"
}
const user2 = {
    name: "kirat",
    age: 10,
    gender : "male"
}

const uuu = [user, user1, user2 ]
const age = userrr(uuu);
console.log(age);


