function simplePair(arr, target) {
    for (let i = 0; i < arr.length;i++){
        for(let j = i+1; j <  arr.length;j++){
            let num1 = arr[i];
            let num2 = arr[j];
            if(num1 * num2 === target){
                return [num1,num2]
            }

        }
    }
    return null;
    
}
console.log(simplePair([1,2,3],3));
console.log(simplePair([1,2,3],6));
console.log(simplePair([1,2,3],9));