function totalVolume(...boxes) {
	let x = [];
	let sum = 0;
	let vol = 0
	
	for(i = 0; i < boxes.length; i++){
		x = boxes[i];
		
		vol = x[0];
		for(j = 1; j < x.length;j++){
			vol = vol * x[j];
		}
		sum = sum + vol;
	}
	
	return sum;
}
console.log("totalVolume : "+totalVolume([4,2,4],[3,3,3],[1,1,2],[2,1,1]));
console.log("totalVolume : "+totalVolume([2,2,2],[2,1,1]));
console.log("totalVolume : "+totalVolume([1,1,1]));