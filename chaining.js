var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];
//create a function to call for the for each 
//
//descending order sort(function(a,b){return b-a});
//remove interger greater than 19  filter()
// for each method (i * 1.5) 
//

//foreach function
function mathStuff(item){
	return (item * 1.5) - 1;
}

//filter()
function twentySomething(num){
	if (num < 19){
	 return num;
	}
}

function totalSum(total, num){
	return total + num;
}


var cleanArray = integers.filter(twentySomething).sort(function(a, b) { return b - a }).map(mathStuff).reduceRight(totalSum); 
console.log(cleanArray);









