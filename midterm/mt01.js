function numberSplint(number) {
    let result;
    result = number/2;
    number % 2 != 0 ? console.log("["+(result-0.5)+", "+(result+0.5)+"]")
    :console.log("["+result+", "+result+"]");

}
numberSplint(4);
numberSplint(10);
numberSplint(11);
numberSplint(-9);
