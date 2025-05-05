let arrNumberOne = [];
let arrNumberTwo = [];
let tongUoc1 = 0;
let tongUoc2 = 0;

function friendlyNumber(number1, number2) {
    for (let i = 1; i < number1; i++) {
        if (number1 % i === 0) {
            arrNumberOne.push(i);
            tongUoc1 += i;
            console.log(tongUoc1)
        }
    }
    for (let i = 1; i < number2; i++) {
        if (number2 % i === 0) {
            arrNumberTwo.push(i);
            tongUoc2 += i;
            console.log(tongUoc2)
        }

    }
    return tongUoc1 === number2 && tongUoc2 === number1;
}

let result = friendlyNumber(220, 284)
console.log(result)