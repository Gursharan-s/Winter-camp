// const arr = [1, 2, 4, 3, 7, 9];

// function tran (arr) {
//     return arr % 2 === 0
// }

// const ans = arr.map(tran);
// console.log(ans);

const arr = [1, 2, 4, 3, 7, 9];


function cmap (arr , tran ) {
    const result = [];

    for (let i = 0 ; i < arr.length ; i++) {
        result.push(tran(arr[i]));
    }

    return result;


}

function tran (num) {
   return num * 3 ;
}

const ans = cmap (arr , tran);

console.log(ans);
