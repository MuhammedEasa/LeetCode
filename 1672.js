var maximumWealth = function(accounts) {
    let wealth = 0;
    for(let i =0;i<accounts.length;i++){
        let max = 0;
        for(let j = 0;j<accounts[i].length;j++){
            max = max+accounts[i][j]
        }
        if(max>wealth){
            wealth = max
        }
    }
    return wealth
    };
  let  accounts = [[1,5],[7,3],[3,5]];
  console.log(maximumWealth(accounts));