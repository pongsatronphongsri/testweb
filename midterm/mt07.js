function sumTwoSmallestNums(num) {
    let arr = new Array();
    num.sort(function(a,b){
        return a-b}
        );

    for (i = 0; i < num.length; i++){
        if(num[i] >= 0){
            arr.push(num[i])

        }
    }
    return arr[0] + arr[1];
    
}
console.log("sumTwoSmallestNums :"+sumTwoSmallestNums([19,5,42,2,77]));
console.log("sumTwoSmallestNums :"+sumTwoSmallestNums([10,343445353,3453445,3453545353453]));
console.log("sumTwoSmallestNums :"+sumTwoSmallestNums([2,9,6,-1]));
console.log("sumTwoSmallestNums :"+sumTwoSmallestNums([879,953,694,-847,942,221,-91,-723,791,-587]));
console.log("sumTwoSmallestNums :"+sumTwoSmallestNums([3689,2902,3951,-475,1617,-2385]));