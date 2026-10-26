const arr = [1, 2, 4, 3, 7, 9];

function tran (arr) {
    return arr % 2 === 0
}

const ans = arr.map(tran);
console.log(ans);

