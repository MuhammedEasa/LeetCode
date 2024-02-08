// var differenceOfSums = function(n, m) {
//     let a = []
//     let divisble = 0
//     let not = 0
//     for(let i =1;i<=n;i++){
//         a.push(i)
//     }

//     for(let j= 0;j<a.length;j++){
//         if(a[j]%m === 0){
//             divisble+=a[j]
//         }else{
//             not +=a[j]
//         }
//     }
//     let sum =   not -divisble;
//     console.log("sum",sum);
// };
var differenceOfSums = function (n, m) {
    let num1 = 0
    let num2 = 0
    for (let i = 1; i <= n; i++) {
        if (i % m !== 0) {
            num1 += i
        } else {
            num2 += i
        }
    }
    return num1 - num2
};
// let n = 10, m = 3;
let n = 5, m = 6
differenceOfSums(n,m)