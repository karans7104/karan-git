const accountId = 144553
let accountEmail ="viral@gmail.com"
var accountPassword ="645627"
accountCity ="jaipur"
let accountState;
/*
prefer not to use var
because of issue in block scope and functional scope
*///accountId=2 not allowed//

accountEmail ="b@gmail.com"
accountPassword="0011"
accountCity="udaipur"
/*console.log(accountId)
console.log(accountEmail)
console.log(accountPassword)
console.log(accountCity)*/
console.table([accountId,accountEmail,accountPassword,accountCity, accountState])