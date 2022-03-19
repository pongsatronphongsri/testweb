function highestDigit(num){
    if(num == 0){
         return 0;
        }
    else{
      return Math.max(num%10, highestDigit(Math.floor(num/10)));
    }
  }
  console.log("highestDigit(379) : "+highestDigit(379));
  console.log("highestDigit(2) : "+highestDigit(2));
  console.log("highestDigit(377401) : "+highestDigit(377401));