console.log(sum(5)(10)(15)(20)(25)());

function sum(a){

return function(b){

if(b){
return sum(a + b)

} else{
return a;
}

}

}