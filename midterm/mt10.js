function isValidIP(str) {
	if(/\d0|.0/.test(str)){
     return false;
	}
	else if(/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/.test(str)){
     return true;
	}
	else return false;
}    
      
console.log('1.2.3.4 :'+isValidIP('1.2.3.4'));
console.log('1.2.3 :'+isValidIP('1.2.3'));
console.log('1.2.3.4.5 :'+isValidIP('1.2.3.4.5'));
console.log('123.45.67.89 :'+isValidIP('123.45.67.89'));
console.log('123.456.78.90 :'+isValidIP('123.456.78.90'));
console.log('123.045.067.089 :'+isValidIP('123.045.067.089'));