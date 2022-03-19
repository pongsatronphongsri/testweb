function removeDups(arrstr){
    let arr = []
    for(i of arrstr)
    {
        if(arr.indexOf(i) == -1){
            arr.push(i);

        }
    }
    return arr;
}
console.log(removeDups([1,0,1,0]));
console.log(removeDups(["The","big","cat"]));
console.log(removeDups(["John","Taylor","John"]));