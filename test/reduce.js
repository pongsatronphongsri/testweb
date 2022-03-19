const arrayofNumber = [1,2,3,4];

const sum = arrayofNumber.reduce((accumlator,currentValue) =>{
    return accumlator + currentValue;
});
console.log(sum);