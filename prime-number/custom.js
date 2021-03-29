// dividend被除數，divisor除數

let isPrime = true;
for (let dividend = 2; dividend <= 6; dividend++) {

    for (let divisor = 2; divisor < dividend; divisor++) {
        if (dividend % divisor == 0) {
            isPrime = false;
        }
    }
    // isPrime == false  相等於isPrime !== true
    if (isPrime == false) {
        console.log(`${dividend} 不等於質數`);
        // 如果這裡寫isPrime = false; 這樣之後跑迴圈都會是false，所以不行寫isPrime = false;
        isPrime = true;
    }
    else {
        console.log(`${dividend} 等於質數`);

    }
}




// 比較直覺的寫法

// for (let dividend = 2; dividend <= 6; dividend++) {
//     let isPrime = true;
//     for (let divisor = 2; divisor < dividend; divisor++) {
//         if (dividend % divisor == 0) {
//             isPrime = false;
//         }
//     }

//     if (isPrime == false) {
//         console.log(`${dividend} 不等於質數`);
//     }
//     else {
//         console.log(`${dividend} 等於質數`);

//     }
// }





