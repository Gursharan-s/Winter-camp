// const arr = [1, 2, 4, 3, 7, 9];

// function tran (arr) {
//     return arr % 2 === 0
// }

// const ans = arr.map(tran);
// console.log(ans);

// const arr = [1, 2, 4, 3, 7, 9];


// function cmap (arr , tran ) {
//     const result = [];

//     for (let i = 0 ; i < arr.length ; i++) {
//         result.push(tran(arr[i]));
//     }

//     return result;


// }

// function tran (num) {
//    return num * 3 ;
// }

// const ans = cmap (arr , tran);

// console.log(ans);

function userrr(aaa) {
    return aaa.filter((aaa) => aaa.age <= 18);
}

const user = {
    name: "gursharan",
    age: 20,
    gender: "male"
}
const user1 = {
    name: "guru",
    age: 19,
    gender: "female"
}
const user2 = {
    name: "kirat",
    age: 10,
    gender: "male"
}

const aaa = [user,user1,user2];
const age = userrr(aaa)
console.log(age);
