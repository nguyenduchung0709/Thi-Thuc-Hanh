let arr = [];
for (let i = 1; i < 51; i++) {
    let number = parseInt(prompt(`Nhập vào số phần tử thứ ${i} `));
    arr.push(number);
}
console.log(arr);

let soLe = 0;
let tongSoLe = 0;
for (let i = 0; i < arr.length - 1; i += 2) {
    if (arr[i] % 2 !== 0) {
        tongSoLe += arr[i];
        soLe++;
        console.log(arr[i])
    }
}
document.write(`Trung bình cộng của các số lẻ ở vị trí chẵn bằng: ${tongSoLe / soLe}`);