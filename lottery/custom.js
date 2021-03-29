function getRandom(x) {
    return Math.floor((Math.random() * x) + 1);

}

let arr = [];
let n = 0;

function getPowerNum() {
    for (let i = 1; i <= 6; i++) {
        let num = getRandom(38);
        if (arr.indexOf(num) > -1) {
            // 如果數字重複i--再重新抓數字
            i--;
            continue;
        }
        // 數字沒出現過，則新增
        else {
            arr.push(num);
        }

    }
    arr.sort(function (a, b) {
        /**
         * 用數字排序
         * a - b 指的是由小到大
         * b - a 指的是由大到小
         * 
         * 若只有 arr.sort()，括號裡面沒有排序用的 function，
         * 則以字串作為排序依據，例如 [20, 5, 9, 10]，
         * 就會變成 [10, 20, 5, 9]
         */
        return a - b;
    });
    // arr.join() 連接數字
    n = getRandom(8);
    return `第一區號碼為： ${arr.join(",")} ，第二區號碼為： ${n}`;


}

alert(getPowerNum());