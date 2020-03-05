let bonus=20;
function sum(first,second){
    console.log(bonus);//ekhan thekeo access korte pari
    let result=first+second+bonus;
    return result;
}
const output=sum(10,10);
console.log(output);
// ekhane bonus ta global scope karon eta amra shobkhan theke access korte pari