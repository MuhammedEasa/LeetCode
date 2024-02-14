var judgeCircle = function(moves) {
    let y= 0
    let x = 0
    for(let move of moves){
     switch (move) {
        case 'U': y++; break;
        case 'D': y--; break;
        case 'L': x++; break;
        case 'R': x++; break;
     }
    }
    return x===0 && y===0
};
let moves = "UD"

console.log(judgeCircle(moves));