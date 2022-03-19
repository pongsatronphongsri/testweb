function capToFront(s) {
	let upper ='';
	let lower ='';
	for(let letter of s){
		letter.toUpperCase() == letter ? upper += letter : lower+= letter;
	}
	return upper+lower
}
console.log("hApPy :"+capToFront("hApPy"));
console.log("moveMENT :"+capToFront("moveMENT"))
console.log("shOrtCAKE :"+capToFront("shOrtCAKE"))