let number=13;
let flag=0;
for(let i=2 i<=number; i++){
	if(number%i==0){
		flag++;
	}

if(flag==1){
	console.log(number, "is a prime number");
}
else{
	console.log(number, "is not a prime number");
}
}